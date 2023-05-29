import "./App.scss";
import {
  Nav,
  Home,
  Information,
  Payment,
  Drawings,
  Property,
  Map,
  Form,
  Project,
} from "./components";
import { AiOutlineArrowUp } from "./icons";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <Information />
        <Payment />
        <Drawings />
        <Property />
        <Project />
        <Map />
        <Form />
      </main>
      <section className="my-10 flex items-center gap-2">
        <AiOutlineArrowUp />
        <a href="#Home">Volver arriba</a>
      </section>
    </>
  );
}

export default App;
