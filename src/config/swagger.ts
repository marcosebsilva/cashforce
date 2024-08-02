import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    swaggerDefinition: {
        info: {
            title: 'API',
            version: '1.0.0',
        },
    },
    apis: ['../routes/*.ts'],
};

export const docs = swaggerJsdoc(options);