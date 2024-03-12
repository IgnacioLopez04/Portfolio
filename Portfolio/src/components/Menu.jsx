import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export function Menu() {
  const abrirSlider = () => {
    const slider = document.getElementById('slider')
    slider.style.display = 'flex'
    console.log('entre')
  }

  return (
    // <header className="h-[60px] hidden items-center justify-end px-[20px] fixed w-full z-100 bg-[#525558] top-0 sm:flex">
    //   <ul className="flex flex-row">
    //     <li className="px-[10px] cursor-pointer">
    //       <Link
    //         to={'presentacion'}
    //         spy={true}
    //         smooth={true}
    //         offset={-100}
    //         duration={500}
    //         className="text-[1.5rem] hover:border-b-[3px] border-[#FFFFFF] text-[#FFFFFF]"
    //       >
    //         Sobre mi
    //       </Link>
    //     </li>
    //     <li className="px-[10px] cursor-pointer">
    //       <Link
    //         to={'contactos'}
    //         spy={true}
    //         smooth={true}
    //         offset={0}
    //         duration={500}
    //         className="text-[1.5rem] hover:border-b-[3px] border-[#FFFFFF] text-[#FFFFFF]"
    //       >
    //         Contacto
    //       </Link>
    //     </li>
    //     <li className="px-[10px] cursor-pointer">
    //       <Link
    //         to={'proyectos'}
    //         spy={true}
    //         smooth={true}
    //         offset={0}
    //         duration={500}
    //         className="text-[1.5rem] hover:border-b-[3px] border-[#FFFFFF] text-[#FFFFFF]"
    //       >
    //         Proyectos
    //       </Link>
    //     </li>
    //   </ul>
    // </header>
    <>
      <FontAwesomeIcon
        icon={faBars}
        className="w-6 h-6 m-4 p-3 rounded-full text-white bg-[#800020] cursor-pointer fixed top-0 shadow-xl sm:hidden"
        onClick={abrirSlider}
      ></FontAwesomeIcon>
      <header className="hidden w-screen p-4 flex-row-reverse fixed z-10 bg-[#525558] top-0 sm:flex">
        <ul className="flex flex-row items-center">
          <li className="px-[10px] cursor-pointer">
            <Link
              to={'presentacion'}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-[1.5rem] hover:border-b-[3px] border-[#FFFFFF] text-[#FFFFFF] text-xl lg:text-2xl"
            >
              Sobre mi
            </Link>
          </li>
          <li className="px-[10px] cursor-pointer">
            <Link
              to={'contactos'}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-[1.5rem] hover:border-b-[3px] border-[#FFFFFF] text-[#FFFFFF] text-xl lg:text-2xl"
            >
              Contacto
            </Link>
          </li>
          <li className="px-[10px] cursor-pointer">
            <Link
              to={'proyectos'}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-[1.5rem] hover:border-b-[3px] border-[#FFFFFF] text-[#FFFFFF] text-xl lg:text-2xl"
            >
              Proyectos
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}
