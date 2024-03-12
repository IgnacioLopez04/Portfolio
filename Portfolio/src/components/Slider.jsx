import { Link } from 'react-scroll'
import { useRef } from 'react'

export function Slider() {
  const sliderRef = useRef(null)

  const cerrarSlider = () => {
    sliderRef.current.style.display = 'none'
  }

  return (
    <div
      className="hidden flex-col text-center justify-center w-screen h-screen bg-[#525558] z-20 fixed top-0 transition-display duration-500 ease-in-out  sm:hidden"
      id="slider"
      ref={sliderRef}
      onClick={cerrarSlider}
    >
      <ul className="grid gap-4">
        <li className="px-[10px] cursor-pointer">
          <Link
            to={'presentacion'}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-[1.5rem] hover:border-b-[3px] border-[#FFFFFF] text-[#FFFFFF]"
            onClick={cerrarSlider}
          >
            Sobre mi
          </Link>
        </li>
        <li className="px-[10px] cursor-pointer">
          <Link
            to={'proyectos'}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-[1.5rem] hover:border-b-[3px] border-[#FFFFFF] text-[#FFFFFF]"
            onClick={cerrarSlider}
          >
            Proyectos
          </Link>
        </li>
        <li className="px-[10px] cursor-pointer">
          <Link
            to={'contactos'}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-[1.5rem] hover:border-b-[3px] border-[#FFFFFF] text-[#FFFFFF]"
            onClick={cerrarSlider}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  )
}
