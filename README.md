# AppF1Games

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Cambiar conection.ts en la carpeta backend/db/connection.ts

- En el archivo connection.ts que se encuentra en la carpeta DB dentro de ***backend*** hay que cambiar los parametros dependiendo de su configuracion del **MySql**
- const sequelize = new Sequelize(**Nombre de DATABASE**, **Usuario del MySql**, **Contraseña de MySql**,{
    host: 'localhost',
    dialect: 'mysql',
});
- Ejemplo: new Sequelize(**'f1Games'**, **'root'**, **'12345'**), .... *Este ejemplo es mi configuracion*

## Correr Back para obtener Usuarios y Puntos del usuario.

- Abrir dos consolas y dirigirse a la carpeta ***backend***
- En una de las consolas hacer un **NPM INSTALL** para que se instalen todas las dependencias de la parte del BACK
- Una vez estando en la carpeta ***backend*** hay que escribir los siguientes **comandos** en cada consola
- **npm run dev**
- **npm run ts**

Una vez hecho esto ya tenemos el back funcionando para obtener usuarios y puntos.

## Correr FrontEnd para el uso de la app.

- Hay que dirigirse en la carpeta donde esta la app de angular
- Correr el comando **ng s -o**
- Disfrutar el juego!!

## SOMOS AFICIONADOS DE LA F1


