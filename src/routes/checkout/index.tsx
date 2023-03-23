import { component$ } from "@builder.io/qwik";

export default component$( () => {
  return (
    <>
      <div
        class="bg-blue-500 h-16 w-full flex justify-center items-center text-white text-xl xxs:text-3xl">
        Pago orden&nbsp;<a href="#" class="font-medium underline">#123456</a>
      </div>
      <div class="flex flex-col lg:flex-row w-full h-full lg:items-start items-center">
        {/*carrito*/}
        <div
          class="m-2 h-full w-full bg-white overflow-x-auto rounded-lg shadow">
          {/*title*/}
          <div
            class="p-4 space-y-2 border-b rounded-t">
            <h3
              class="text-xl font-semibold text-gray-900">
              Listado carrito
            </h3>
          </div>
          {/*body*/}
          <div class="shadow-md sm:rounded-lg">
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
              <tr class="border-b bg-gray-50">
                <th scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  1004
                </th>
                <td class="px-6 py-4">
                  $200.0
                </td>
                <td class="px-6 py-4">
                  Chaqueta de cuero
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
                  1005
                </th>
                <td class="px-6 py-4">
                  $120.00
                </td>
                <td class="px-6 py-4">
                  Vestido de seda
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
                  1006
                </th>
                <td class="px-6 py-4">
                  $20.00
                </td>
                <td class="px-6 py-4">
                  Sombrero de paja
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
                  1007
                </th>
                <td class="px-6 py-4">
                  $35.00
                </td>
                <td class="px-6 py-4">
                  Blusa de encaje
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
                  1008
                </th>
                <td class="px-6 py-4">
                  $50.00
                </td>
                <td class="px-6 py-4">
                  Pantalones vaqueros
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
                  1009
                </th>
                <td class="px-6 py-4">
                  $25.00
                </td>
                <td class="px-6 py-4">
                  Camiseta de algodón
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
                  1010
                </th>
                <td class="px-6 py-4">
                  $70.00
                </td>
                <td class="px-6 py-4">
                  Sandalias de cuero
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
                  1011
                </th>
                <td class="px-6 py-4">
                  $30.00
                </td>
                <td class="px-6 py-4">
                  Bufanda de lana
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
                  1012
                </th>
                <td class="px-6 py-4">
                  $45.00
                </td>
                <td class="px-6 py-4">
                  Sombrero de lana
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
                  1013
                </th>
                <td class="px-6 py-4">
                  $120.00
                </td>
                <td class="px-6 py-4">
                  Bolso de cuero
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
                  1014
                </th>
                <td class="px-6 py-4">
                  $60.00
                </td>
                <td class="px-6 py-4">
                  Vestido de verano
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
                  1015
                </th>
                <td class="px-6 py-4">
                  $280.00
                </td>
                <td class="px-6 py-4">
                  Abrigo de cuero
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
                  1016
                </th>
                <td class="px-6 py-4">
                  $75.00
                </td>
                <td class="px-6 py-4">
                  Zapatillas de deporte
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
                  1017
                </th>
                <td class="px-6 py-4">
                  $50.00
                </td>
                <td class="px-6 py-4">
                  Cámara digital compacta
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
                  1018
                </th>
                <td class="px-6 py-4">
                  $40.00
                </td>
                <td class="px-6 py-4">
                  Auriculares inalámbricos
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
                  1019
                </th>
                <td class="px-6 py-4">
                  $150.00
                </td>
                <td class="px-6 py-4">
                  Reloj inteligente
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
                  1020
                </th>
                <td class="px-6 py-4">
                  $25.00
                </td>
                <td class="px-6 py-4">
                  Reloj de pulsera
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
        <div class="lg:order-1 order-first flex flex-col p-2 basis-2/5 lg:w-full w-full xs:w-2/3">
          {/*Datos Tarjeta*/ }
          <div class="w-full h-48 sm:h-60">
            <div class="h-full bg-white rounded-lg shadow">
              {/*title*/ }
              <div
                class="p-4 space-y-2 border-b rounded-t">
                <h3
                  class="text-xl font-semibold text-gray-900">
                  Datos Tarjeta
                </h3>
              </div>
              {/*body*/ }
              <div role="status"
                   class="max-w-md p-4 space-y-4 divide-y divide-gray-200 animate-pulse md:p-6">
                <div class="flex items-center justify-between">
                  <div>
                    <div
                      class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                    <div
                      class="w-32 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*monto total*/ }
          <div
            class="w-full">
            <div
              class="p-3 my-4 bg-white border border-gray-200 rounded-lg shadow">
              <p class="font-normal text-gray-700">
                Monto Total: $1234
              </p>
            </div>
          </div>
          {/*boton pagar*/ }
          <div class="w-full flex justify-center items-center">
            <button type="button"
                    class="w-2/3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                   hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center">
              Pagar
            </button>
          </div>
        </div>
      </div>
    </>
  );
} );
