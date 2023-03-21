import { component$ }        from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Footer from "~/components/shared/footer";
import Nav                   from "~/components/shared/nav";
import Phrase                from "~/components/shared/phrase";

export default component$( () => {
  return (
    <>
      <Nav />
      <div class="relative m-4 h-full w-full flex gap-4">
        <div class="basis-11/12 h-auto grid grid-cols-3 gap-2">
          <div>
            <img class="h-full object-cover max-w-full rounded-lg"
                 src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                 alt="" />
          </div>
          <div>
            <img class="h-full object-cover max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                 alt="" />
          </div>
          <div>
            <img class="h-full object-cover max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                 alt="" />
          </div>
          <div>
            <img class="h-full object-cover max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                 alt="" />
          </div>
          <div>
            <img class="h-full object-cover max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                 alt="" />
          </div>
          <div>
            <img class="h-full object-cover max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                 alt="" />
          </div>
        </div>
        <div id="controls-carousel" class="relative h-full w-full bg-gray-400"
             data-carousel="slide">
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                class="absolute object-contain h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..." />
            </div>
            <div class="hidden duration-700 ease-in-out"
                 data-carousel-item="active">
              <img
                src="https://images.unsplash.com/photo-1679240360999-92f46d4781b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                class="absolute object-contain h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..." />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://images.unsplash.com/photo-1679215805552-e28a96550a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="absolute object-contain h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..." />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://plus.unsplash.com/premium_photo-1669825050503-85ca05eebfc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                class="absolute object-contain h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..." />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://images.unsplash.com/photo-1679335424216-e1edb8ea8e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                class="absolute object-contain h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..." />
            </div>
          </div>
          <button type="button"
                  class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true"
                 class="w-6 h-6 text-white dark:text-gray-800" fill="none"
                 stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
          </button>
          <button type="button"
                  class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true"
                 class="w-6 h-6 text-white dark:text-gray-800" fill="none"
                 stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
          </button>
        </div>
      {/*  TODO: REVISAR*/}
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
      <Phrase />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 m-4">
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                 alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                 alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                 alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                 alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                 alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                 alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                 alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                 alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                 alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                 alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                 alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                 alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
    ;
} );

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta : [
    {
      name   : "description",
      content: "Qwik site description"
    }
  ]
};
