const slugify = require('slugify');

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      if (data.Title) {
        data.Slug = slugify(data.Title, {lower: true});
      }
    },
    async beforeUpdate(params, data) {
      if (data.Title) {
        data.Slug = slugify(data.Title, {lower: true});
      }
    },
  },
};
