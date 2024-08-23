module.exports = {
    migrationsDir: "src/migrations",
    modelsDir: "src/models",
    seedersDir: "src/seeders",
    databaseConfig: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    }
  };