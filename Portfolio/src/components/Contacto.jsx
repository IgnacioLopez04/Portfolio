import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

export function Contacto() {
  return (
    // <section className="mb-[20px]" id='contactos'>
    //     <h2 className="text-[2rem] py-[10px]">Contacto</h2>
    //     <div className="flex justify-between">
    //         <p className="py-[15px] w-[50%]">¡Gracias por llegar hasta acá abajo! Les dejo mis links a su disposición.</p>
    //         <ul className="flex justify-center w-[50%]">
    //             <div className="p-[10px]">
    //                 <li className="py-[5px] px-[10px] hover:bg-[#800020] rounded-[7px]"><a className='hover:text-[#FFFFFF]' href='https://github.com/IgnacioLopez04' target='_blank'><FontAwesomeIcon icon={faGithub} className='px-[5px]'></FontAwesomeIcon> Github</a></li>
    //                 <li className="py-[5px] px-[10px] hover:bg-[#800020] rounded-[7px]"><a className='hover:text-[#FFFFFF]' href='https://linkedin.com/in/ignacio-lopez-b28008258' target='_blank'><FontAwesomeIcon icon={faLinkedin} className='px-[5px]'></FontAwesomeIcon> LinkedIn</a></li>
    //             </div>
    //             <div className="p-[10px]">
    //                 <li className="py-[5px] px-[10px] hover:bg-[#800020] rounded-[7px]"><a className='hover:text-[#FFFFFF]' href='mailto:Ignacioelopez04@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='px-[5px]'></FontAwesomeIcon>Gmail</a></li>
    //                 <li className="py-[5px] px-[10px] hover:bg-[#800020] rounded-[7px]"><a className='hover:text-[#FFFFFF]' href='/CV - Lopez Ignacio.pdf' download><FontAwesomeIcon icon={faFile} className='px-[5px]'></FontAwesomeIcon>Descargar CV</a></li>
    //             </div>
    //         </ul>
    //     </div>
    // </section>
    <article className="mb-10 lg:flex">
      <section className="px-12" id="contactos">
        <h2 className="text-4xl mb-3">Contacto</h2>

        <p className="text-lg">
          ¡Gracias por llegar hasta acá abajo! Les dejo mis links a su
          disposición.
        </p>
      </section>
      <section className="my-1 lg:flex lg:items-end lg:w-1/2">
        <ul className="flex flex-wrap justify-end lg:flex-1 lg:flex-row">
          <div className="m-2 lg:flex lg:m-0">
            <li className="my-2 px-3 py-2 bg-[#800020] rounded-md sm:hover:bg-[#800020] lg:mx-1">
              <a
                className="text-[#FFFFFF] sm:text-[#72767A] sm:hover:text-[#FFFFFF]"
                href="https://github.com/IgnacioLopez04"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="px-[5px]"
                ></FontAwesomeIcon>{' '}
                Github
              </a>
            </li>
            <li className="my-2 px-3 py-2 bg-[#800020] sm:hover:bg-[#800020] rounded-md lg:mx-1">
              <a
                className="text-[#FFFFFF] sm:text-[#72767A] sm:hover:text-[#FFFFFF]"
                href="https://linkedin.com/in/ignacio-lopez-b28008258"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="px-[5px]"
                ></FontAwesomeIcon>{' '}
                LinkedIn
              </a>
            </li>
          </div>
          <div className="m-2 lg:flex lg:m-0">
            <li className="my-2 px-3 py-2 bg-[#800020] sm:hover:bg-[#800020] rounded-md lg:mx-1">
              <a
                className="text-[#FFFFFF] sm:text-[#72767A] sm:hover:text-[#FFFFFF]"
                href="mailto:Ignacioelopez04@gmail.com"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="px-[5px]"
                ></FontAwesomeIcon>
                Gmail
              </a>
            </li>
            <li className="my-2 px-3 py-2 bg-[#800020] sm:hover:bg-[#800020] rounded-md lg:mx-1">
              <a
                className="text-[#FFFFFF] sm:text-[#72767A] sm:hover:text-[#FFFFFF]"
                href="/CV - Lopez Ignacio.pdf"
                download
              >
                <FontAwesomeIcon
                  icon={faFile}
                  className="px-[5px]"
                ></FontAwesomeIcon>
                Descargar CV
              </a>
            </li>
          </div>
        </ul>
      </section>
    </article>
  )
}
