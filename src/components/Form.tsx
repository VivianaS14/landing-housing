import { FormEvent, useState, useRef, useEffect } from "react";

export const Form = () => {
  const [inputsData, setInputsData] = useState({});
  const [error, setError] = useState<boolean>(false);
  const nombreRef = useRef<HTMLInputElement>(null);
  const apellidoRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nombre = nombreRef.current && nombreRef.current.value;
    const apellido = apellidoRef.current && apellidoRef.current.value;
    const email = emailRef.current && emailRef.current.value;
    const tel = telRef.current && telRef.current.value;

    if (nombre && apellido && email && tel) {
      setInputsData({
        nombre,
        apellido,
        email,
        tel,
      });
      setError(false);
      nombreRef.current && (nombreRef.current.value = "");
      apellidoRef.current && (apellidoRef.current.value = "");
      emailRef.current && (emailRef.current.value = "");
      telRef.current && (telRef.current.value = "");
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    console.log(inputsData);
  }, [inputsData]);

  return (
    <section id="Form" className="my-14 ">
      <h2 className="text-4xl font-sans font-semibold text-lime-600">
        Ingresa tus datos
      </h2>
      <p className="text-slate-400">para ser contactado</p>
      <div className="grid place-items-center mt-5">
        <form onSubmit={handleSubmit} className="w-2/4 flex flex-col">
          <input
            className={`py-1 px-5 m-2 rounded-md ${
              error ? " border-2 border-red-500" : "border-2"
            }`}
            type="text"
            placeholder="Nombre"
            name="nombre"
            ref={nombreRef}
          />
          {error ? (
            <p className="text-red-500 text-xs">Por favor ingrese un nombre</p>
          ) : null}
          <input
            className={`py-1 px-5 m-2 rounded-md ${
              error ? " border-2 border-red-500" : "border-2"
            }`}
            type="text"
            placeholder="Apellido"
            name="apellido"
            ref={apellidoRef}
          />
          {error ? (
            <p className="text-red-500 text-xs">
              Por favor ingrese un apellido
            </p>
          ) : null}

          <input
            className={`py-1 px-5 m-2 rounded-md ${
              error ? " border-2 border-red-500" : "border-2"
            }`}
            type="email"
            placeholder="E-mail"
            name="email"
            ref={emailRef}
          />
          {error ? (
            <p className="text-red-500 text-xs">
              Por favor ingrese un email valido
            </p>
          ) : null}

          <input
            className={`py-1 px-5 m-2 rounded-md ${
              error ? " border-2 border-red-500" : "border-2"
            }`}
            type="tel"
            placeholder="Teléfono"
            name="teléfono"
            ref={telRef}
          />
          {error ? (
            <p className="text-red-500 text-xs">
              Por favor ingrese un numero de teléfono
            </p>
          ) : null}

          <label
            htmlFor="autorización"
            className={`flex items-start m-2 ${error ? "bg-red-200" : null}`}
          >
            <input type="checkbox" name="autorización" className="mt-1 mr-2" />
            <p className="text-left text-slate-400">
              Declaro haber leído la Autorización de Tratamiento de datos y
              estar conforme con la misma{" "}
              <span className="text-red-700">*</span>
            </p>
          </label>

          <button
            type="submit"
            className="bg-lime-600 py-3 rounded-md text-white hover:bg-lime-400 hover:text-slate-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
