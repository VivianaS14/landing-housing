import { BiHomeAlt2, BiMoney, BiLayer, BiGridAlt, BiMap } from "../icons";

export const Nav = () => {
  return (
    <>
      <nav className="w-full h-20 bg-white z-50 sticky top-0 flex items-center justify-center">
        <ul className="flex gap-10 justify-center font-sans">
          <li>
            <a
              href="#Home"
              className="flex flex-col md:flex-row items-center gap-2 text-3xl md:text-lg"
            >
              <BiHomeAlt2 />
              <p className="text-xs md:text-lg">Inicio</p>
            </a>{" "}
          </li>
          <li>
            <a
              href="#Payment"
              className="flex flex-col md:flex-row items-center gap-2 text-3xl md:text-lg"
            >
              <BiMoney />
              <p className="text-xs md:text-lg">Formas de Pago</p>
            </a>{" "}
          </li>
          <li>
            <a
              href="#Drawings"
              className="flex flex-col md:flex-row items-center gap-2 text-3xl md:text-lg"
            >
              <BiLayer />
              <p className="text-xs md:text-lg">Planos</p>
            </a>{" "}
          </li>
          <li>
            <a
              href="#Detail"
              className="flex flex-col md:flex-row items-center gap-2 text-3xl md:text-lg"
            >
              <BiGridAlt />
              <p className="text-xs md:text-lg">Detalles</p>
            </a>{" "}
          </li>
          <li>
            <a
              href="#Map"
              className="flex flex-col md:flex-row items-center gap-2 text-3xl md:text-lg"
            >
              <BiMap />
              <p className="text-xs md:text-lg">Como llegar</p>
            </a>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
};
