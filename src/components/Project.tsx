import { useData } from "../hooks/useData";

import { BsCheckCircle, BsFillInfoCircleFill } from "../icons";

export const Project = () => {
  const { project } = useData();
  const { projectDetails } = project;
  const {
    estado,
    pisosTorre,
    torres,
    ascensorTorre,
    apartamentosPiso,
    relacionParqueaderos,
    fechaEntrega,
    bbq,
    bicicleteros,
    canchaMultiple,
    conjunto,
    coworking,
    gimnasio,
    juegosInfantiles,
    lobby,
    parqueInfantil,
    parqueaderoVisitantes,
    piscina,
    porteria,
    recepcion,
    salonComunal,
    salonJuegos,
    salonInfantil,
    salonSocial,
    shut,
    petFriendly,
  } = projectDetails;

  return (
    <section className="mt-20">
      <h2 className="text-4xl font-sans font-semibold text-lime-600">
        + Características
      </h2>

      <section className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Estado:
          </p>
          <p>{estado}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Pisos por torre:
          </p>
          <p>{pisosTorre}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Número de torres:
          </p>
          <p>{torres}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Ascensor por torre:
          </p>
          <p>{ascensorTorre}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Apartamentos por piso:
          </p>
          <p>{apartamentosPiso}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Relación de Parqueaderos:
          </p>
          <p>{relacionParqueaderos}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Fecha de entrega aproximada:
          </p>
          <p>{fechaEntrega}</p>
        </div>

        <div className="flex items-center gap-2 ">
          <p
            className={`${
              bbq ? "text-lime-600" : "text-slate-500"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> BBQ
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              bicicleteros ? "text-lime-600" : "text-slate-500"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Bicicleteros
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              canchaMultiple ? "text-lime-600" : "text-slate-500"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Cancha Múltiple
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lime-600 flex items-center gap-2 text-left">
            <BsCheckCircle /> Conjunto :
          </p>
          <p>{conjunto}</p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              coworking ? "text-lime-600" : "text-slate-500"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Coworking
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              gimnasio ? "text-lime-600" : "text-slate-500"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Gimnasio semidotado
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              juegosInfantiles ? "text-lime-600" : "text-slate-500"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Juegos Infantiles
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              lobby ? "text-lime-600" : "text-slate-300"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Lobby
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              parqueInfantil ? "text-lime-600" : "text-slate-300"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Parque Infantil
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              parqueaderoVisitantes ? "text-lime-600" : "text-slate-300"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Parqueadero Visitantes
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              piscina ? "text-lime-600" : "text-slate-300"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Piscina
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              porteria ? "text-lime-600" : "text-slate-300"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Portería
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              recepcion ? "text-lime-600" : "text-slate-300"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Recepción
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              salonComunal ? "text-lime-600" : "text-slate-300"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Salón Comunal
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              salonJuegos ? "text-lime-600" : "text-slate-300"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Salón de Juegos
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              salonInfantil ? "text-lime-600" : "text-slate-300"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Salón infantil
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              salonSocial ? "text-lime-600" : "text-slate-300"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Salón Social
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              shut ? "text-lime-600" : "text-slate-300"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Shut o cuartos de basura
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <p
            className={`${
              petFriendly ? "text-lime-600" : "text-slate-300"
            } flex items-center gap-2 text-left`}
          >
            <BsCheckCircle /> Pet friendly
          </p>
        </div>
      </section>

      <div className="mt-8 flex gap-3 items-center">
        <div className="text-yellow-600 mt-1">
          <BsFillInfoCircleFill />
        </div>
        <p className="text-left text-xs">
          La fecha de entrega es aproximada, puede cambiar sin previo aviso y
          depende de las políticas de comercialización del anunciante.
        </p>
      </div>
    </section>
  );
};
