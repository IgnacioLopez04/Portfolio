export function Presentacion() {
  return (
    // <div className="flex flex-row mt-[50px] w-[80%]" id="presentacion">
    //     {/* <img className="w-[50%] mx-[15px] my-[10px] border-[2px] rounded-[20px]" alt="Una imagen pero no se que"></img> */}
    //     <div className="flex flex-col">
    //         <h1 className="text-[3rem] px-[10px] py-[8px]">Hola! Soy Ignacio</h1>
    //         <p className="px-[10px] py-[8px]">Estudiante de Ingeniería en Informática</p>
    //         <a className=" text-center border-[3px] border-[#800020] px-[10px] py-[7px] mx-[10px] my-[15px] rounded-[7px] w-[40%] hover:bg-[#800020] hover:text-[#FFFFFF]" href='/CV - Lopez Ignacio.pdf' download>Descargar CV</a>
    //     </div>
    // </div>

    <div className="mt-20 lg:w-1/3" id="presentacion">
      <h1 className="text-5xl text-bold py-4">Hola! Soy Ignacio</h1>
      <p className="text-xl py-4">Estudiante de Ingeniería en Informática</p>
      <a
        className="bg-[#800020] px-3 py-2 rounded-md text-lg text-[#FFFFFF] sm:border-[#800020] sm:hover:bg-[#800020] sm:text-[#72767A] sm:hover:text-[#FFFFFF] lg:text-lg"
        href="/CV - Lopez Ignacio.pdf"
        download
      >
        Descargar CV
      </a>
    </div>
  )
}
