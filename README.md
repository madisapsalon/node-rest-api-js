# Dead simple Node.js REST API boilerplate

Vanilla javascript REST API boilerplate for prototyping.

It uses Mongo database. So no table relations needed. Nice for fast prototyping.

## Before start, you need
- Node 12.16+
- Docker

## Let's get started
**Step 1:** Fork the repository or download it into your local machine

**Step 2:** Open the project in your IDE

**Step 3:** Run docker-compose
```sh
docker-compose up
```
It starts Mongo database and Mongo Express client (http://localhost:8081).

**Step 4:** Install dependencies

```
npm install
```

**Step 5:** Start the server on http://localhost:3000
```
npm run dev
```

You are good to go!

## Default development environment credentials

**Mongo database**

USER: root

PASSWORD: example

**Mongo express client**

ADMIN USERNAME: root

ADMIN PASSWORD: example

## Project structure
```
├── api
│   ├── app.js
│   ├── config
│   │   └── index.js
│   ├── controllers
│   │   ├── entity.js
│   │   └── user.js
│   ├── logger.js
│   ├── middleware
│   │   └── auth.js
│   ├── models
│   │   └── UserModel.js
│   └── routes
│       ├── entity
│       │   └── index.js
│       ├── index.js
│       └── user
│           └── index.js
├── db
│   └── index.js
├── docker-compose.yml
├── dockervolume
├── index.js
├── package-lock.json
├── package.json
├── LICENSE
├── README.md

```

| Name | Description |
| ------ | ------ |
| **/api** | All api logic and conf |
| **/api/config** | Different environment configuration |
| **/api/controllers** | API business logic |
| **/api/middleware** | Middlewares for api. Default is authorization |
| **/api/models** | Database models. Default is User |
| **/api/routes** | Api routes. Defaults are user and sample entity |
| **/db** | Mongo database credentials and connection logic |
| **/dockervolume** | Mongo database local storage |
| **index.js** | The api process journey starts from here. |
