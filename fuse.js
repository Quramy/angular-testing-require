const fsbx = require("fuse-box");

const fuse = fsbx.FuseBox.init({
  homeDir: "src",
});

fuse.bundle({
  "dist/bundle.js": "> main.ts",
});
