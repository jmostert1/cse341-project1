const swaggerAutogen = require('swagger-autogen')();

const doc = {   
    info: {
        title: "Contacts API",
        description: "API for managing contacts",
        version: "1.0.0",
    },
    host: "cse341-project1-6rmg.onrender.com",
    schemes: ["https", "http"],
   
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/contacts.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);