const env = process.env;

export const nodeEnv = env.NODE_ENV || 'developement';

export const MONGOLAB_URI = env.MONGOLAB_URI;

export const port = env.PORT || 3000;



export default {
  get serverUrl() {
    return 'http://{this.host}:{this.port}';
  }
