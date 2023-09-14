import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Titulo from '../../components/Titulo';
import styles from './Favoritos.module.css';

function Favoritos() {
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='Gato bonifácio' capa='https://i.pinimg.com/564x/42/94/71/429471db883f04340eb28c7de81dbb5d.jpg' />
            </section>
        </>
    )   
}

export default Favoritos;