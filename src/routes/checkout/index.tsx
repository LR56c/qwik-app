import { component$ } from "@builder.io/qwik"
import Nav            from "~/components/shared/nav"
import Footer         from "~/components/shared/footer"

export default component$( () => {
  return (
    <>
      <Nav/>
      <div
        class="bg-blue-500 h-16 w-full flex justify-center items-center text-white text-3xl">
        Pago orden&nbsp;<a href="#" class="font-medium underline">#123456</a>
      </div>

      <div class="flex w-full">
        <div class="flex w-2/3 justify-center items-center flex-col">
          {/*Listado carrito*/ }
          <div
            class="w-2/3 m-4 flex justify-center items-center place-items-center">
            <div class="bg-white rounded-lg shadow">
              <div
                class="p-4 space-y-2 border-b rounded-t">
                <h3
                  class="text-xl font-semibold text-gray-900">
                  Listado carrito
                </h3>
              </div>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table
                  class="w-full text-sm text-left text-gray-500">
                  <thead
                    class="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      ID PRODUCTO
                    </th>
                    <th scope="col" class="px-6 py-3">
                      PRECIO
                    </th>
                    <th scope="col" class="px-6 py-3">
                      NOMBRE
                    </th>
                    <th scope="col" class="px-6 py-3">
                      IMAGEN
                    </th>
                    <th scope="col" class="px-6 py-3">
                      ACCION
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="bg-white border-b">
                    <th scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      1001
                    </th>
                    <td class="px-6 py-4">
                      $25.00
                    </td>
                    <td class="px-6 py-4">
                      Camisa de algodón
                    </td>
                    <td class="px-6 py-4">
                      [image]
                    </td>
                    <td class="px-6 py-4">
                      <a href="#"
                         class="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <th scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      1002
                    </th>
                    <td class="px-6 py-4">
                      $80.00
                    </td>
                    <td class="px-6 py-4">
                      Zapatos de cuero
                    </td>
                    <td class="px-6 py-4">
                      [image]
                    </td>
                    <td class="px-6 py-4">
                      <a href="#"
                         class="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <th scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      1003
                    </th>
                    <td class="px-6 py-4">
                      $45.00
                    </td>
                    <td class="px-6 py-4">
                      Pantalones de mezclilla
                    </td>
                    <td class="px-6 py-4">
                      [image]
                    </td>
                    <td class="px-6 py-4">
                      <a href="#"
                         class="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/*monto total*/ }
          <div
            class="flex items-center w-2/3 p-3 bg-white border border-gray-200 rounded-lg shadow">
            <p class="font-normal text-gray-700">
              Monto Total: $1234
            </p>
          </div>
        </div>
        <div class="flex w-1/3 flex-col">
          {/*Datos Tarjeta*/ }
          <div
            class="w-full m-4 flex justify-center items-center place-items-center">
            <div class="w-full bg-white rounded-lg shadow">
              <div
                class="p-4 space-y-2 border-b rounded-t">
                <h3
                  class="text-xl font-semibold text-gray-900">
                  Datos Tarjeta
                </h3>
              </div>
              <div role="status"
                   class="max-w-md p-4 space-y-4 divide-y divide-gray-200 animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div class="flex items-center justify-between">
                  <div>
                    <div
                      class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div
                      class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*boton pagar*/ }
          <button type="button"
                  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                   hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5
                     text-center">
            Pagar
          </button>
        </div>
      </div>
      <Footer/>
    </>
  )
} )
