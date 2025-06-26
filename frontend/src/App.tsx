import { useEffect, useRef, useState, type FormEvent } from "react";
import { FiTrash } from "react-icons/fi";
import { api } from "./services/api";

interface CustomerProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  created_at: string;
}

function App() {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    const response = await api.get("/customers");
    setCustomers(response.data);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;

    if (!name || !email) {
      alert("Preencha todos os campos!");
      return;
    }

    const response = await api.post<CustomerProps>("/customer", {
      name,
      email,
    });

    setCustomers((prev) => [...prev, response.data]);
    nameRef.current!.value = "";
    emailRef.current!.value = "";
  }

  async function handleDeleteCustomer(id: string) {
    try {
      await api.delete(`/customer`, {
        params: {
          id: id,
        },
      });
      setCustomers((prev) => prev.filter((customer) => customer.id !== id));
    } catch (err) {
      console.error("Erro ao deletar cliente:", err);
      alert("Erro ao deletar cliente. Tente novamente.");
      return;
    }
  }

  return (
    <>
      <h1 className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
        <main className="my-10 w-full md:max-w-2xl">
          <h1 className="text-4xl font-medium text-white">Clientes</h1>

          <form className="flex flex-col my-6 " onSubmit={handleSubmit}>
            <label className="font-medium text-white">Nome:</label>
            <input
              type="text"
              placeholder="Digite o seu nome completo..."
              className="w-full mb-5 p-2 rounded bg-amber-50"
              ref={nameRef}
            />
            <label className="font-medium text-white">Email:</label>
            <input
              type="email"
              placeholder="Digite o seu email completo..."
              className="w-full mb-5 p-2 rounded bg-amber-50"
              ref={emailRef}
            />

            <input
              type="submit"
              value="Cadastrar"
              className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
            />
          </form>

          <section className="flex flex-col gap-4">
            {customers.map((customer) => (
              <article
                className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200 "
                key={customer.id}
              >
                <p>
                  <span className="font-bold">Nome: </span>
                  {customer.name}
                </p>
                <p>
                  <span className="font-bold">Email: </span>
                  {customer.email}
                </p>
                <p>
                  <span className="font-bold">Status: </span>
                  {customer.status ? "Ativo" : "Inativo"}
                </p>
                <button
                  className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-3  mx-1"
                  onClick={() => handleDeleteCustomer(customer.id)}
                >
                  <FiTrash size={18} color="#FFF" />
                </button>
              </article>
            ))}
          </section>
        </main>
      </h1>
    </>
  );
}

export default App;
