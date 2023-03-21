import { component$ } from "@builder.io/qwik"

export default component$(() => {
  return (
    <>
      <div class="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <span class="absolute top-2 right-0 bg-red-600 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-lg">-65%</span>
        <img class="rounded-lg" src="https://media.istockphoto.com/id/1198271727/es/foto/objeto-ondulado-abstracto.jpg?b=1&s=170667a&w=0&k=20&c=xe4iO1HXrNxrlBjX7zXBT3WAn3KkteK17pAPGWzK_4A=" alt="product image" />
        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white">$599</span>
          {/* <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a> */}
      </div>
    </>)
})