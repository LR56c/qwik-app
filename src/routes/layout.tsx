import { component$, Slot } from "@builder.io/qwik"
import { routeLoader$ }     from "@builder.io/qwik-city"
import Footer               from "~/components/shared/footer"
import Nav                  from "~/components/shared/nav"
import Alert                from "~/components/shared/alert"

export const useServerTimeLoader = routeLoader$( () => {
  return {
    date: new Date().toISOString()
  }
} )

export default component$( () => {
  return (
    <main
      class="bg-gray-100"
    >
      {/*<Alert/>*/ }
      <Nav/>
      <Slot/>
      <Footer/>
      <script src="../../node_modules/flowbite/dist/flowbite.min.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/uikit@3.16.10/dist/js/uikit.min.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/uikit@3.16.10/dist/js/uikit-icons.min.js"></script>
      {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>*/ }
      {/*<script src="node_modules/flowbite/dist/flowbite.min.js"></script>*/ }
    </main>
  )
} )
