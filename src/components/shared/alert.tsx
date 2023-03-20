import { component$ } from "@builder.io/qwik";

export default component$( () => {
  return (
    <>
      <div
        class="relative flex h-6 w-full items-center justify-center p-6 text-center bg-nav">
        <p class="text-2xl font-bold text-white">
          ¡Despacho a Todo Chile! Santiago Urbano Gratis desde $20.000 y
          Regiones por
          pagar. <a href="" class="underline">Más Info AQUÍ</a>
        </p>
        <div
          class="absolute top-0 right-0 h-6 w-6 cursor-pointer fill-current text-gray-400 hover:text-gray-100">
          <svg fill="none" stroke="currentColor" stroke-width="3"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
      </div>
    </>
  );
} );
