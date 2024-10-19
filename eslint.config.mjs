import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { 
      globals: globals.browser, 
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules:{
      "react/react-in-jsx-scope": "off", //!desabilita a regra de 'React' no escopo em projetos com React 17+ n consegui fazer isso daqui funcionar.
      "no-unused-vars": "warn",
      "quotes": ["error", "double"],
      semi: ["error", "always"],
      indent: ["error", 2],
    }  
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];