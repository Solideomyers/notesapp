# Notes App - Interview

### Requirements

You need to implement a simple web application that allows you to take notes, tag and filter them. The
development is divided in two phases:

- Phase 1: note creation
- Phase 2: tag application and filtering

### Importan considerations

- Content should be persisted in a relational database by using an ORM

### Technologies

- Structure the app as a Single Page web Application, i.e. frontend and backend are different
  apps. That is the general case when you use React, Angular, Vue.js or any other similar UI
  framework. Please consider that rendering a web page on the server-side (by using JSP, EJS,
  Smarty, Blade, etc.) but using a bit of JS to, for instance, fetch some data, is not a pure SPA.
  You need to implement an isolated app, in a separate folder, with its custom package.json
  and dependencies.
- The backend app exposes a REST API that is the way in which the frontend app
  communicates with the backend
- The backend app is separated into layers (e.g., Controllers, Services, DAOs/Repositories, etc.).

### User stories

#### Phase 1

- As a user, I want to be able to create, edit and delete notes
- As a user, I want to archive/unarchive notes
- As a user, I want to list both my active notes
- As a user, I want to list both my archived notes

#### Phase 2

- As a user, I want to be able to add/remove categories to notes
- As a user, I want to be able to filter notes by category

### Extra points

- Deploy
- Login

## Contributing

- Francisco A. Myers - [![Linkedin]](https://www.linkedin.com/in/franciscomyers/) [![Github]](https://github.com/Solideomyers)

## Built With

[![HTMLl5][html5]][html-url][![CSS3][css3]][css-url][![Javascript][javascript]][js-url]
[![Express][Express.js]][express-url][![Node][Node.js]][Node-url][![NPM][npm]][npm-url]
[![React][React.js]][React-url][![Vite][Vite.js]][Vite-url][![Redux][Redux-query]][Redux-url][![Tailwind][Tailwind-css]][Tailwind-url]
[![Postgresql][pgsql]][pgsql-url][![Sequelize][Sequelize-orm]][Sequelize-url]
[![Git][git]][git-url][![Github][github]][github-url]

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite.js]: https://img.shields.io/badge/Vite-20232E?style=for-the-badge&logo=vite&logoColor=51DAF1
[Vite-url]: https://vitejs.dev/
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com
[Sequelize-orm]: https://img.shields.io/badge/Sequelize-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Sequelize-url]: https://sequelize.org/
[npm]: https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://www.npmjs.com/
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Redux-query]: https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://en.redux.js.org/
[Tailwind-css]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Render]: https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white
[Render-url]: https://render.com/
[html5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://es.wikipedia.org/wiki/HTML5
[css3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://developer.mozilla.org/es/docs/Web/CSS
[javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[js-url]: https://www.javascript.com/
[git]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[git-url]: https://git-scm.com/
[github]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/
[pgsql]: https://img.shields.io/badge/Postgresql-4169E1?style=for-the-badge&logo=Postgresql&logoColor=white
[pgsql-url]: http://postgresql.org/
[Linkedin]: https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white

## Documentation

### Init project by Windows

- from folder backend to execute comand node setupWin.js
- then introduce your variables enviroment:
  - DB_USER
  - DB_HOST
  - DB_PASSWORD

### NOTE:

- The databse must be called notesweb

### Init project by Linux and MacOS

- from folder backend to execute comand node setupOs.js
- then introduce your variables enviroment:
  - DB_USER
  - DB_HOST
  - DB_PASSWORD

### NOTE:

- The databse must be called notesweb
