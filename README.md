# Health Status Indicator

[![CI](https://github.com/Gala-knd/health-status/actions/workflows/ci.yml/badge.svg)](https://github.com/Gala-knd/health-status/actions/workflows/ci.yml)

## Описание

Функция для определения статуса здоровья персонажа на основе значения health.

## Функция getHealthStatus

Принимает объект персонажа с полем health и возвращает:
- `healthy` - если health > 50
- `wounded` - если health >= 15 и <= 50
- `critical` - если health < 15

## Установка и запуск

\`\`\`bash
npm install
npm test
\`\`\`

## Покрытие тестами

Проект настроен на 100% покрытие тестами.

## GitHub Actions

Настроен автоматический запуск тестов при push и pull request.
