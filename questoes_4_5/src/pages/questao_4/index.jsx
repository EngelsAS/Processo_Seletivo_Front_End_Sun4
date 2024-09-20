import { Link } from "react-router-dom";

function Questao4() {
  return (
    <main className="bg-zinc-800 h-screen flex flex-col">
      <header className="flex justify-between p-4 bg-zinc-900 items-center">
        <h1 className="text-3xl text-white">
          SUN<span className="text-orange-400">4</span>
        </h1>
        <Link
          to="questao_5"
          className="text-white bg-zinc-950 hover:bg-zinc-100 hover:text-black p-2 transition-colors rounded-md"
        >
          Ir para Questao 5 - Landing Page
        </Link>
      </header>
      <section className="flex flex-col flex-grow md:flex-row">
        <div className="basis-full bg-gray-700 text-center">
          <h2 className="text-white">Coluna 1</h2>
        </div>
        <div className="basis-full bg-gray-800 text-center">
          <h2 className="text-white">Coluna 2</h2>
        </div>
        <div className="basis-full bg-gray-900 text-center">
          <h2 className="text-white">Coluna 3</h2>
        </div>
      </section>
    </main>
  );
}

export default Questao4;
