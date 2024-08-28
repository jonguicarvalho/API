import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.browser,
        require: "writable",
        process: "writable",
      }
    },
  pluginJs.configs.recommended,
];
