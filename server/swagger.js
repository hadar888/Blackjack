const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'BlackJack API',
        description: 'Online blackjack game',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['index.ts'];
swaggerAutogen(outputFile, endpointsFiles, doc);
