import { component$ } from "@builder.io/qwik"
import Nav            from "~/components/shared/nav"
import Footer         from "~/components/shared/footer"

// TODO: raro que suceda que no haya data aqui
// TODO: colocar truco absolute cuando es muy alto
// TODO: colocar truco absolute cuando no hay data

// TODO: en caso de no querer truco, quitar "absolute h-screen"
export default component$( () => {
  return (
    <>
      <div class="absolute h-screen w-screen flex flex-col">
      <Nav/>
        <div class="h-full">
          h3
        </div>
      <Footer/>
      </div>
    </>
  )
} )
