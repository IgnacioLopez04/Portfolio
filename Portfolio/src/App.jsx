import { Presentacion } from './components/Presentacion'
import { Menu } from './components/Menu'
import { Proyectos } from './components/Proyectos'
import { Biografia } from './components/Biografia'
import { Contacto } from './components/Contacto'

function App() {

  return (
    <>
      <Menu></Menu>
      <section className='flex pt-[50px]'>
        <Presentacion></Presentacion>
        <Biografia></Biografia>
      </section>
      <Proyectos></Proyectos>
      <Contacto></Contacto>
    </>
  )
}``

export default App
