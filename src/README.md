# Qtlite

Qtlite uses three packages, detailed below.
- Backend
  The backend is the database server and is required for the frontend and package to operate. It can integrate with other database servers to provide replication between them.
- Frontend
  The frontend is a web interface for managing your database without using the package CLI. It's only installed with the full install.
- Client
  The client is an npm package which can be installed to easily interact with the database and build complex queries without having to make complex API calls.
  It's not required as the database can be interacted with through http requests, however it's a useful package. In addition, the package includes a CLI to
  configure the database.
