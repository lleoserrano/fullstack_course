import prismaClient from "../prisma";

interface DeleteCustomerProps {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error("Customer ID is required");
    }

    const customer = await prismaClient.customer.findFirst({
      where: { id: id },
    });

    if (!customer) {
      throw new Error("Customer not found");
    }

    await prismaClient.customer.delete({
      where: { id: customer.id },
    });
  }
}

export { DeleteCustomerService };
