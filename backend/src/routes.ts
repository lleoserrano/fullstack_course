import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { ListCustomerController } from "./controllers/ListCustomerController";
export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return await new CreateCustomerController().handle(request, reply);
    }
  );

  fastify.delete(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return await new DeleteCustomerController().handle(request, reply);
    }
  );

  fastify.get(
    "/customers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return await new ListCustomerController().handle(request, reply);
    }
  );
}
