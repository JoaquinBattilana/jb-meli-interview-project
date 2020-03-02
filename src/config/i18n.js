const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'es',
  otherLanguages: ['en'],
  localePath: typeof window === 'undefined' ? 'src/public/static/locales' : 'static/locales'
});
