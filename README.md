

## Description

This project has been created using Nest.js with Typescript template.

The applicattion was created with one unique controller file included  in the devices folder. In this controller there are the endpoints to get the devices list (paginated and the full list), to create (POST), edit (PUT) and delete devices (DELETE). Furthermore, there is an extra endpoint to get the total amount of devices registered in DB. The endpoints where defined trying to consider REST principles.

To store the devices information I used PostgresSQL database. To access the database I used __pg__ package.

To help in development process, I added a docker-compose.yml file to build-up a PostgresSQL container.

The application was deployed using Railway platform.

https://back-vodafone-production.up.railway.app

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

