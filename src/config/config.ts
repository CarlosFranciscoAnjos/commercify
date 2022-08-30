export default () => ({
  mongo: {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    db: process.env.MONGO_DB,
    user: process.env.MONGO_USER,
    secret: process.env.MONGO_SECRET,
    get uri() {
      return `mongodb://${this.user}:${this.secret}@${this.host}:${this.port}/${this.db}?authsource=admin`;
    },
  },
  postgres : {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_HOST_PORT,
    db: process.env.POSTGRES_HOST_DB,
    user: process.env.POSTGRES_HOST_USER,
    secret: process.env.POSTGRES_HOST_SECRET,
    get uri() {
      return `postgresql://${this.user}:${this.secret}@${this.host}:${this.port}/${this.db}`;
    },
  }
});
