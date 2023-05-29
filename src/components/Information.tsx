import { useData } from "../hooks/useData";
import { RxDimensions, BiBed, MdOutlineBathtub, AiOutlineCar } from "../icons";

export const Information = () => {
  const { project } = useData();

  const { añoEntrega, apartmentDetails } = project;
  const { areaConstruida, areaPrivada, estado, alcobas, banos, garajes } =
    apartmentDetails;

  return (
    <section id="Information" className="my-10 flex flex-col items-center">
      <div>
        <h2 className="my-8 text-2xl font-extrabold text-lime-700">
          Fecha de entrega aproximada: {añoEntrega}
        </h2>

        <div className="my-8 grid grid-cols-3 md:grid-cols-6 items-center">
          <div className="px-4 border-x-2 border-stone-500">
            <p className="text-stone-500">Área Construida</p>
            <div className="flex items-center justify-center gap-2">
              <RxDimensions />
              <p>{areaConstruida} m2</p>
            </div>
          </div>
          <div className="px-4 border-r-2 border-stone-500">
            <p className="text-stone-500">Área Privada</p>
            <div className="flex items-center justify-center gap-2">
              <RxDimensions />
              <p>{areaPrivada} m2</p>
            </div>
          </div>
          <div className="px-4 border-r-2 border-stone-500">
            <p className="text-stone-500">Estado</p>
            <p>{estado}</p>
          </div>
          <div className="px-4 border-l-2 md:border-l-0 border-r-2 border-stone-500">
            <p className="text-stone-500">Alcobas</p>
            <div className="flex items-center justify-center gap-2">
              <BiBed />
              <p>{alcobas} </p>
            </div>
          </div>
          <div className="px-4 border-r-2 border-stone-500">
            <p className="text-stone-500">Baños</p>
            <div className="flex items-center justify-center gap-2">
              <MdOutlineBathtub />
              <p>{banos}</p>
            </div>
          </div>
          <div className="px-4 border-r-2 border-stone-500">
            <p className="text-stone-500">Garajes</p>
            <div className="flex items-center justify-center gap-2">
              <AiOutlineCar />
              <p>{garajes}</p>
            </div>
          </div>
        </div>
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DcIHI_Qqr8E"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
};
