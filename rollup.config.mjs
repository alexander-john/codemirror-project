import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "./src/editor.mjs",  // Main input file
  output: {
    file: "./dist/editor.bundle.js",  // Output file for the bundle
    format: "iife"  // Immediately Invoked Function Expression format
  },
  plugins: [nodeResolve()]  // Use nodeResolve plugin to resolve node modules
};
