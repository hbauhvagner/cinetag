import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Card from "../../components/Card";
import Rodape from "../../components/Rodape";
import Titulo from "../../components/Titulo";

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem='home' />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card id='1' titulo='Gato bonifacio' capa='https://i.pinimg.com/564x/42/94/71/429471db883f04340eb28c7de81dbb5d.jpg' />
            <Rodape />
        </>
    )
}

export default Inicio;