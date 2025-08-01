import Fastify from "fastify";
import { routes } from "./routes";

import cors from "@fastify/cors";

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  await app.register(cors, {
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
  });
  await app.register(routes);

  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    process.exit(1);
  }
};

start();
