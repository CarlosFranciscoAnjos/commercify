export default () => ({
  mongo: {
    host: process.env.MONGO_SERVICE_HOST,
    port: process.env.MONGO_SERVICE_PORT,
    db: process.env.MONGO_DB,
    user: process.env.MONGO_USER,
    secret: process.env.MONGO_SECRET,
    get url() {
      return `mongodb://${this.user}:${this.secret}@${this.host}:${this.port}/${this.db}?authsource=admin`;
    },
  },
  postgres: {
    driver: process.env.POSTGRES_DRIVER,
    host: process.env.POSTGRES_SERVICE_HOST,
    port: process.env.POSTGRES_SERVICE_PORT,
    db: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    secret: process.env.POSTGRES_SECRET,
    get url() {
      return `${this.driver}://${this.user}:${this.secret}@${this.host}:${this.port}/${this.db}`;
    },
  },
  redis: {
    port: process.env.REDIS_SERVICE_PORT,
    host: process.env.REDIS_SERVICE_HOST,
  },
  session: {
    secret: process.env.SESSION_SECRET,
    resave: Boolean(process.env.SESSION_RESAVE),
    saveUninitialized: Boolean(process.env.SESSION_SAVE_UNINITIALIZED),
    maxAge: Number(process.env.SESSION_MAX_AGE),
  },
});
