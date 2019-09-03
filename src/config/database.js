module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'meetapp',
  define: {
    timetamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
