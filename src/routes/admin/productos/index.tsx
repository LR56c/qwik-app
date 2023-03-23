import { component$ } from "@builder.io/qwik";
import AdminTabs      from "~/components/shared/admin-tabs";
import AddSection     from "~/components/shared/add-section";

export default component$( () => {
  return (
    <>
      <AdminTabs />
      <AddSection/>
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
    </>
  );
} );
