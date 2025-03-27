const { dropSearchIndex } = require("../models/Task");

// docs/componenet.js
module.exports = {
    components: {
        schemas: {
            Task: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string',
                    },
                    completed: {
                        type: 'boolean',
                        description: 'Indica si la tarea está completada o no',
                    },
                },
            },
        },
    },
};