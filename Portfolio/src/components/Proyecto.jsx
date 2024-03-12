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
        <div className="flex justify-end">
          <a
            className=" mt-6 px-3 py-2 w-auto sm:hover:text-[#800020] lg:text-xl "
            href={link}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLink} className="pr-2 text-[#800020]" />
            Sitio Web
          </a>
        </div>
      </div>
    </div>
  )
}
