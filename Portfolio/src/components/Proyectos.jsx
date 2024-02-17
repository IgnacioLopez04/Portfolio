import { Proyecto } from "./Proyecto";

export function Proyectos(){
    return(
        <section className="my-[30px]">
            <h2 className="text-[2rem] py-[10px]">Proyectos</h2>
            <article className="flex flex-row">
                <Proyecto nombre={"Estudio de Arquitectura"} texto={"Una página dedicada para que los arquitectos muestren sus proyectos a sus clientes."}></Proyecto>
                <Proyecto nombre={'Cafeteria'} texto={"Sitio web para la muestra de una cafeteria y los productos que tengan para ofrecer."}></Proyecto>
            </article>
        </section>
    )
}