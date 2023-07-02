import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import SobreMim from "./componentes/SobreMim";
import Menu from "./componentes/Menu";
import Banner from "./componentes/Banner";


function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Banner/>
      <Routes>
        
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="*" element={<div>Pagina não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
