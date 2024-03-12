export function Biografia() {
  return (
    // <div className="w-[50%] mt-[50px]">
    //     {/* <h2 className="text-[2rem] py-[10px]">Sobre mi</h2> */}
    //     <article className="flex flex-row">
    //         <p className="w-[50%] py-[8px] pr-[10px]">A lo largo de mis proyectos universitarios, he consolidado mis conocimientos en lenguajes
    //         como C# y Python con enfoque en Django. Paralelamente, a través de iniciativas personales, he
    //         desarrollado habilidades fundamentales en HTML, CSS, JavaScript y React, permitiéndome adquirir
    //         un sólido conocimiento en el ámbito del desarrollo web.</p>
    //         <img className='border w-[50%] rounded-[20px] mx-[15px]' alt="Una imagen mia"></img>
    //     </article>
    //     <ul className="flex flex-row mt-[20px] justify-center">
    //         <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#800020] text-[#FFFFFF]">HTML</li>
    //         <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#800020] text-[#FFFFFF]">CSS</li>
    //         <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#800020] text-[#FFFFFF]">JavaScript</li>
    //         <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#800020] text-[#FFFFFF]">React</li>
    //         <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#800020] text-[#FFFFFF]">.NET</li>
    //         <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#800020] text-[#FFFFFF]">Django</li>
    //         <li className="mx-[10px] py-[5px] px-[10px] border rounded-[7px] bg-[#800020] text-[#FFFFFF]">Git</li>
    //     </ul>
    // </div>
    <div className="lg:mt-20 lg:w-2/3">
      {/* <h2 className="text-[2rem] py-[10px]">Sobre mi</h2> */}
      <article className="flex flex-col-reverse py-10 md:flex-row lg:ml-10">
        <p className=" text-lg md:w-2/3 lg:w-3/4 lg:mr-4 lg:text-xl">
          A lo largo de mis proyectos universitarios, he consolidado mis
          conocimientos en lenguajes como C# y Python con enfoque en Django.
          Paralelamente, a través de iniciativas personales, he desarrollado
          habilidades fundamentales en HTML, CSS, JavaScript y React,
          permitiéndome adquirir un sólido conocimiento en el ámbito del
          desarrollo web.
        </p>
        <img className="md:w-1/3 lg:w-1/4 p-2" alt="Una imagen mia"></img>
      </article>
      <ul className="flex flex-wrap justify-center">
        <li className="flex-shrink w-auto text-center px-3 mx-1 my-1 text-lg rounded-md bg-[#800020] text-[#FFFFFF] lg:mx-2.5 lg:text-lg">
          HTML
        </li>
        <li className="flex-shrink w-auto text-center px-3 mx-1 my-1 text-lg rounded-md bg-[#800020] text-[#FFFFFF] lg:mx-2.5 lg:text-lg">
          CSS
        </li>
        <li className="flex-shrink w-auto text-center px-3 mx-1 my-1 text-lg rounded-md bg-[#800020] text-[#FFFFFF] lg:mx-2.5 lg:text-lg">
          JavaScript
        </li>
        <li className="flex-shrink w-auto text-center px-3 mx-1 my-1 text-lg rounded-md bg-[#800020] text-[#FFFFFF] lg:mx-2.5 lg:text-lg">
          React
        </li>
        <li className="flex-shrink w-auto text-center px-3 mx-1 my-1 text-lg rounded-md bg-[#800020] text-[#FFFFFF] lg:mx-2.5 lg:text-lg">
          .NET
        </li>
        <li className="flex-shrink w-auto text-center px-3 mx-1 my-1 text-lg rounded-md bg-[#800020] text-[#FFFFFF] lg:mx-2.5 lg:text-lg">
          Django
        </li>
        <li className="flex-shrink w-auto text-center px-3 mx-1 my-1 text-lg rounded-md bg-[#800020] text-[#FFFFFF] lg:mx-2.5 lg:text-lg">
          Git
        </li>
      </ul>
    </div>
  )
}
