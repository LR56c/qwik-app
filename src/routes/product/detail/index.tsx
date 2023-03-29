import { component$ } from "@builder.io/qwik"
import Phrase         from "~/components/shared/phrase"
import OnSaleProduct  from "~/components/shared/on-sale-product"
import Footer         from "~/components/shared/footer"
import Nav            from "~/components/shared/nav"

// TODO: raro que suceda que no haya data aqui
// TODO: abrir drawer al agregar carrito? mandar a pagar altiro?, navegar con href en ofertas
export default component$( () => {
  return (
    <>
      <Nav/>
      <div class="relative flex flex-col md:flex-row w-full h-full gap-4 p-4">
        {/*apartado imagenes producto*/ }
        <div class="h-full flex flex-col basis-2/3 gap-4">
          {/*imagen movil/tablet*/ }
          <div class="block md:hidden w-full h-full flex justify-center">
            <img class="h-24 xxs:h-36 xs:h-56 sm:h-72 object-contain rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                 alt=""/>
          </div>
          {/*listado movil/tablet*/ }
          <div
            class="md:hidden flex justify-start gap-4 h-40 overflow-x-auto flex">
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                 alt=""/>
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                 alt=""/>
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                 alt=""/>
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                 alt=""/>
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                 alt=""/>
          </div>
          {/*imagen principal escritorio*/ }
          <div class="hidden md:block">
            <img class="h-full object-contain w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                 alt=""/>
          </div>
          {/*listado escritorio*/ }
          <div
            class="hidden md:flex lg:flex-nowrap flex-wrap lg:justify-start justify-center gap-4 lg:h-40 h-full overflow-x-auto gap-4">
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                 alt=""/>
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                 alt=""/>
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                 alt=""/>
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                 alt=""/>
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                 alt=""/>
          </div>
        </div>
        {/*apartado ficha producto*/ }
        <div
          class="h-full w-full basis-1/3 flex flex-col justify-center items-start">
          <div
            class="w-full w-full text-sm">
            id del producto
          </div>
          <div
            class="w-full w-full my-2 font-medium">
            Nombre del producto
          </div>
          <div
            class="w-full h-full flex flex-col">
            <div class="text-gray-400 line-through">$100</div>
            <div class="flex items-center gap-2">
              <div class="text-red-600 text-2xl font-bold">$60</div>
              <div class="text-red-600 text-sm">(-40% descuento)</div>
            </div>
          </div>
          <div class="w-full h-full flex my-2 flex-col">
            <p class="font-bold my-2">Cantidad</p>
            <div class="w-full flex xxs:flex-row flex-col items-center gap-4">
              <div
                class="h-12 border-2 rounded-full flex justify-center items-center">
                <div class="flex gap-2 px-2">
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 12H6"></path>

                    </svg>
                  </button>
                  <p class="mx-2">0</p>
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v12m6-6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <button type="button"
                      class="h-12 px-5 py-2.5 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-xs lg:text-sm text-center dark:focus:ring-yellow-900">
                Agregar al carrito
              </button>
            </div>
          </div>
          <div
            class="my-4 flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-2 after:border-gray-100 after:border-1 after:inline-block">
          </div>
          <div
            class="w-full h-full">
            Descripcion del producto
          </div>
        </div>
      </div>
      <Phrase/>
      <div
        class="flex flex-wrap w-full gap-4 h-full justify-center items-center">
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
      </div>

      <Footer/>
    </>
  )
} )
