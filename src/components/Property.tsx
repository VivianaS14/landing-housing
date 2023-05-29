import { useData } from "../hooks/useData";
import {
  BiBed,
  BsCheckCircle,
  MdOutlineBathtub,
  AiOutlineCar,
  BsFillBuildingsFill,
  AiOutlineFormatPainter,
  BsFillInfoCircleFill,
} from "../icons";

export const Property = () => {
  const { project } = useData();
  const { apartmentDetails } = project;
  const {
    alcobas,
    banos,
    garajes,
    estrato,
    areaBalcon,
    acabados,
    caracteristicaGaraje,
    tipoGaraje,
    nivelesInmueble,
    salaComedor,
    calentadorAgua,
    vista,
    balcon,
    bañoSocial,
    estudio,
    gasNatural,
    zonaRopas,
  } = apartmentDetails;

  return (
    <section id="Detail" className="mt-20">
      <h2 className="text-4xl font-sans font-semibold text-lime-600">
        Detalle del inmueble
      </h2>

      <section className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BiBed /> Alcobas:
          </p>
          <p>{alcobas}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <MdOutlineBathtub /> Baños:
          </p>
          <p>{banos}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <AiOutlineCar /> Garajes:
          </p>
          <p>{garajes}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsFillBuildingsFill /> Estrato:
          </p>
          <p>{estrato}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Área de balcón:
          </p>
          <p>{areaBalcon} m2</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <AiOutlineFormatPainter /> Acabados:
          </p>
          <p>{acabados}</p>
        </div>
        <div className="flex items-center">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Características Garaje:
          </p>
          <p>{caracteristicaGaraje}</p>
        </div>
        <div className="flex items-center ">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Tipo de garaje:
          </p>
          <p>{tipoGaraje}</p>
        </div>
        <div className="flex items-center gap-2 ">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Niveles del inmueble:
          </p>
          <p>{nivelesInmueble}</p>
        </div>
        <div className="flex items-center gap-2 ">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Sala/Comedor:
          </p>
          <p>{salaComedor}</p>
        </div>
        <div className="flex items-center gap-2 ">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Calentador de agua:
          </p>
          <p>{calentadorAgua}</p>
        </div>
        <div className="flex items-center gap-2 ">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Ubicación vista:
          </p>
          <p>{vista}</p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              balcon ? "text-lime-600" : "text-slate-500"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Balcón
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              bañoSocial ? "text-lime-600" : "text-slate-500"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Baño social
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              estudio ? "text-lime-600" : "text-slate-500"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Estudio
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              gasNatural ? "text-lime-600" : "text-slate-500"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Servicio de gas natural
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Zona de ropas:
          </p>
          <p>{zonaRopas}</p>
        </div>
      </section>

      <div className="mt-8 flex gap-3">
        <div className="text-yellow-600 mt-1">
          <BsFillInfoCircleFill />
        </div>
        <p className="text-left text-xs">
          Esta información corresponde al estrato actual y puede variar a la
          fecha de entrega del inmueble. La clasificación del estrato es
          potestativo del municipio, el anunciante no puede comprometerse con
          una clasificación determinada del estrato el cual queda definido en el
          momento de recibo de la obra.
        </p>
      </div>
    </section>
  );
};
