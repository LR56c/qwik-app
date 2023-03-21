import { component$ } from "@builder.io/qwik";

export default component$( () => {
  return (
    <>
      <nav
        class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div
          class=" flex flex-wrap md:flex-nowrap items-center">
          {/*logo*/ }
          <a href="https://flowbite.com/" class="flex w-full items-center">
            <img src="https://flowbite.com/docs/images/logo.svg"
                 class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          {/*search*/ }
          <div class="flex mx-4 w-4/12">
            <button type="button" data-collapse-toggle="navbar-search"
                    aria-controls="navbar-search" aria-expanded="false"
                    class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
              <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" aria-hidden="true"
                     fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar"
                     class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Search..." />
            </div>
            <button data-collapse-toggle="navbar-search" type="button"
                    class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-search" aria-expanded="false">
              <span class="sr-only">Open menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div class="flex w-3/12 justify-around">
            <button type="button"
                    class="p-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
              <svg class="w-4 h-4" aria-hidden="true"
                   focusable="false" data-prefix="fab" data-icon="facebook-f"
                   role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 320 512">
                <path fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
              </svg>
            </button>
            <button type="button"
                    class="p-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
              <svg class="w-4 h-4" aria-hidden="true"
                   focusable="false" data-prefix="fab" data-icon="facebook-f"
                   role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 320 512">
                <path fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
              </svg>
            </button>
            <button type="button"
                    class="p-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
              <svg class="w-4 h-4" aria-hidden="true"
                   focusable="false" data-prefix="fab" data-icon="facebook-f"
                   role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 320 512">
                <path fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
              </svg>
            </button>
            <button type="button"
                    class="p-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
              <svg class="w-4 h-4" aria-hidden="true"
                   focusable="false" data-prefix="fab" data-icon="facebook-f"
                   role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 320 512">
                <path fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/*<nav*/ }
      {/*  class="fixed relative top-0 left-0 z-20 w-full h-32 bg-gray-400">*/ }
      {/*  <div*/ }
      {/*    class="relative min-w-full min-h-full flex">*/ }
      {/* imagen izquierda */ }
      {/*    <a href="https://flowbite.com/"*/ }
      {/*       class="bg-green-500 min-h-full flex items-center basis-1/3">*/ }
      {/*      <img src="https://flowbite.com/docs/images/logo.svg"*/ }
      {/*           class="mr-3 h-6" alt="Flowbite Logo" />*/ }
      {/*    </a>*/ }
      {/*barra derecha*/ }
      {/*    <div class="flex min-h-full basis-2/3 bg-yellow-500">*/ }
      {/*      <div>*/ }
      {/*input busqueda*/ }
      {/*        <button type="button"*/ }
      {/*                data-collapse-toggle="navbar-search"*/ }
      {/*                aria-controls="navbar-search"*/ }
      {/*                aria-expanded="false"*/ }
      {/*                class="mr-1 rounded-lg text-sm text-gray-500 p-2.5 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden">*/ }
      {/*icono busqueda*/ }
      {/*          <svg class="h-5 w-5" aria-hidden="true" fill="currentColor"*/ }
      {/*               viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/ }
      {/*            <path fill-rule="evenodd"*/ }
      {/*                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"*/ }
      {/*                  clip-rule="evenodd"></path>*/ }
      {/*          </svg>*/ }
      {/*          <span class="sr-only">Search</span>*/ }
      {/*        </button>*/ }
      {/*        <div class="relative bg-blue-800 hidden md:block">*/ }
      {/*          <div*/ }
      {/*            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">*/ }
      {/*            <svg class="h-5 w-5 text-gray-500" aria-hidden="true"*/ }
      {/*                 fill="currentColor" viewBox="0 0 20 20"*/ }
      {/*                 xmlns="http://www.w3.org/2000/svg">*/ }
      {/*              <path fill-rule="evenodd"*/ }
      {/*                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"*/ }
      {/*                    clip-rule="evenodd"></path>*/ }
      {/*            </svg>*/ }
      {/*            <span class="sr-only">Search icon</span>*/ }
      {/*          </div>*/ }
      {/*          <input type="text" id="search-navbar"*/ }
      {/*                 class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"*/ }
      {/*                 placeholder="Search..." />*/ }
      {/*        </div>*/ }
      {/*        <button data-collapse-toggle="navbar-search" type="button"*/ }
      {/*                class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"*/ }
      {/*                aria-controls="navbar-search" aria-expanded="false">*/ }
      {/*          <span class="sr-only">Open menu</span>*/ }
      {/*          <svg class="h-6 w-6" aria-hidden="true" fill="currentColor"*/ }
      {/*               viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/ }
      {/*            <path fill-rule="evenodd"*/ }
      {/*                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"*/ }
      {/*                  clip-rule="evenodd"></path>*/ }
      {/*          </svg>*/ }
      {/*        </button>*/ }
      {/*      </div>*/ }
      {/*      <div>hola</div>*/ }
      {/*    </div>*/ }
      {/*  </div>*/ }
      {/*</nav>*/ }
    </>
  );
} );


// <div
//   class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//   id="navbar-search">
//   <div class="relative mt-3 md:hidden">
//     <div
//       class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//       <svg class="w-5 h-5 text-gray-500" aria-hidden="true"
//            fill="currentColor" viewBox="0 0 20 20"
//            xmlns="http://www.w3.org/2000/svg">
//         <path fill-rule="evenodd"
//               d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//               clip-rule="evenodd"></path>
//       </svg>
//     </div>
//     <input type="text" id="search-navbar"
//            class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//            placeholder="Search..." />
//   </div>
//   <ul
//     class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//     <li>
//       <a href="#"
//          class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
//          aria-current="page">Home</a>
//     </li>
//     <li>
//       <a href="#"
//          class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//     </li>
//     <li>
//       <a href="#"
//          class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//     </li>
//   </ul>
// </div>
