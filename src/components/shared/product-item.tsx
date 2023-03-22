import { component$ } from "@builder.io/qwik";

export default component$( () => {
  return (
    <>
      {/* TODO: colocar con boton agregar carrito al hacer hover?*/ }
      {/* TODO: talvez sea mejor usar producto recomendado como item*/ }
      <div
        class="flex flex-col w-52 h-80 bg-white border border-gray-200 rounded-lg shadow">
        <a href="#" class="basis-3/5 w-full h-full">
          <img class="object-contain rounded-t-lg w-full h-full"
               src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
               alt="" />
        </a>
        <a
          href="#"
          class="basis-1/5 my-2 font-medium h-full flex justify-center items-center">
          {/*TODO: agregar elipsis y verificar tamaño todos textos dinamicos*/ }
          Nombre del producto
        </a>
        <div class="basis-1/5 mx-auto">
          <div
            class="w-full flex my-2 flex-col">
            <div class="text-gray-400 line-through">$100</div>
            <div class="flex items-center gap-2">
              <div class="text-2xl font-bold">$60</div>
              <div class="text-sm">(-40% descuento)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} );
