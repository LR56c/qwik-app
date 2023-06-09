import { component$ } from "@builder.io/qwik";

export default component$( () => {
  return (
    <>
      <div class="flex justify-center items-center m-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Agregar
        </button>
      </div>
    </>
  );
} );
