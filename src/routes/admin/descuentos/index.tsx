import { component$ } from "@builder.io/qwik"
import AdminTabs      from "~/components/shared/admin-tabs"
import AddSection     from "~/components/shared/add-section"
import EditButton     from "~/components/shared/edit-button"
import Nav            from "~/components/shared/nav"
import Footer         from "~/components/shared/footer"

// TODO: colocar truco absolute cuando no hay data
export default component$( () => {
  return (
    <>
      <Nav/>
      <AdminTabs/>
      <AddSection/>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID OFERTA
            </th>
            <th scope="col" class="px-6 py-3">
              ID PRODUCTO
            </th>
            <th scope="col" class="px-6 py-3">
              NOMBRE PRODUCTO
            </th>
            <th scope="col" class="px-6 py-3">
              PRECIO SIN DESCUENTO
            </th>
            <th scope="col" class="px-6 py-3">
              PRECIO CON DESCUENTO
            </th>
            <th scope="col" class="px-6 py-3">
              PORCENTAJE DESCUENTO
            </th>
            <th scope="col" class="px-6 py-3">
              CAUSA DESCUENTO
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
              101
            </th>
            <td class="px-6 py-4">
              1001
            </td>
            <td class="px-6 py-4">
              Camisa de algodón
            </td>
            <td class="px-6 py-4">
              $25.00
            </td>
            <td class="px-6 py-4">
              $18.75
            </td>
            <td class="px-6 py-4">
              25%
            </td>
            <td class="px-6 py-4">
              Liquidación de temporada
            </td>
            <EditButton/>
          </tr>
          <tr class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              102
            </th>
            <td class="px-6 py-4">
              1002
            </td>
            <td class="px-6 py-4">
              Zapatos de cuero
            </td>
            <td class="px-6 py-4">
              $80.00
            </td>
            <td class="px-6 py-4">
              $68.00
            </td>
            <td class="px-6 py-4">
              15%
            </td>
            <td class="px-6 py-4">
              Venta de primavera
            </td>
            <EditButton/>

          </tr>
          <tr class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              103
            </th>
            <td class="px-6 py-4">
              1003
            </td>
            <td class="px-6 py-4">
              Pantalones de mezclilla
            </td>
            <td class="px-6 py-4">
              $45.00
            </td>
            <td class="px-6 py-4">
              $33.75
            </td>
            <td class="px-6 py-4">
              25%
            </td>
            <td class="px-6 py-4">
              Oferta de liquidación
            </td>
            <EditButton/>

          </tr>
          <tr class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              104
            </th>
            <td class="px-6 py-4">
              1004
            </td>
            <td class="px-6 py-4">
              Chaqueta de cuero
            </td>
            <td class="px-6 py-4">
              $200.0
            </td>
            <td class="px-6 py-4">
              $160.00
            </td>
            <td class="px-6 py-4">
              20%
            </td>
            <td class="px-6 py-4">
              Oferta de otoño
            </td>
            <EditButton/>

          </tr>
          <tr class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              105
            </th>
            <td class="px-6 py-4">
              1005
            </td>
            <td class="px-6 py-4">
              Vestido de seda
            </td>
            <td class="px-6 py-4">
              $120.00
            </td>
            <td class="px-6 py-4">
              $96.00
            </td>
            <td class="px-6 py-4">
              20%
            </td>
            <td class="px-6 py-4">
              Venta de verano
            </td>
            <EditButton/>

          </tr>
          <tr class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              106
            </th>
            <td class="px-6 py-4">
              1006
            </td>
            <td class="px-6 py-4">
              Sombrero de paja
            </td>
            <td class="px-6 py-4">
              $20.00
            </td>
            <td class="px-6 py-4">
              $18.00
            </td>
            <td class="px-6 py-4">
              10%
            </td>
            <td class="px-6 py-4">
              Oferta de vacaciones
            </td>
            <EditButton/>

          </tr>
          <tr class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              107
            </th>
            <td class="px-6 py-4">
              1007
            </td>
            <td class="px-6 py-4">
              Blusa de encaje
            </td>
            <td class="px-6 py-4">
              $35.00
            </td>
            <td class="px-6 py-4">
              $24.50
            </td>
            <td class="px-6 py-4">
              30%
            </td>
            <td class="px-6 py-4">
              Liquidación de temporada
            </td>
            <EditButton/>

          </tr>
          <tr class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              108
            </th>
            <td class="px-6 py-4">
              1008
            </td>
            <td class="px-6 py-4">
              Pantalones vaqueros
            </td>
            <td class="px-6 py-4">
              $50.00
            </td>
            <td class="px-6 py-4">
              $40.00
            </td>
            <td class="px-6 py-4">
              20%
            </td>
            <td class="px-6 py-4">
              Venta de otoño
            </td>
            <EditButton/>

          </tr>
          <tr class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              109
            </th>
            <td class="px-6 py-4">
              1009
            </td>
            <td class="px-6 py-4">
              Camiseta de algodón
            </td>
            <td class="px-6 py-4">
              $25.00
            </td>
            <td class="px-6 py-4">
              $20.00
            </td>
            <td class="px-6 py-4">
              20%
            </td>
            <td class="px-6 py-4">
              Venta de verano
            </td>
            <EditButton/>

          </tr>
          <tr class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              110
            </th>
            <td class="px-6 py-4">
              1010
            </td>
            <td class="px-6 py-4">
              Sandalias de cuero
            </td>
            <td class="px-6 py-4">
              $70.00
            </td>
            <td class="px-6 py-4">
              $56.00
            </td>
            <td class="px-6 py-4">
              20%
            </td>
            <td class="px-6 py-4">
              Venta de verano
            </td>
            <EditButton/>

          </tr>
          <tr class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              111
            </th>
            <td class="px-6 py-4">
              1011
            </td>
            <td class="px-6 py-4">
              Bufanda de lana
            </td>
            <td class="px-6 py-4">
              $30.00
            </td>
            <td class="px-6 py-4">
              $27.00
            </td>
            <td class="px-6 py-4">
              10%
            </td>
            <td class="px-6 py-4">
              Venta de invierno
            </td>
            <EditButton/>

          </tr>
          <tr class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              112
            </th>
            <td class="px-6 py-4">
              1012
            </td>
            <td class="px-6 py-4">
              Sombrero de lana
            </td>
            <td class="px-6 py-4">
              $45.00
            </td>
            <td class="px-6 py-4">
              $36.00
            </td>
            <td class="px-6 py-4">
              20%
            </td>
            <td class="px-6 py-4">
              Venta de invierno
            </td>
            <EditButton/>

          </tr>
          <tr class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              113
            </th>
            <td class="px-6 py-4">
              1013
            </td>
            <td class="px-6 py-4">
              Bolso de cuero
            </td>
            <td class="px-6 py-4">
              $120.00
            </td>
            <td class="px-6 py-4">
              $84.00
            </td>
            <td class="px-6 py-4">
              30%
            </td>
            <td class="px-6 py-4">
              Venta de primavera
            </td>
            <EditButton/>

          </tr>
          <tr class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              114
            </th>
            <td class="px-6 py-4">
              1014
            </td>
            <td class="px-6 py-4">
              Vestido de verano
            </td>
            <td class="px-6 py-4">
              $60.00
            </td>
            <td class="px-6 py-4">
              $45.00
            </td>
            <td class="px-6 py-4">
              25%
            </td>
            <td class="px-6 py-4">
              Venta de verano
            </td>
            <EditButton/>

          </tr>
          <tr class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              115
            </th>
            <td class="px-6 py-4">
              1015
            </td>
            <td class="px-6 py-4">
              Abrigo de cuero
            </td>
            <td class="px-6 py-4">
              $280.00
            </td>
            <td class="px-6 py-4">
              $196.00
            </td>
            <td class="px-6 py-4">
              30%
            </td>
            <td class="px-6 py-4">
              Venta de invierno
            </td>
            <EditButton/>

          </tr>
          <tr class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              116
            </th>
            <td class="px-6 py-4">
              1016
            </td>
            <td class="px-6 py-4">
              Zapatillas de deporte
            </td>
            <td class="px-6 py-4">
              $75.00
            </td>
            <td class="px-6 py-4">
              $56.25
            </td>
            <td class="px-6 py-4">
              25%
            </td>
            <td class="px-6 py-4">
              Venta de primavera
            </td>
            <EditButton/>

          </tr>
          <tr class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              117
            </th>
            <td class="px-6 py-4">
              1017
            </td>
            <td class="px-6 py-4">
              Cámara digital compacta
            </td>
            <td class="px-6 py-4">
              $50.00
            </td>
            <td class="px-6 py-4">
              $30.00
            </td>
            <td class="px-6 py-4">
              40%
            </td>
            <td class="px-6 py-4">
              Venta de verano
            </td>
            <EditButton/>

          </tr>
          <tr class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              118
            </th>
            <td class="px-6 py-4">
              1018
            </td>
            <td class="px-6 py-4">
              Auriculares inalámbricos
            </td>
            <td class="px-6 py-4">
              $40.00
            </td>
            <td class="px-6 py-4">
              $24.00
            </td>
            <td class="px-6 py-4">
              40%
            </td>
            <td class="px-6 py-4">
              Venta de verano

            </td>
            <EditButton/>

          </tr>
          <tr class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              119
            </th>
            <td class="px-6 py-4">
              1019
            </td>
            <td class="px-6 py-4">
              Reloj inteligente
            </td>
            <td class="px-6 py-4">
              $150.00
            </td>
            <td class="px-6 py-4">
              $112.50
            </td>
            <td class="px-6 py-4">
              25%
            </td>
            <td class="px-6 py-4">
              Venta de navidad
            </td>
            <EditButton/>

          </tr>
          <tr class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              120
            </th>
            <td class="px-6 py-4">
              1020
            </td>
            <td class="px-6 py-4">
              Reloj de pulsera
            </td>
            <td class="px-6 py-4">
              $25.00
            </td>
            <td class="px-6 py-4">
              $18.75
            </td>
            <td class="px-6 py-4">
              25%
            </td>
            <td class="px-6 py-4">
              Venta de invierno
            </td>
            <EditButton/>

          </tr>
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  )
} )
