// docs/tasks.js
module.exports = {
    paths: {
      '/tasks/create': {
        post: {
          tags: ['Tareas'],
          description: 'Crear una tarea',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Task',
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Tarea creada con éxito',
            },
          },
        },
      },
      '/tasks/': {
        get: {
          tags: ['Tareas'],
          description: 'Obtener todas las tareas',
          responses: {
            200: {
              description: 'Lista de tareas',
            },
          },
        },
      },
      '/tasks/id/{_id}': {
        put: {
          tags: ['Tareas'],
          description: 'Actualizar título de una tarea',
          parameters: [{
            name: '_id',
            in: 'path',
            required: true,
          }],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Task',
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Tarea actualizada',
            },
          },
        },
        delete: {
          tags: ['Tareas'],
          description: 'Eliminar una tarea',
          parameters: [{
            name: '_id',
            in: 'path',
            required: true,
          }],
          responses: {
            200: {
              description: 'Tarea eliminada',
            },
          },
        },
      },
    },
  };
  