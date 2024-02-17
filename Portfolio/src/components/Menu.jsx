export function Menu(){
    return(
        <header className="h-[60px] border-b flex items-center justify-end px-[20px]">
            <ul className="flex flex-row">
               <li className="px-[10px]"><a className="text-[1.5rem] hover:border-b-[3px]">Sobre mi</a></li> 
               <li className="px-[10px]"><a className="text-[1.5rem] hover:border-b-[3px]">Proyectos</a></li> 
               <li className="px-[10px]"><a className="text-[1.5rem] hover:border-b-[3px]">Tecnologías</a></li> 
               <li className="px-[10px]"><a className="text-[1.5rem] hover:border-b-[3px]">Contacto</a></li> 
            </ul>
        </header>
    )
}