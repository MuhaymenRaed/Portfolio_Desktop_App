// const fs = require("fs");
// const path = require("path");

// const releaseDir = path.join(__dirname, "..", "release");

// if (!fs.existsSync(releaseDir)) {
//   process.exit(0);
// }

// for (const entry of fs.readdirSync(releaseDir)) {
//   if (entry === "win-unpacked") {
//     continue;
//   }

//   if (!entry.endsWith(".exe") && !entry.endsWith(".7z")) {
//     continue;
//   }

//   fs.rmSync(path.join(releaseDir, entry), { force: true, recursive: true });
//   console.log(`Removed stale artifact: ${entry}`);
// }
