# module-bank-tabs

## Project demo 

https://mari-mishon.github.io/module-bank-application

## Примечания
Есть три статических таба (Заявки, счета, создание новой заявки) и динамические табы с открытыми заявками.

Дату и время форматировала с помощью библиотки dayjs.

Создание id профиля генерировала с помощью библиотеки uuid.

Редактируется заявка, отображаемая в разделе заявок (без доп.данных), так как в state хранится и добавляется обычная заявка.

Состояние приложения восстановливается при обновлении страницы 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
