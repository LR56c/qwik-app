import { component$ } from "@builder.io/qwik"
import AdminTabs      from "~/components/shared/admin-tabs"
import EditButton     from "~/components/shared/edit-button"
import Nav            from "~/components/shared/nav"
import Footer         from "~/components/shared/footer"

// TODO: colocar truco absolute cuando no hay data
// TODO: boton editar modal, navegacion href tabs
export default component$( () => {
  return (
    <>
      <Nav/>
      <AdminTabs/>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              NOMBRE
            </th>
            <th scope="col" class="px-6 py-3">
              CORREO
            </th>
            <th scope="col" class="px-6 py-3">
              CELULAR
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
              1
            </th>
            <td class="px-6 py-4">
              Maria Perez
            </td>
            <td class="px-6 py-4">
              maria.perez@gmail.com
            </td>
            <td class="px-6 py-4">
              +1 234 567 8901
            </td>
            <td class="px-6 py-4">
              123 Main St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              2
            </th>
            <td class="px-6 py-4">
              John Smith
            </td>
            <td class="px-6 py-4">
              john.smith@gmail.com
            </td>
            <td class="px-6 py-4">
              +1 987 654 3210
            </td>
            <td class="px-6 py-4">
              456 Elm St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              3
            </th>
            <td class="px-6 py-4">
              Ana Rodriguez
            </td>
            <td class="px-6 py-4">
              ana.rodriguez@yahoo.com
            </td>
            <td class="px-6 py-4">
              +1 555 123 4567
            </td>
            <td class="px-6 py-4">
              789 Oak St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              4
            </th>
            <td class="px-6 py-4">
              Carlos Gonzalez
            </td>
            <td class="px-6 py-4">
              carlos.gonzalez@gmail.com
            </td>
            <td class="px-6 py-4">
              +1 555 444 3333
            </td>
            <td class="px-6 py-4">
              567 Pine St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              5
            </th>
            <td class="px-6 py-4">
              Sarah Johnson
            </td>
            <td class="px-6 py-4">
              sarah.johnson@yahoo.com
            </td>
            <td class="px-6 py-4">
              +1 555 222 3333
            </td>
            <td class="px-6 py-4">
              789 Maple St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              6
            </th>
            <td class="px-6 py-4">
              Juan Ramirez
            </td>
            <td class="px-6 py-4">
              juan.ramirez@hotmail.com
            </td>
            <td class="px-6 py-4">
              +1 555 111 3333
            </td>
            <td class="px-6 py-4">
              123 Oak St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              7
            </th>
            <td class="px-6 py-4">
              Emily Davis
            </td>
            <td class="px-6 py-4">
              emily.davis@gmail.com
            </td>
            <td class="px-6 py-4">
              +1 555 222 4444
            </td>
            <td class="px-6 py-4">
              456 Oak St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              8
            </th>
            <td class="px-6 py-4">
              Alicia Medina
            </td>
            <td class="px-6 py-4">
              medina.alicia@email.com
            </td>
            <td class="px-6 py-4">
              +1 555 987 6543
            </td>
            <td class="px-6 py-4">
              1234 Maple Ln, Bigtown, USA
            </td>
            <EditButton/></tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              9
            </th>
            <td class="px-6 py-4">
              Michael Thompson
            </td>
            <td class="px-6 py-4">
              michael.thompson@gmail.com
            </td>
            <td class="px-6 py-4">
              +1 555 777 9999
            </td>
            <td class="px-6 py-4">
              789 Cherry St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              10
            </th>
            <td class="px-6 py-4">
              Rachel Anderson
            </td>
            <td class="px-6 py-4">
              rachel.anderson@hotmail.com
            </td>
            <td class="px-6 py-4">
              +1 555 888 7777
            </td>
            <td class="px-6 py-4">
              234 Elm St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              11
            </th>
            <td class="px-6 py-4">
              Thomas Jackson
            </td>
            <td class="px-6 py-4">
              thomas.jackson@yahoo.com
            </td>
            <td class="px-6 py-4">
              +1 555 999 6666
            </td>
            <td class="px-6 py-4">
              345 Maple St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              12
            </th>
            <td class="px-6 py-4">
              Sophia Lee
            </td>
            <td class="px-6 py-4">
              sophia.lee@gmail.com
            </td>
            <td class="px-6 py-4">
              +1 555 777 5555
            </td>
            <td class="px-6 py-4">
              456 Maple St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              13
            </th>
            <td class="px-6 py-4">
              William Davis
            </td>
            <td class="px-6 py-4">
              william.davis@hotmail.com
            </td>
            <td class="px-6 py-4">
              +1 555 888 9999
            </td>
            <td class="px-6 py-4">
              567 Oak St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              14
            </th>
            <td class="px-6 py-4">
              Madison Clark
            </td>
            <td class="px-6 py-4">
              madison.clark@gmail.com
            </td>
            <td class="px-6 py-4">
              +1 555 777 4444
            </td>
            <td class="px-6 py-4">
              678 Oak St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              15
            </th>
            <td class="px-6 py-4">
              Ethan Rodriguez
            </td>
            <td class="px-6 py-4">
              ethan.rodriguez@yahoo.com
            </td>
            <td class="px-6 py-4">
              +1 555 888 5555
            </td>
            <td class="px-6 py-4">
              890 Cedar Rd, Midtown, USA
            </td>
            <EditButton/></tr>
          <tr class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              16
            </th>
            <td class="px-6 py-4">
              Isabella Rivera
            </td>
            <td class="px-6 py-4">
              isabella.rivera@hotmail.com
            </td>
            <td class="px-6 py-4">
              +1 555 777 3333
            </td>
            <td class="px-6 py-4">
              890 Oak St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              17
            </th>
            <td class="px-6 py-4">
              Gabriel Perez
            </td>
            <td class="px-6 py-4">
              gabriel.perez@gmail.com
            </td>
            <td class="px-6 py-4">
              +1 555 888 2222
            </td>
            <td class="px-6 py-4">
              369 Spruce Ave, Anywhere, USA
            </td>
            <EditButton/></tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              18
            </th>
            <td class="px-6 py-4">
              Mia Thompson
            </td>
            <td class="px-6 py-4">
              mia.thompson@yahoo.com
            </td>
            <td class="px-6 py-4">
              +1 555 777 2222
            </td>
            <td class="px-6 py-4">
              1010 Cedar St, Newtown, USA
            </td>
            <EditButton/></tr>
          <tr
            class="bg-white border-b">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              19
            </th>
            <td class="px-6 py-4">
              Oliver Harris
            </td>
            <td class="px-6 py-4">
              oliver.harris@hotmail.com
            </td>
            <td class="px-6 py-4">
              +1 555 888 1111
            </td>
            <td class="px-6 py-4">
              345 Elm St, Anytown, USA
            </td>
            <EditButton/></tr>
          <tr
            class="border-b bg-gray-50">
            <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              20
            </th>
            <td class="px-6 py-4">
              Sophia Lee
            </td>
            <td class="px-6 py-4">
              sophia.lee@gmail.com
            </td>
            <td class="px-6 py-4">
              +1 555 777 1111
            </td>
            <td class="px-6 py-4">
              2468 Birch Dr, Hometown, USA
            </td>
            <EditButton/></tr>
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  )
} )
