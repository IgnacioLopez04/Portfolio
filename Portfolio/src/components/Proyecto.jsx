import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faReact, faPython } from '@fortawesome/free-brands-svg-icons';

export function Proyecto({link,nombre, texto, iconos, imagen}){


    return(
        <div className="flex flex-col w-full justify-center items-center border m-[10px] h-auto">
            <h3 className="m-[15px] py-[5px] text-center text-[1.5rem] border-b-[3px]">{nombre}</h3>
            <img className=" w-full" src={imagen} alt="Aca va una imagen"></img>
            <p className="p-[15px] flex-1">{texto}</p>
            <div className="flex justify-between items-center w-full pb-[10px] h-[50px]">
                <ul className='flex px-[15px]'>
                    {iconos.map((icono, i)=>(
                        <li key={i} className='px-[10px] py-[5px] bg-[#CDCDCD] mx-[5px] rounded-[7px]'>{icono}</li>
                    ))}
                </ul>
                <a className=" mx-[30px] hover:border-b-[1px]" href={link} target='_blank'><FontAwesomeIcon icon={faLink} className='px-[5px]'/>Sitio Web</a>
            </div>
        </div>
    )
}