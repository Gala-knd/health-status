import globals from "globals";

export default [{
    files: ["**/*.js"],
    languageOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        globals: {
            ...globals.node,
            ...globals.jest,  // Добавляем глобальные переменные Jest
        },
    },
    rules: {
        // Здесь могут быть ваши правила
    },
}];
