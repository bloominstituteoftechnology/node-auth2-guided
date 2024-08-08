# Node Auth 2 Guided Project

Guided project for **Node Auth 2** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- [Postman](https://www.postman.com/) installed.

## Project Setup

- [ ] clone this repository.
- [ ] move inside the project.
- [ ] type`npm i` to download dependencies.
- [ ] type `npm run resetdb` to set up the database.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor adds support for `JSON Web Tokens (JWT)` to the API.


 ## Server

 - produce a token
 - add needed data to the token
 - when a new request comes in to restricted area
    - verify that the token is valid
    - make the payload (data) available for the rest of the API.

## Client

- store the token
- send the token on following request
- destroy the token on logout
