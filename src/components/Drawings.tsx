import { useData } from "../hooks/useData";
import { Carrousel } from "./Carrousel";
import { useState } from "react";

export const Drawings = () => {
  const { project } = useData();
  const { drawingsApartment, drawingsProject } = project;
  const [drawings, setDrawings] = useState<boolean>(true);

  const handleDrawings = () => {
    setDrawings(!drawings);
  };

  return (
    <section id="Drawings" className="mt-20">
      <h2 className="text-4xl font-sans font-semibold text-lime-600">PLANOS</h2>

      <div className="my-5 flex justify-center gap-24 ">
        <button
          type="button"
          onClick={handleDrawings}
          className={`py-2 px-5 rounded-md ${
            drawings
              ? "bg-yellow-500 hover:bg-yellow-300"
              : "bg-yellow-300 hover:bg-yellow-500"
          } `}
        >
          Apartamento
        </button>
        <button
          type="button"
          onClick={handleDrawings}
          className={`py-2 px-5 rounded-md ${
            drawings
              ? "bg-yellow-300 hover:bg-yellow-500"
              : "bg-yellow-500 hover:bg-yellow-300"
          } `}
        >
          Proyecto
        </button>
      </div>

      {drawings ? (
        <Carrousel images={drawingsApartment} />
      ) : (
        <Carrousel images={drawingsProject} />
      )}
    </section>
  );
};
