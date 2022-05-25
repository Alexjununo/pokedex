export default () => ({
  api: {
    apiUrl: process.env.API_URL || 'https://pokeapi.co/api/v2',
    apiToken: process.env.API_TOKEN || 'do-not-hard-code',
  },
  port: process.env.PORT || 3000,
});
