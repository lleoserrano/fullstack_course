import prismaClient from "../prisma";

interface CreateCustomerProps {
  name: string;
  email: string;
}

class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
      },
    });

    return customer;
  }
}

export { CreateCustomerService };
