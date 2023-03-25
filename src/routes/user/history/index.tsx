import { component$ } from "@builder.io/qwik"
import Tabs           from "~/components/shared/tabs"

// TODO: EDIT BUTTON DIFERENTE PADDING
export default component$( () => {
  return (
    <>
      <Tabs/>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID PEDIDO
            </th>
            <th scope="col" class="px-6 py-3">
              ESTADO PEDIDO
            </th>
            <th scope="col" class="px-6 py-3">
              TOTAL PEDIDO
            </th>
            <th scope="col" class="px-6 py-3">
              DIRECCION
            </th>
            <th scope="col" class="px-6 py-3">
              ACCION
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              7839
            </th>
            <td class="px-6 py-4">
              En camino
            </td>
            <td class="px-6 py-4">
              $89.99
            </td>
            <td class="px-6 py-4">
              Calle 12 #23-45
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              2387
            </th>
            <td class="px-6 py-4">
              Pendiente
            </td>
            <td class="px-6 py-4">
              $56.78
            </td>
            <td class="px-6 py-4">
              Carrera 7 #98-23
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              9045
            </th>
            <td class="px-6 py-4">
              Entregado
            </td>
            <td class="px-6 py-4">
              $112.50
            </td>
            <td class="px-6 py-4">
              Avenida 3 #10-56
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              5612
            </th>
            <td class="px-6 py-4">
              Cancelado
            </td>
            <td class="px-6 py-4">
              $25.99
            </td>
            <td class="px-6 py-4">
              Calle 45 #17-98
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              4356
            </th>
            <td class="px-6 py-4">
              En proceso
            </td>
            <td class="px-6 py-4">
              $67.89
            </td>
            <td class="px-6 py-4">
              Carrera 12 #45-67
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              8901
            </th>
            <td class="px-6 py-4">
              Entregado
            </td>
            <td class="px-6 py-4">
              $150.00
            </td>
            <td class="px-6 py-4">
              Avenida 5 #20-30
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              1234
            </th>
            <td class="px-6 py-4">
              Pendiente
            </td>
            <td class="px-6 py-4">
              $42.00
            </td>
            <td class="px-6 py-4">
              Calle 67 #45-12
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              7865
            </th>
            <td class="px-6 py-4">
              Cancelado
            </td>
            <td class="px-6 py-4">
              $75.25
            </td>
            <td class="px-6 py-4">
              Carrera 8 #10-34
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              5678
            </th>
            <td class="px-6 py-4">
              En camino
            </td>
            <td class="px-6 py-4">
              $98.50
            </td>
            <td class="px-6 py-4">
              Calle 23 #56-78
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              2345
            </th>
            <td class="px-6 py-4">
              En proceso
            </td>
            <td class="px-6 py-4">
              $29.99
            </td>
            <td class="px-6 py-4">
              Avenida 1 #15-20
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              8907
            </th>
            <td class="px-6 py-4">
              Pendiente
            </td>
            <td class="px-6 py-4">
              $65.40
            </td>
            <td class="px-6 py-4">
              Calle 34 #56-78
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              3456
            </th>
            <td class="px-6 py-4">
              Entregado
            </td>
            <td class="px-6 py-4">
              $85.00
            </td>
            <td class="px-6 py-4">
              Carrera 5 #30-45
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              6789
            </th>
            <td class="px-6 py-4">
              Cancelado
            </td>
            <td class="px-6 py-4">
              $18.75
            </td>
            <td class="px-6 py-4">
              Avenida 6 #25-40
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              8765
            </th>
            <td class="px-6 py-4">
              En camino
            </td>
            <td class="px-6 py-4">
              $45.67
            </td>
            <td class="px-6 py-4">
              Calle 10 #5-6
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              4521
            </th>
            <td class="px-6 py-4">
              En proceso
            </td>
            <td class="px-6 py-4">
              $62.30
            </td>
            <td class="px-6 py-4">
              Carrera 3 #12-34
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              8910
            </th>
            <td class="px-6 py-4">
              Entregado
            </td>
            <td class="px-6 py-4">
              $99.99
            </td>
            <td class="px-6 py-4">
              Avenida 2 #25-30
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              5674
            </th>
            <td class="px-6 py-4">
              Pendiente
            </td>
            <td class="px-6 py-4">
              $37.50
            </td>
            <td class="px-6 py-4">
              Calle 78 #23-45
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              2341
            </th>
            <td class="px-6 py-4">
              Cancelado
            </td>
            <td class="px-6 py-4">
              $51.25
            </td>
            <td class="px-6 py-4">
              Carrera 9 #5-20
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              7890
            </th>
            <td class="px-6 py-4">
              En camino
            </td>
            <td class="px-6 py-4">
              $72.50
            </td>
            <td class="px-6 py-4">
              Avenida 4 #15-25
            </td>
            <td class="px-3 py-4">
              <button type="button"
                      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
                Editar
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  )
} )
