/** @type { import("drizzle-kit").Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default{
    schema: "./src/configs/schema.jsx",
    dialect:"postgresql",
    dbCredentials:{
        url:process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,
    }
};