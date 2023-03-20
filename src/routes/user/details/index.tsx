import { component$ } from "@builder.io/qwik";
import Nav            from "~/components/shared/nav";
import Tabs           from "~/components/shared/tabs";
import Footer         from "~/components/shared/footer";

export default component$( () => {
  return (
    <>
      <Nav />
      <Tabs />
      <div
        class="w-full m-4 flex justify-center items-center place-items-center">
        <div class="w-1/2 bg-white rounded-lg shadow">
          <div
            class="p-4 border-b rounded-t">
            <h3
              class="text-xl font-semibold text-gray-900">
              Informacion de la cuenta
            </h3>
          </div>
          <div class="relative p-6 space-y-6">

            <dl
              class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div class="flex flex-col pb-3">
                <dt
                  class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email
                  address
                </dt>
                <dd class="text-lg font-semibold">yourname@flowbite.com</dd>
              </div>
              <div class="flex flex-col py-3">
                <dt
                  class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Home
                  address
                </dt>
                <dd class="text-lg font-semibold">92 Miles Drive, Newark, NJ
                  07103, California, USA
                </dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt
                  class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone
                  number
                </dt>
                <dd class="text-lg font-semibold">+00 123 456 789 / +12 345
                  678
                </dd>
              </div>
            </dl>
            <div class="relative">
              <input type="text" id="floating_outlined"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" " />
              <label for="floating_outlined"
                     class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Nombre
              </label>
            </div>
            <div class="relative">
              <input type="text" id="floating_outlined"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" " />
              <label for="floating_outlined"
                     class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Correo
              </label>
            </div>
            <div class="relative">
              <input type="text" id="floating_outlined"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" " />
              <label for="floating_outlined"
                     class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Contraseña
              </label>
            </div>
            <div class="relative">
              <input type="text" id="floating_outlined"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" " />
              <label for="floating_outlined"
                     class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Celular
              </label>
            </div>
            <div class="relative">
              <input type="text" id="floating_outlined"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" " />
              <label for="floating_outlined"
                     class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Direccion
              </label>
            </div>
          </div>
          <div
            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
            <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Editar
            </button>
            <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Cambiar Contraseña
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} );
