import { component$ } from "@builder.io/qwik";
import CartItem       from "~/components/shared/cart-item";

export default component$( () => {
  return (
    <>
      {/*boton drawer*/}
      <div class="text-center">
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button" data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example" data-drawer-placement="right"
          aria-controls="drawer-right-example">
          right
        </button>
      </div>
      <div id="drawer-right-example"
           class="fixed w-full xs:w-96 top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800"
           aria-labelledby="drawer-right-label">
        {/*body*/ }
        <h5 id="drawer-right-label"
            class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">Listado
          carrito</h5>
        <button type="button" data-drawer-hide="drawer-right-example"
                aria-controls="drawer-right-example"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
          close
          <span class="sr-only">Close menu</span>
        </button>
        <div
          class="flex flex-col xxs:flex-row justify-evenly items-center gap-2">
          {/*total*/}
          <div
            class="p-3 bg-white border border-gray-200 rounded-lg shadow">
            <p class="font-normal text-gray-700">
              Total: $1234
            </p>
          </div>
          {/*pagar*/}
          <button type="button"
                  class="h-12 px-12 py-2.5 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-center">
            Pagar
          </button>
        </div>
        {/*listado carrito*/}
        <div class="w-full flex flex-col gap-4 my-4 items-center">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </>
  );
} );
