module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    // babel: {presets: ['es2015']},
    react: {
      transformOptions: {
        harmony: true,
        sourceMap: false,
        stripTypes: false,
      },
      babel: false
    }
  }
};
