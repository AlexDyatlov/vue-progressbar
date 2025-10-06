# Vue 3 + TypeScript + Vite

### Обзор:
+ [Запуск проекта в ide](#start);
+ [Развертывание проекта в Docker](#docker);

### <a name="start"></a> 🛠️ Запуск проекта в ide:
1. Выполнить команду `.cp -n .env.example .env`.
2. Команды:
  + `npm i` - установит все зависимости.
  + `npm run dev` - запускает приложение в режиме разработки.
  + `npm run format` - форматирует файлы с помощью Prettier.
  + `npm run lint` - запускает ESLint для проверки ts,vue файлов.
  + `npm run type:check` - проверяет типы TypeScript на наличие ошибок.
  + `npm run audit` - проверяет зависимости проекта на наличие уязвимостей.
  + `npm run check` - запускает проверки (типы, линтинг, форматирование, аудит) параллельно.


### <a name="docker"></a> 🐳 Развертывание проекта в Docker:

1. Выполнить пункт 1 с «Запуск проекта в ide».
2. Запуск сборки в dev режиме:
  + `docker compose build`
  + `docker compose run --rm node npm i`
  + `docker compose up`
3. Команды:
  + `docker compose run --rm node npm run format` - Запуск Prettier.
  + `docker compose run --rm node npm run lint` - Запуск ESLint.
  + `docker compose run --rm node npm run type:check` - Запуск проверки типов.
  + `docker compose run --rm node npm run lint` - Проверка зависимостей на уязвимости.
  + `docker compose run --rm node npm run check` - Запуск всех проверок.


#### Выполнение команд в контейнере

``` shell
docker-compose exec node sh
```