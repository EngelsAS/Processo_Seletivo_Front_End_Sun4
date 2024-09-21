import { GoLaw } from "react-icons/go";
import { InputForm } from "../../components/inputForm";
import { FaCompassDrafting } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { GiCoinflip, GiMagnifyingGlass } from "react-icons/gi";
import { IconWithText } from "../../components/iconWithText";
import InputMask from "react-input-mask";

function Questao5() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="bg-zinc-900 h-screen flex flex-col">
      <header className="flex justify-center items-center p-4 bg-gradient-to-b from-zinc-950 via-zinc-950 to-transparent">
        <div className="flex items-center gap-1">
          <h1 className="text-2xl uppercase text-white font-semibold italic">
            Processei
          </h1>
          <GoLaw className="text-2xl text-amber-400" />
        </div>
      </header>
      <section className="flex flex-col lg:flex-row flex-grow flex-shrink bg-zinc-900 p-12 gap-20 items-center">
        <div className="text-gray-300 basis-2/3">
          <div className="text-lg border-b-2 border-amber-400 pb-5">
            <p className="mt-1 text-base font-thin">
              Contrate um de nossos planos e
            </p>
            <h2 className="text-5xl font-bold text-amber-400">
              Acompanhe Seus Processos Judiciais com Total Autonomia
            </h2>
            <p className="mt-1 font-bold text-2xl">
              Receba atualizações em tempo real, visualize documentos e fique
              por dentro de cada movimento no tribunal – tudo de forma simples e
              sem complicações.
            </p>
            <p className="mt-1 tex-base font-thin">
              Simplifique o acompanhamento do seu processo judicial. Assine o
              Processei e tenha tudo sob controle, na palma da sua mão.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-6 mt-5 xl:max-h-64">
            <div className="flex flex-col gap-5">
              <IconWithText
                icon={<FaCompassDrafting />}
                text={
                  "Acompanhe o andamento do seu processo sem a necessidade de intermediários"
                }
              />
              <IconWithText
                icon={<FaLightbulb />}
                text={
                  "Plataforma intuitiva e amigável, acessível para qualquer usuário."
                }
              />
            </div>
            <div className="flex flex-col gap-5">
              <IconWithText
                icon={<GiMagnifyingGlass />}
                text={
                  "Informações claras e atualizadas sobre seu processo, a qualquer hora."
                }
              />
              <IconWithText
                icon={<GiCoinflip />}
                text={
                  " Escolha o plano que mais se adapta às suas necessidades, com flexibilidade e sem surpresas."
                }
              />
            </div>
          </div>
        </div>
        <div className="basis-1/3">
          <form
            onSubmit={handleSubmit}
            className="border-amber-400 rounded-lg border-2"
          >
            <div className="bg-amber-400 rounded-t-md p-5 text-center">
              <p className="text-white text-xl font-semibold">
                Assine o <span className="italic uppercase">Processei</span> e
                tenha tudo no seu controle!
              </p>
            </div>
            <div className="flex flex-col p-6 px-8 text-black bg-white rounded-b-md gap-5">
              <div>
                <label htmlFor="nome">Nome</label>
                <InputForm id="nome" type="text" />
              </div>
              <div>
                <label htmlFor="email">E-mail</label>
                <InputForm id="email" type="text" />
              </div>
              <div>
                <label htmlFor="celular">Celular</label>
                <InputMask mask="(99) 99999-9999" maskPlaceholder={null}>
                  <InputForm id="celular" type="text" />
                </InputMask>
              </div>
              <button className="bg-amber-500 p-4 rounded-md mt-4 text-white hover:bg-amber-600 transition-colors uppercase font-semibold">
                Quero conhecer os planos!
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-gradient-to-t from-zinc-950 via-zinc-950 to-zinc-900 p-4 text-center">
        <h1 className="text-white font-thin text-xs">
          UM PRODUTO{" "}
          <span className="text-sm font-medium">
            SUN<span className="text-orange-400 bg">4</span>
          </span>
        </h1>
      </footer>
    </main>
  );
}

export default Questao5;
