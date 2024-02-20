import {Link} from 'react-scroll';

export function Menu(){
    return(
        <header className="h-[60px] border-b flex items-center justify-end px-[20px] fixed w-full z-100 bg-white shadow-md">
            <ul className="flex flex-row">
               <li className="px-[10px] cursor-pointer"><Link to={'presentacion'} spy={true} smooth={true} offset={-100} duration={500} className="text-[1.5rem] hover:border-b-[3px]">Sobre mi</Link></li> 
               <li className="px-[10px] cursor-pointer"><Link to={'proyectos'} spy={true} smooth={true} offset={0} duration={500} className="text-[1.5rem] hover:border-b-[3px]">Proyectos</Link></li>  
               <li className="px-[10px] cursor-pointer"><Link to={'contactos'} spy={true} smooth={true} offset={0} duration={500} className="text-[1.5rem] hover:border-b-[3px]">Contacto</Link></li> 
            </ul>
        </header>
    )
}