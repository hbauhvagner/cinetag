import Cabecalho from "./components/Cabecalho";
import Rodape from './components/Rodape';
import Container from "./components/Container";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritosProvider from "./context/Favoritos";
import Player from "./pages/Player";
import NaoEncontrada from "./pages/NaoEncontrada";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                        <Route path="/:id" element={<Player />} />
                        <Route path="*" element={<NaoEncontrada />} />
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;