module.exports = () => {
    return {
      initialize() {
        strapi.router.get('/', (ctx) => {
          ctx.send('Hello world')
        })
      },
    };
  };