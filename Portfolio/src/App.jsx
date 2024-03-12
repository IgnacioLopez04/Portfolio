import { Presentacion } from './components/Presentacion'
import { Menu } from './components/Menu'
import { Proyectos } from './components/Proyectos'
import { Biografia } from './components/Biografia'
import { Contacto } from './components/Contacto'
import { Slider } from './components/Slider'

function App() {
  return (
    // <main className="">
    //   <Menu></Menu>
    //   <section className="flex pt-[50px]">
    //     <Presentacion></Presentacion>
    //     <Biografia></Biografia>
    //   </section>
    //   <Proyectos></Proyectos>
    //   <Contacto></Contacto>
    // </main>
    <>
      <Slider></Slider>
      <main className="">
        <Menu></Menu>
        <section className="px-12 lg:flex">
          <Presentacion></Presentacion>
          <Biografia></Biografia>
        </section>
        <Proyectos></Proyectos>
        <Contacto></Contacto>
      </main>
    </>
  )
}
export default App
