import { FastifyReply, FastifyRequest } from "fastify";
import { ListCustomerService } from "../services/ListCustomerService";

class ListCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomerService = new ListCustomerService();

    const costumer = await listCustomerService.execute();

    return reply.status(200).send(costumer);
  }
}

export { ListCustomerController };
