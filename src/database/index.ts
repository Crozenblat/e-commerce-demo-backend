import { Dialect, Sequelize } from "sequelize";

const validateEnvVariables = () => {
    const requiredEnvVars = [
        { name: 'MYSQL_DATABASE', value: process.env.MYSQL_DATABASE },
        { name: 'MYSQL_USER', value: process.env.MYSQL_USER },
        { name: 'MYSQL_PASSWORD', value: process.env.MYSQL_PASSWORD },
        { name: 'DB_HOST', value: process.env.DB_HOST },
        { name: 'DB_PORT', value: process.env.DB_PORT },
        { name: 'DB_DIALECT', value: process.env.DB_DIALECT }
    ];

    const missingVars = requiredEnvVars
        .filter(envVar => !envVar.value)
        .map(envVar => envVar.name);

    if (missingVars.length > 0) {
        throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }
};

validateEnvVariables();

const client = new Sequelize(
    process.env.MYSQL_DATABASE as string, 
    process.env.MYSQL_USER as string, 
    process.env.MYSQL_PASSWORD as string, 
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT as Dialect,
        port: Number(process.env.DB_PORT)
    }
);

export async function connectToDatabase(){
    try {
        await client.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        throw new Error(`Unable to connect to the database: ${error}`);
    }
}

export default client;