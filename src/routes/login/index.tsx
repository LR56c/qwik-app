import { component$ } from "@builder.io/qwik"
import Nav            from "~/components/shared/nav"
import Footer         from "~/components/shared/footer"

// TODO: boton crear cuenta navegar a register, perder contraseña modal?, ingresar navegar inicio?
export default component$( () => {
  return (
    <>
      <div class="absolute h-screen w-screen flex flex-col">
        <Nav/>
        <div
          class="w-full sm:w-3/4 lg:max-w-3xl mx-auto sm:my-20 py-4 bg-white border border-gray-200 rounded-lg shadow p-8 dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-6" action="#">
            <h5
              class="text-xl font-medium text-gray-900 dark:text-white">Ingreso</h5>
            <div>
              <label for="email"
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
              <input type="email" name="email" id="email"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                     placeholder="name@company.com" required/>
            </div>
            <div>
              <label for="password"
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
              <input type="password" name="password" id="password"
                     placeholder="••••••••"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                     required/>
            </div>
            <div class="flex items-start">
              <a href="#"
                 class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Perdiste
                tu contraseña?</a>
            </div>
            <button type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ingresar
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              No estas registrado? <a href="#"
                                      class="text-blue-700 hover:underline dark:text-blue-500">Crear
              cuenta</a>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    </>
  )
} )
