import { component$ } from "@builder.io/qwik";

export default component$( () => {
  return (
    <>
      <nav
        class="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
        <div
          class="order-first flex flex-wrap items-center justify-center xs:justify-start md:flex-nowrap">
          {/*logo*/ }
          <a href="https://flowbite.com/"
             class="flex w-full basis-auto items-center justify-center xs:basis-2/4 xs:justify-start lg:basis-8/12">
            <img src="https://flowbite.com/docs/images/logo.svg"
                 class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span
              class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
          </a>
          {/*search*/ }
          <div class="order-3 flex w-full basis-auto md:order-2 md:basis-4/12">
            {/*search icon*/ }
            <div class="relative w-full">
              <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5 text-gray-500" aria-hidden="true"
                     fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar"
                     class="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white md:w-52 lg:w-60 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                     placeholder="Search..." />
            </div>
            {/*hamburgesa*/ }
          </div>
          {/*botones*/ }
          <div
            class="md:my-0 my-3 order-2 flex w-full basis-auto justify-around xs:basis-2/4 md:order-3 md:basis-3/12">
            <button type="button"
                    class="p-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
              <svg class="h-4 w-4" aria-hidden="true"
                   focusable="false" data-prefix="fab" data-icon="facebook-f"
                   role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 320 512">
                <path fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
              </svg>
            </button>
            <button type="button"
                    class="p-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
              <svg class="h-4 w-4" aria-hidden="true"
                   focusable="false" data-prefix="fab" data-icon="facebook-f"
                   role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 320 512">
                <path fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
              </svg>
            </button>
            <button type="button"
                    class="p-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
              <svg class="h-4 w-4" aria-hidden="true"
                   focusable="false" data-prefix="fab" data-icon="facebook-f"
                   role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 320 512">
                <path fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
              </svg>
            </button>
            <button type="button"
                    class="p-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
              <svg class="h-4 w-4" aria-hidden="true"
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
    </>
  );
} );

// search icon
// <button type="button" data-collapse-toggle="navbar-search"
// aria-controls="navbar-search" aria-expanded="false"
// class="mr-1 rounded-lg text-sm text-gray-500 p-2.5 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 md:hidden dark:hover:bg-gray-700 dark:focus:ring-gray-700">
//   <svg class="h-5 w-5" aria-hidden="true" fill="currentColor"
// viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd"
// d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
// clip-rule="evenodd"></path>
// </svg>
// <span class="sr-only">Search</span>
// </button>
// input grande
// <div class="relative hidden md:block">

// hamburgesa
// <button data-collapse-toggle="navbar-search" type="button"
// class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 md:hidden dark:hover:bg-gray-700 dark:focus:ring-gray-600"
// aria-controls="navbar-search" aria-expanded="false">
//   <span class="sr-only">Open menu</span>
// <svg class="h-6 w-6" aria-hidden="true" fill="currentColor"
//      viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd"
//         d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//         clip-rule="evenodd"></path>
// </svg>
// </button>
