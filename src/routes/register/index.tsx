import { component$ } from "@builder.io/qwik"
import Nav            from "~/components/shared/nav"
import Footer         from "~/components/shared/footer"

// TODO: colocar truco absolute cuando es muy alto
export default component$( () => {
  return (
    <>
      <Nav/>
      <div
        class="w-full max-w-sm mx-auto my-8 bg-white border border-gray-200 rounded-lg shadow p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
          <h5
            class="text-xl font-medium text-gray-900 dark:text-white">Registrate</h5>
          <div>
            <label for="nombre"
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
            <input type="text" name="nombre" id="nombre"
                   placeholder="name"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                   required/>
          </div>
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
          <div>
            <label for="re-password"
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar
              Contraseña</label>
            <input type="password" name="re-password" id="re-password"
                   placeholder="••••••••"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                   required/>
          </div>
          <div>
            <label for="celular"
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero
              celular</label>
            <input type="text" name="celular" id="celular"
                   placeholder="+56912345678"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                   required/>
          </div>
          <div>
            <label for="direccion"
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Direccion</label>
            <input type="text" name="direccion" id="direccion"
                   placeholder="Av. Siempre Viva 123"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                   required/>
          </div>
          <button type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrarse
          </button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Ya estas registrado? <a href="#"
                                    class="text-blue-700 hover:underline dark:text-blue-500">Ingresa
            aqui</a>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  )
} )
