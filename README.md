To run this in a container, you must:

- Install Docker Desktop
- Install the VSCode Dev Containers extension.
- Click the remote connection icon in the bottom left
- Click the "Reopen in Container" option from the resulting dropdown.
- The extension will create the necessary containers from the files in .devcontainer and reopen the project in VS Code inside the container for development.

You must create a file called .env.dev with the following format:

APP_PORT={api port number to listen from}

MYSQL_DATABASE={db name}
MYSQL_USER={root or username}
MYSQL_ROOT_PASSWORD={db password}

DB_HOST={db host}
DB_PORT={db port}
DB_DIALECT={db dialect for sequelize(mysql, postgres, etc)}

- After building the container, use the below command within the api Docker container to construct the database:
sh -c "npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"

- After seeding is complete, do npm run dev to start the api listening.