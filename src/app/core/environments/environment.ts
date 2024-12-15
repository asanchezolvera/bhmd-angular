export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/v1',
  firebase: {
    apiKey: 'your-firebase-api-key',
    authDomain: 'your-project.firebaseapp.com',
    projectId: 'your-project',
  },
  stripe: {
    publishableKey: 'your-stripe-publishable-key',
  },
};

export const environmentProd = {
  ...environment,
  production: true,
  apiUrl: 'https://api.yourdomain.com/api/v1',
};
