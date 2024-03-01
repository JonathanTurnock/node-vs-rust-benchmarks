const crypto = require('crypto')
const fastify = require('fastify')({logger: false});

// Declare a route
fastify.get('/', async (request, reply) => {
    return {randomString: crypto.randomBytes(256).toString('hex')};
});

fastify.listen({port: 3000})
