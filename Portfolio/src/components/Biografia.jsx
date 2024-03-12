import foto from '../assets/yo.jpg'

export function Biografia() {
  return (
    <div className="flex flex-col-reverse items-center md:flex-row mt-20 lg:w-2/3">
      <article className="flex flex-col py-10 md:1/2 lg:w-3/4 lg:ml-10">
        <p className="lg:mr-4 lg:text-xl">
          A lo largo de mis proyectos universitarios, he consolidado mis
          conocimientos en lenguajes como C# y Python con enfoque en Django.
          Paralelamente, a través de iniciativas personales, he desarrollado
          habilidades fundamentales en HTML, CSS, JavaScript y React,
          permitiéndome adquirir un sólido conocimiento en el ámbito del
          desarrollo web.
        </p>
        <ul className="flex flex-wrap justify-center my-4">
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
      </article>
      <img
        className=" rounded-3xl md:w-1/2 lg:h-72 lg:w-1/2 p-2"
        src={foto}
        alt="Una imagen mia"
      ></img>
    </div>
  )
}
