export function Proyecto({nombre, texto}){
    return(
        <div className="flex flex-col w-full justify-center items-center border m-[10px]">
            <h3 className="m-[15px] py-[5px] text-center text-[1.5rem] border-b">{nombre}</h3>
            <img className="p-[5px] w-full border" alt="Aca va una imagen"></img>
            <p className="p-[15px]">{texto}</p>
            <div className="flex justify-end items-center w-full">
                <a className="my-[15px] mx-[30px] py-[5px] border-b" href="">Sitio Web</a>
            </div>
        </div>
    )
}