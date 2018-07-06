export const environment = {
  production: true,
  apiUrl: 'https://reqres.in/api/',
  tokenWhitelistedDomains: [ new RegExp('localhost:8080') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
