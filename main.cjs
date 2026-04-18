// const { app, BrowserWindow } = require("electron");
// const path = require("path");

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 1000,
//     height: 700,
//     icon: path.join(__dirname, "src", "assets", "icon.ico"),
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false,
//     },
//     autoHideMenuBar: true,
//     backgroundColor: "#0a0a0a",
//     titleBarStyle: "hidden",
//     titleBarOverlay: {
//       color: "#0a0a0a",
//       symbolColor: "#ffffff",
//     },
//   });

//   // Ensure new windows opened by the renderer use the app icon
//   win.webContents.setWindowOpenHandler((_details) => {
//     return {
//       action: "allow",
//       overrideBrowserWindowOptions: {
//         icon: path.join(__dirname, "src", "assets", "icon.ico"),
//         autoHideMenuBar: true,
//       },
//     };
//   });

//   // Load Vite dev server in development, else load the built HTML
//   if (process.env.NODE_ENV === "development") {
//     win.loadURL("http://localhost:5173");
//   } else {
//     win.loadFile(path.join(__dirname, "dist", "index.html"));
//   }
// }

// app.whenReady().then(createWindow);

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });

// app.on("activate", () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });
