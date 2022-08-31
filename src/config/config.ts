export default () => ({
  mongo: {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    db: process.env.MONGO_DB,
    user: process.env.MONGO_USER,
    secret: process.env.MONGO_SECRET,
    get url() {
      return `mongodb://${this.user}:${this.secret}@${this.host}:${this.port}/${this.db}?authsource=admin`;
    },
  },
  postgres: {
    driver: process.env.POSTGRES_DRIVER,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    db: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    secret: process.env.POSTGRES_SECRET,
    get url() {
      return `${this.driver}://${this.user}:${this.secret}@${this.host}:${this.port}/${this.db}`;
    },
  },
});
