import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const createCustomerService = new CreateCustomerService();

    try {
      const { name, email } = request.body as { name: string; email: string };

      const result = await createCustomerService.execute({ name, email });
      console.log("Received customer data:", { name, email });
      return reply.status(201).send(result);
    } catch (error) {
      console.error("Error creating customer:", error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  }
}

export { CreateCustomerController };
