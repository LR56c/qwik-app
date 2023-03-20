import { component$ } from "@builder.io/qwik";
import Nav            from "~/components/shared/nav";
import Alert          from "~/components/shared/alert";
import Footer         from "~/components/shared/footer";

export default component$( () => {
  return (
    <>
      <Alert />
      <div class="mx-40">
        <Nav />
        <div
          class="bg-blue-500 h-16 w-full flex justify-center items-center text-white text-3xl">
          Estado de orden&nbsp;<a href="#"
                                  class="font-medium underline">#123456</a>
        </div>
        <ol class="flex mt-12 items-center w-full">
          <div class="basis-2/12"></div>
          <li
            class="flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
            <span
              class="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full lg:h-12 lg:w-12 shrink-0">
                <svg aria-hidden="true"
                     class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-blue-300"
                     fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path></svg>
            </span>
          </li>
          <li
            class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
            <span
              class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <svg aria-hidden="true"
                     class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
                     fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"><path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path></svg>
            </span>
          </li>
          <li class="flex items-center ">
            <span
              class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <svg aria-hidden="true"
                     class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
                     fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"><path
                  d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path></svg>
            </span>
          </li>
          <div class="basis-2/12"></div>
        </ol>
        <ol class="flex items-center w-full">
          <div class="basis-2/12"></div>
          <li class="flex w-full items-center text-blue-600">
            <span
              class="flex items-center justify-center w-10 h-10 lg:h-12 lg:w-12 shrink-0">
              confirmado
            </span>
          </li>
          <li class="flex w-full items-center">
            <span
              class="flex items-center justify-center w-10 h-10 lg:h-12 lg:w-12 shrink-0">
              proceso
            </span>
          </li>
          <li class="flex items-center ">
            <span
              class="flex items-center justify-center w-10 h-10 lg:h-12 lg:w-12 shrink-0">
              terminado
            </span>
          </li>
          <div class="basis-2/12"></div>
        </ol>

        <div class="flex justify-center items-center w-full h-64">
          <div
            class="flex flex-col gap-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h5
              class="text-xl font-semibold tracking-tight text-gray-900">
              Tu produco esta: confirmado
            </h5>
            <p class=" font-normal text-gray-500 dark:text-gray-400">
              Direccion a enviar: ----------
            </p>
            <p class="font-normal text-gray-500 dark:text-gray-400">
              Numero de seguimiento:
              <a href="#"
                 class="inline-flex items-center text-blue-600 hover:underline">
                87897569876
                <svg class="w-5 h-5 ml-2" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path
                    d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </a>
            </p>

          </div>
        </div>
        <button type="button"
                class="p-3 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
          <svg class="w-6 h-6" aria-hidden="true"
               focusable="false" data-prefix="fab" data-icon="facebook-f"
               role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 320 512">
            <path fill="currentColor"
                  d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
          </svg>
        </button>

        <Footer/>
      </div>
    </>
  );
} );