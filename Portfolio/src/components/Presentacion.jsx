export function Presentacion() {
  return (
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
