import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import SobreMim from "./componentes/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./componentes/Post";
import NaoEncontrada from "componentes/NaoEncontrada";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
