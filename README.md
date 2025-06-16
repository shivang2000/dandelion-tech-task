steps to run the project

- first you will need docker for postgress
- run docker compose up -d to fire up a postgresdb
- next run " npm i " to install packages
- next run "npm exec prisma migrate dev" to create database and tables
- next run "npm exec prisma generate" to create prisma client for using it in the application
- next run dev server "npm run dev" to fire up the next local dev build.
