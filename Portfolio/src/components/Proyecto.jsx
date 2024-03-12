import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'

export function Proyecto({ link, nombre, texto, iconos, imagen }) {
  return (
    // <div className="flex flex-col w-full justify-center items-center border m-[10px] h-auto">
    //     <h3 className="m-[15px] py-[5px] text-center text-[1.5rem] border-b-[3px] border-[#800020]">{nombre}</h3>
    //     <img className=" w-full" src={imagen} alt="Aca va una imagen"></img>
    //     <p className="p-[15px] flex-1">{texto}</p>
    //     <div className="flex justify-between items-center w-full pb-[10px] h-[50px]">
    //         <ul className='flex pl-[15px]'>
    //             {iconos.map((icono, i)=>(
    //                 <li key={i} className='px-[10px] py-[5px] bg-[#800020] text-[#FFFFFF] mx-[5px] rounded-[7px]'>{icono}</li>
    //             ))}
    //         </ul>
    //         <a className=" mr-[30px] hover:border-b-[1px] border-[#800020]" href={link} target='_blank'><FontAwesomeIcon icon={faLink} className='pr-[5px] text-[#800020]'/>Sitio Web</a>
    //     </div>
    // </div>
    <div className="py-4 lg:mx-4 lg:border-black">
      <h3 className="pb-2 text-xl text-center border-b-[#800020] lg:text-3xl">
        {nombre}
      </h3>
      <img className="py-2" src={imagen} alt="Aca va una imagen"></img>
      <p className="py-4 lg:text-xl">{texto}</p>
      <div className="">
        <ul className="flex flex-wrap justify-center">
          {iconos.map((icono, i) => (
            <li
              key={i}
              className="w-auto mx-1 px-2 py-1 rounded-md bg-[#800020] text-[#FFFFFF] lg:text-xl"
            >
              {icono}
            </li>
          ))}
        </ul>
        <a
          className="flex justify-center mt-6 sm:hover:border-b-[1px] border-[#800020] lg:text-xl"
          href={link}
          target="_blank"
        >
          <FontAwesomeIcon icon={faLink} className="pr-2 text-[#800020]" />
          Sitio Web
        </a>
      </div>
    </div>
  )
}
