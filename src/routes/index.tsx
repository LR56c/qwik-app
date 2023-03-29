import { component$ }        from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import Phrase                from "~/components/shared/phrase"
import RecomendedProduct     from "~/components/shared/recomended-product"
import OnSaleProduct         from "~/components/shared/on-sale-product"
import Nav                   from "~/components/shared/nav"
import Footer                from "~/components/shared/footer"

// TODO: raro que suceda que no haya data aqui
// TODO: navegar href carusel, oferta y listado a producto
export default component$( () => {
  return (
    <>
      <Nav/>

      <div id="default-carousel" class="relative w-full z-0"
           data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              class="absolute top-1/2 left-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain"
              alt="..."/>
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              class="absolute top-1/2 left-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain"
              alt="..."/>
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              class="absolute top-1/2 left-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain"
              alt="..."/>
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              class="absolute top-1/2 left-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain"
              alt="..."/>
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              class="absolute top-1/2 left-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain"
              alt="..."/>
          </div>
        </div>
        <div
          class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
          <button type="button" class="h-3 w-3 rounded-full"
                  aria-current="true" aria-label="Slide 1"
                  data-carousel-slide-to="0"></button>
          <button type="button" class="h-3 w-3 rounded-full"
                  aria-current="false" aria-label="Slide 2"
                  data-carousel-slide-to="1"></button>
          <button type="button" class="h-3 w-3 rounded-full"
                  aria-current="false" aria-label="Slide 3"
                  data-carousel-slide-to="2"></button>
          <button type="button" class="h-3 w-3 rounded-full"
                  aria-current="false" aria-label="Slide 4"
                  data-carousel-slide-to="3"></button>
          <button type="button" class="h-3 w-3 rounded-full"
                  aria-current="false" aria-label="Slide 5"
                  data-carousel-slide-to="4"></button>
        </div>
        <button type="button"
                class="absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 group focus:outline-none"
                data-carousel-prev>
        <span
          class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-400/30 group-hover:bg-gray-500/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 sm:h-10 sm:w-10 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <svg aria-hidden="true"
                 class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
        </button>
        <button type="button"
                class="absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 group focus:outline-none"
                data-carousel-next>
        <span
          class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-400/30 group-hover:bg-gray-500/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 sm:h-10 sm:w-10 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <svg aria-hidden="true"
                 class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
        </button>
      </div>
      {/*pagina editor scrollbar https://scrollbar.app/*/ }
      <div class="my-6 flex h-56 w-full gap-6 overflow-x-auto">
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
        <OnSaleProduct/>
      </div>
      <Phrase/>
      <div
        class="mx-auto py-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
        <RecomendedProduct/>
        <RecomendedProduct/>
        <RecomendedProduct/>
        <RecomendedProduct/>
        <RecomendedProduct/>
        <RecomendedProduct/>
        <RecomendedProduct/>
        <RecomendedProduct/>
        <RecomendedProduct/>
        <RecomendedProduct/>
        <RecomendedProduct/>
      </div>
      <Footer/>
    </>
  )
} )

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta : [
    {
      name   : "description",
      content: "Qwik site description"
    }
  ]
}
