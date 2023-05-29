import { Carrousel } from "./Carrousel";

import { useData } from "../hooks/useData";
import { stringToCop } from "../utils/stringToCop";

export const Home = () => {
  const { project } = useData();

  const { projectName, city, location, price, images } = project;
  const precio = stringToCop(price);

  return (
    <>
      <section id="Home">
        <div className="w-full flex flex-col md:flex-row gap-3 md:text-left justify-between items-center mb-5">
          <div className="flex gap-5 items-center">
            <div>
              <img
                src="https://www.estrenarvivienda.com/sites/default/files/styles/media_thumbnail/public/node-project/field-project-logo/logo-verdepino.jpg?itok=IGsoWxEM"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-lime-700 text-2xl font-bold">
                {projectName}
              </h1>
              <p>
                Apartamentos en venta en{" "}
                <span className="font-bold">{city}</span>{" "}
              </p>
              <p className="text-slate-500">
                Dirección:{" "}
                <span className="hover:text-green-800 hover:font-medium cursor-pointer">
                  {location}
                </span>{" "}
              </p>
            </div>
            <div>
              <a
                href="#Form"
                className="bg-yellow-500 text-white py-2 px-5 rounded-md"
              >
                Mas Información
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-stone-500">Desde: </p>
            <h3 className="text-4xl font-extrabold text-lime-600">{precio}</h3>
          </div>
        </div>
        <div className="w-full h-auto py-2 bg-emerald-700 text-white font-serif font-medium">
          <h2 className="text-2xl">
            Bono de separación de $ 500.000 solo para los clientes que se
            registren en el portal
          </h2>
          <p>* Aplica términos y condiciones.</p>
        </div>
        <div className="w-full">
          <Carrousel images={images} />
        </div>
      </section>
    </>
  );
};
