module.exports = {
  load: {
    before: ['responseTime', 'logger', 'cors', 'responses', 'gzip', 'public'],
    order: [
      "Define the middlewares' load order by putting their name in this array is the right order"
    ],
    after: ['parser', 'router', 'public'],
  },
  settings: {
  },
};