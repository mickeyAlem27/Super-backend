const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Super-backend API',
      version: '1.0.0',
      description: 'A sample API for Super-backend application',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./swagger-api/routes/*.js', './swagger-api/definitions/*.js'], // files containing annotations for swagger
};

const specs = swaggerJsdoc(options);

module.exports = specs;