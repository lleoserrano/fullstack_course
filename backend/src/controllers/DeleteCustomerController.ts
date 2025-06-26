import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const customerService = new DeleteCustomerService();
    const { id } = request.query as { id: string };

    const costumer = await customerService.execute({ id });

    reply.status(200).send({
      message: "Customer deleted successfully",
      customer: costumer,
    });
  }
}

export { DeleteCustomerController };
