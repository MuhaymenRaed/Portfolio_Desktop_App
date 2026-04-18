// const fs = require("fs");
// const os = require("os");
// const path = require("path");
// const https = require("https");
// const { spawnSync } = require("child_process");

// const VERSION = "2.6.0";
// const ARCHIVE_URL = `https://github.com/electron-userland/electron-builder-binaries/archive/refs/tags/winCodeSign-${VERSION}.zip`;

// function downloadFile(url, destination) {
//   return new Promise((resolve, reject) => {
//     const file = fs.createWriteStream(destination);

//     https
//       .get(url, (response) => {
//         if (
//           response.statusCode >= 300 &&
//           response.statusCode < 400 &&
//           response.headers.location
//         ) {
//           file.close();
//           fs.rmSync(destination, { force: true });
//           downloadFile(response.headers.location, destination)
//             .then(resolve)
//             .catch(reject);
//           return;
//         }

//         if (response.statusCode !== 200) {
//           file.close();
//           fs.rmSync(destination, { force: true });
//           reject(
//             new Error(`Download failed with status ${response.statusCode}`),
//           );
//           return;
//         }

//         response.pipe(file);

//         file.on("finish", () => {
//           file.close(resolve);
//         });
//       })
//       .on("error", (error) => {
//         file.close();
//         fs.rmSync(destination, { force: true });
//         reject(error);
//       });
//   });
// }

// function runPowerShell(command) {
//   const result = spawnSync(
//     "powershell.exe",
//     [
//       "-NoProfile",
//       "-NonInteractive",
//       "-ExecutionPolicy",
//       "Bypass",
//       "-Command",
//       command,
//     ],
//     { stdio: "inherit" },
//   );

//   if (result.status !== 0) {
//     throw new Error(
//       `PowerShell command failed with exit code ${result.status}`,
//     );
//   }
// }

// async function main() {
//   if (process.platform !== "win32") {
//     return;
//   }

//   const localAppData =
//     process.env.LOCALAPPDATA || path.join(os.homedir(), "AppData", "Local");
//   const cacheRoot = path.join(
//     localAppData,
//     "electron-builder",
//     "Cache",
//     "winCodeSign",
//   );
//   const targetDir = path.join(cacheRoot, `winCodeSign-${VERSION}`);

//   if (fs.existsSync(targetDir)) {
//     console.log(`winCodeSign cache already prepared at ${targetDir}`);
//     return;
//   }

//   fs.mkdirSync(cacheRoot, { recursive: true });

//   const tempZip = path.join(cacheRoot, `winCodeSign-${VERSION}.zip`);
//   const extractRoot = path.join(cacheRoot, `winCodeSign-${VERSION}-extract`);
//   const extractedDir = path.join(
//     extractRoot,
//     `electron-builder-binaries-winCodeSign-${VERSION}`,
//   );

//   fs.rmSync(tempZip, { force: true });
//   fs.rmSync(extractRoot, { recursive: true, force: true });

//   console.log(`Downloading ${ARCHIVE_URL}`);
//   await downloadFile(ARCHIVE_URL, tempZip);

//   console.log("Extracting winCodeSign cache from zip archive");
//   runPowerShell(
//     `Expand-Archive -LiteralPath '${tempZip}' -DestinationPath '${extractRoot}' -Force`,
//   );

//   if (!fs.existsSync(extractedDir)) {
//     throw new Error(`Expected extracted directory not found: ${extractedDir}`);
//   }

//   fs.renameSync(extractedDir, targetDir);
//   fs.rmSync(tempZip, { force: true });
//   fs.rmSync(extractRoot, { recursive: true, force: true });

//   console.log(`Prepared winCodeSign cache at ${targetDir}`);
// }

// main().catch((error) => {
//   console.error(error.message);
//   process.exit(1);
// });
