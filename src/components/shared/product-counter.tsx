import { component$ } from "@builder.io/qwik"

export default component$( () => {
  return (
    <>
      <div
        class="h-10 border-2 rounded-full flex justify-center items-center">
        <div class="flex gap-2 px-2">
          <button>
            <svg class="h-6 w-6" fill="none"
                 stroke="currentColor"
                 stroke-width="1.5" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
                 aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M18 12H6"></path>

            </svg>
          </button>
          <p class="mx-2">0</p>
          <button>
            <svg class="h-6 w-6" fill="none"
                 stroke="currentColor"
                 stroke-width="1.5" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
                 aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6v12m6-6H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
} )

//ANTIGUO
// < button
// type              = "button"
// class         =
//   "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm p-2.5 text-center" >
//   < svg
// class         = "h-5 w-5"
// fill              = "none"
// stroke            = "currentColor"
// stroke - width    = "1.5"
// viewBox           = "0 0 24 24"
// xmlns             = "http://www.w3.org/2000/svg"
// aria - hidden     = "true" >
//   < path
// stroke - linecap  = "round"
// stroke - linejoin = "round"
// d                 = "M6 18L18 6M6 6l12 12" > < /path>
// </svg>
// </button>
