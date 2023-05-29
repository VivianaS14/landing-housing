import { useState, ChangeEvent } from "react";
import { useData } from "../hooks/useData";
import { stringToCop } from "../utils/stringToCop";

import {
  MdMonetizationOn,
  AiFillBank,
  MdOutlineAccessTimeFilled,
} from "../icons";

export const Payment = () => {
  const { project } = useData();
  const [cuotaMensual, setCuotaMensual] = useState<number>(1920000);

  const { paymentMethod } = project;
  const { separacion, cuotaInicial, saldoFinanciar, banco, cuotas } =
    paymentMethod;

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const years = cuotas.find((c) => c.plazoAños === parseInt(e.target.value));
    if (years) setCuotaMensual(years?.cuotaMensual);
  };

  return (
    <section
      id="Payment"
      className="w-full h-auto py-3 bg-emerald-700 rounded-md text-white flex flex-col items-center gap-4"
    >
      <h2 className="font-medium text-lg font-sans">FORMAS DE PAGO</h2>

      <div className="w-3/4 h-auto bg-yellow-50 text-slate-800 grid grid-cols-2 md:grid-cols-3 gap-5 rounded-md">
        <div className="py-4 flex flex-col items-center justify-center gap-0">
          <p className="text-lime-700 flex ">
            <MdMonetizationOn style={{ fontSize: "25px" }} />
            Separación:
          </p>
          <p className="font-semibold">{stringToCop(separacion)}</p>
        </div>
        <div className="py-4 flex flex-col items-center justify-center gap-0">
          <p className="text-lime-700 flex ">
            <MdMonetizationOn style={{ fontSize: "25px" }} />
            Cuota inicial (%30):
          </p>
          <p className="font-semibold">{stringToCop(cuotaInicial)}</p>
        </div>
        <div className="py-4 flex flex-col items-center justify-center gap-0">
          <p className="text-lime-700 flex ">
            <MdMonetizationOn style={{ fontSize: "25px" }} />
            Saldo a financiar:
          </p>
          <p className="font-semibold">{stringToCop(saldoFinanciar)}</p>
        </div>
        <div className="py-4 flex flex-col items-center justify-center gap-0">
          <p className="text-lime-700 flex ">
            <AiFillBank style={{ fontSize: "25px" }} />
            Banco:
          </p>
          <p className="font-semibold">{banco}</p>
        </div>
        <div className="py-4 flex flex-col items-center justify-center gap-0">
          <p className="text-lime-700 flex ">
            <MdOutlineAccessTimeFilled style={{ fontSize: "25px" }} />
            Plazo en años:
          </p>
          <select name="years" id="years-select" onChange={handleChangeSelect}>
            {cuotas.map((e) => (
              <option key={e.plazoAños} value={e.plazoAños}>
                {e.plazoAños} años
              </option>
            ))}
          </select>
        </div>
        <div className="py-4 flex flex-col items-center justify-center gap-0">
          <p className="text-lime-700 flex ">
            <MdMonetizationOn style={{ fontSize: "25px" }} />
            Cuota mensual aprox:
          </p>
          <p className="font-semibold">{stringToCop(cuotaMensual)}</p>
        </div>
      </div>
    </section>
  );
};
