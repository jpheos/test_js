import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["src/index.js"],
    bundle: true,
    outfile: "www/main.js",
  },
  { root: "www", port: 8888 }
);
