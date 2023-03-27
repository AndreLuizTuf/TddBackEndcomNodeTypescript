module.exports = {
  type: 'sqlite',
  database: './src/database/database.test.sqlite',
  entities: [
    process.env.PORT === 5001
      ? 'src/entities/*.ts'
      : 'build/entities/*.js'
  ],
  migrations: [
    process.env.PORT === 5001
      ? 'src/database/migrations/*.ts'
      : 'build/database/migrations/*.js'

  ],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/entities'
  }
}
