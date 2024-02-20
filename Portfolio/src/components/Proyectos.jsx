import { Proyecto } from "./Proyecto";
import { faHtml5, faCss3, faJs, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import  EstudioArquitectura  from '../assets/EstudioArquitectura.jpg';
import  Cafe  from '../assets/Cafe.jpg';

export function Proyectos(){
    return(
        <section className="my-[30px]" id="proyectos">
            <h2 className="text-[2rem] py-[10px]">Proyectos</h2>
            <article className="flex flex-row">
                <Proyecto imagen={EstudioArquitectura} nombre={"Estudio de Arquitectura"} iconos={['Html5', 'CSS3','React', 'Django']} texto={"Página web para el uso de un estudio de arquitectura. Esta se divide en dos, una con vista para los clientes, y otra dedicada a la administración de la misma."} link={'https://estudio-aquitectura.vercel.app/#/inicio'}></Proyecto>
                <Proyecto imagen={Cafe} nombre={'Cafeteria'} iconos={['Html5', 'CSS3', 'React']} texto={"Sitio web para la muestra de una cafeteria y los productos que tengan para ofrecer."} link={'https://cafe-app-chi.vercel.app/'}></Proyecto>
            </article>
        </section>
    )
}