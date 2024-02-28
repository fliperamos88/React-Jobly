
# Jobly - Job Application App (with React)

- Jobly - Job Application App
  - [Description](#description)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
 

## Description

Jobly is a web application simulating a real-world job application process. It provides users with a platform to create profiles, search for open positions, upload resumes, and submit applications. Users will appreciate its utilization of [Bcrypt](https://www.npmjs.com/package/bcrypt) for secure password hashing and [JSON Web Tokens](https://jwt.io) for user authentication.
  
## Tech Stack

This application was developed with the support of the following tools:

- Programming languages: [JavaScript](https://www.javascript.com)
- Libraries/Frameworks: [Express](https://expressjs.com), [React](https://react.dev)
- Database storage and management: [PostgreSQL](https://www.postgresql.org)


## Installation

In the server directory, provide a database URL or create a new database to sequelize in the config.js located in the config directory. This application uses PostgreSQL.

Then, from both the server and client directory, run:

```shell
$ npm install
```

After package installation, you can run from either the client or server directory to start both client and server, with the support of [Concurrently](https://www.npmjs.com/package/concurrently):

```shell
$ npm run dev
```

Sequelize will automatically create the database, but there will be no data in it. From the database directory, located in the server directory, you can optionally run the jobly-seed.sql file to insert data into the database.



