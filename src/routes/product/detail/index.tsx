import { component$ } from "@builder.io/qwik";
import Nav            from "~/components/shared/nav";
import Footer         from "~/components/shared/footer";
import Phrase         from "~/components/shared/phrase";

export default component$( () => {
  return (
    <>
      <Nav />
      <div class="relative flex w-full h-full gap-4 p-4">
        <div class="h-full flex flex-col basis-2/3 gap-4">
          <div>
            <img class="h-full object-contain max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                 alt="" />
          </div>
          <div
            class="flex lg:flex-nowrap flex-wrap lg:justify-start justify-center gap-4 lg:h-40 h-full overflow-x-auto flex gap-4">
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                 alt="" />
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                 alt="" />
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                 alt="" />
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                 alt="" />
            <img class="h-36 h-36 rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                 alt="" />
          </div>
        </div>
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
            <div class="w-full flex items-center gap-4">
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
                      class="h-12 px-5 py-2.5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm text-center">
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
      <Phrase />
      <div class="flex flex-wrap w-full gap-4 h-full justify-center items-center">
        <div class="h-32 w-32 bg-red-800"></div>
        <div class="h-32 w-32 bg-red-800"></div>
        <div class="h-32 w-32 bg-red-800"></div>
        <div class="h-32 w-32 bg-red-800"></div>
        <div class="h-32 w-32 bg-red-800"></div>
        <div class="h-32 w-32 bg-red-800"></div>
        <div class="h-32 w-32 bg-red-800"></div>
        <div class="h-32 w-32 bg-red-800"></div>
        <div class="h-32 w-32 bg-red-800"></div>
        <div class="h-32 w-32 bg-red-800"></div>
        <div class="h-32 w-32 bg-red-800"></div>
      </div>
      <Footer />
    </>
  );
} );
