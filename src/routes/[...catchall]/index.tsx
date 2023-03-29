import { component$ } from "@builder.io/qwik"
import Nav            from "~/components/shared/nav"
import Footer         from "~/components/shared/footer"

export default component$( () => {
  return (
    <>
      <div class="absolute h-screen w-screen flex flex-col">
        <Nav/>
        <div
          class="w-full h-full flex justify-center items-center relative">
          <img src="https://http.cat/404" alt="..."
               class="object-contain"/>
        </div>
        <Footer/>
      </div>
    </>
  )
} )
