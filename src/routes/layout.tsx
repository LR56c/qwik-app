import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
      <main>
        <Slot />
        <script src="../../node_modules/flowbite/dist/flowbite.min.js"></script>
        <script src="node_modules/flowbite/dist/flowbite.min.js"></script>
      </main>
  );
});
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>
