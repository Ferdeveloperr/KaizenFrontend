import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // Asegúrate de tener este plugin instalado
import tsparser from "@typescript-eslint/parser"; // Asegúrate de tener este parser instalado
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tsparser, // Agregar el parser de TypeScript
      parserOptions: {
        ecmaVersion: 2020, // O la versión que necesites
        sourceType: "module", // Si usas módulos ES
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
