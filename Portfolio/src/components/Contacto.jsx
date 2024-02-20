import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

export function Contacto(){
    return(
        <section className="mb-[20px]">
            <h2 className="text-[2rem] py-[10px]">Contacto</h2>
            <div className="flex justify-between">
                <p className="py-[15px] w-[50%]">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul className="flex justify-center w-[50%]">
                    <div className="p-[10px]">
                        <li className="p-[5px]"><a href='https://github.com/IgnacioLopez04' target='_blank'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github</a></li>
                        <li className="p-[5px]"><a href='https://linkedin.com/in/ignacio-lopez-b28008258' target='_blank'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn</a></li>
                    </div>
                    <div className="p-[10px]">
                        <li className="p-[5px]"><a href=""><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>Gmail</a></li>
                        <li className="p-[5px]"><a href='/CV - Lopez Ignacio.pdf' download><FontAwesomeIcon icon={faFile}></FontAwesomeIcon>Curriculum</a></li>
                    </div>
                </ul>
            </div>
        </section>
    )
}