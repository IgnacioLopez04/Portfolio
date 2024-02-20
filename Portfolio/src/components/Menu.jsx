import {Link} from 'react-scroll';

export function Menu(){
    return(
        <header className="h-[60px] flex items-center justify-end px-[20px] fixed w-full z-100 bg-[#525558]">
            <ul className="flex flex-row">
               <li className="px-[10px] cursor-pointer"><Link to={'presentacion'} spy={true} smooth={true} offset={-100} duration={500} className="text-[1.5rem] hover:border-b-[3px] border-[#FFFFFF] text-[#FFFFFF]">Sobre mi</Link></li> 
               <li className="px-[10px] cursor-pointer"><Link to={'contactos'} spy={true} smooth={true} offset={0} duration={500} className="text-[1.5rem] hover:border-b-[3px] border-[#FFFFFF] text-[#FFFFFF]">Contacto</Link></li> 
               <li className="px-[10px] cursor-pointer"><Link to={'proyectos'} spy={true} smooth={true} offset={0} duration={500} className="text-[1.5rem] hover:border-b-[3px] border-[#FFFFFF] text-[#FFFFFF]">Proyectos</Link></li>  
            </ul>
        </header>
    )
}