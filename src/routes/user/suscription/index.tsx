import { component$ } from "@builder.io/qwik";
import Nav            from "~/components/shared/nav";
import Tabs           from "~/components/shared/tabs";
import Footer         from "~/components/shared/footer";

export default component$( () => {
  return (
    <>
      <Nav />
      <Tabs />
      <div
        class="w-full m-4 flex justify-center items-center place-items-center">
        <div class="w-1/2 bg-white rounded-lg shadow">
          <div
            class="p-4 space-y-2 border-b rounded-t">
            <h3
              class="text-xl font-semibold text-gray-900">
              Detalle de suscripción
            </h3>
            <p class="text-gray-500">
              Tu proximo pago sera de $ 0.00 el 2021-08-01
            </p>
          </div>
          {/*main flex*/}
          <div class="relative flex flex-row p-6">
            {/*listado*/}
            <ul role="list" class="w-1/2 space-y-5">
              <li class="flex space-x-3">
                <span
                  class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Tu suscripcion incluye:
                </span>
              </li>
              <li class="flex space-x-3">
                <svg aria-hidden="true"
                     class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                     fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <title>Check icon</title>
                  <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd">
                  </path>
                </svg>
                <span
                  class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
              </li>
              <li class="flex space-x-3">
                <svg aria-hidden="true"
                     class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                     fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <title>Check icon</title>
                  <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd">
                  </path>
                </svg>
                <span
                  class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
              </li>
              <li class="flex space-x-3">
                <svg aria-hidden="true"
                     class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                     fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <title>Check icon</title>
                  <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd">

                  </path>
                </svg>
                <span
                  class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
              </li>
            </ul>
            {/*tarjeta*/}
            <div class="w-1/2 flex justify-center items-center">
              <div class="py-3 flex w-2/3 justify-evenly items-center rounded-lg border-gray-200 border-2">
                <svg class="fill-current w-8 h-8 text-gray-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"></path>
                </svg>
                <p>**** **** **** 1234</p>
                <svg class="fill-current w-6 h-6 text-gray-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
            <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Desactivar suscripcion
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} );
