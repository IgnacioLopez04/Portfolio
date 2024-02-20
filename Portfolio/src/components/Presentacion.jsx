export function Presentacion(){
    return(
        <div className="flex flex-row mt-[50px] w-[80%]" id="presentacion">
            {/* <img className="w-[50%] mx-[15px] my-[10px] border-[2px] rounded-[20px]" alt="Una imagen pero no se que"></img> */}
            <div className="w-full">
                <h1 className="text-[3rem] px-[10px] py-[8px]">Hola! Soy Ignacio</h1>
                <p className="px-[10px] py-[8px]">Estudiante de Ingeniería en Informática</p>
                <button className="border-[3px] border-[#CDCDCD] px-[10px] py-[5px] m-[10px] hover:bg-[#CDCDCD]"><a  href='/CV - Lopez Ignacio.pdf' download>Descarga CV</a></button>
            </div>
        </div>
    )
}