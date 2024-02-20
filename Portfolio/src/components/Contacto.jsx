import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

export function Contacto(){
    return(
        <section className="mb-[20px]" id='contactos'>
            <h2 className="text-[2rem] py-[10px]">Contacto</h2>
            <div className="flex justify-between">
                <p className="py-[15px] w-[50%]">¡Gracias por llegar hasta acá abajo! Les dejo mis links a su disposición.</p>
                <ul className="flex justify-center w-[50%]">
                    <div className="p-[10px]">
                        <li className="py-[5px] px-[10px] hover:bg-[#800020] rounded-[7px]"><a className='hover:text-[#FFFFFF]' href='https://github.com/IgnacioLopez04' target='_blank'><FontAwesomeIcon icon={faGithub} className='px-[5px]'></FontAwesomeIcon> Github</a></li>
                        <li className="py-[5px] px-[10px] hover:bg-[#800020] rounded-[7px]"><a className='hover:text-[#FFFFFF]' href='https://linkedin.com/in/ignacio-lopez-b28008258' target='_blank'><FontAwesomeIcon icon={faLinkedin} className='px-[5px]'></FontAwesomeIcon> LinkedIn</a></li>
                    </div>
                    <div className="p-[10px]">
                        <li className="py-[5px] px-[10px] hover:bg-[#800020] rounded-[7px]"><a className='hover:text-[#FFFFFF]' href='mailto:Ignacioelopez04@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='px-[5px]'></FontAwesomeIcon>Gmail</a></li>
                        <li className="py-[5px] px-[10px] hover:bg-[#800020] rounded-[7px]"><a className='hover:text-[#FFFFFF]' href='/CV - Lopez Ignacio.pdf' download><FontAwesomeIcon icon={faFile} className='px-[5px]'></FontAwesomeIcon>Descargar CV</a></li>
                    </div>
                </ul>
            </div>
        </section>
    )
}