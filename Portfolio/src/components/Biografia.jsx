export function Biografia(){
    return(
        <div className="w-[50%] mt-[50px]">
            {/* <h2 className="text-[2rem] py-[10px]">Sobre mi</h2> */}
            <article className="flex flex-row">
                <p className="w-[50%] py-[8px] pr-[10px]">A lo largo de mis proyectos universitarios, he consolidado mis conocimientos en lenguajes 
                como C# y Python con enfoque en Django. Paralelamente, a través de iniciativas personales, he 
                desarrollado habilidades fundamentales en HTML, CSS, JavaScript y React, permitiéndome adquirir
                un sólido conocimiento en el ámbito del desarrollo web.</p>
                <img className='border w-[50%] rounded-[20px] mx-[15px]' alt="Una imagen mia"></img>
            </article>
            <ul className="flex flex-row mt-[20px] justify-center">
                <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#CDCDCD]">HTML</li>
                <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#CDCDCD]">CSS</li>
                <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#CDCDCD]">JavaScript</li>
                <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#CDCDCD]">React</li>
                <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#CDCDCD]">.NET</li>
                <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#CDCDCD]">Django</li>
                <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#CDCDCD]">Git</li>
            </ul>
        </div>
    )
}