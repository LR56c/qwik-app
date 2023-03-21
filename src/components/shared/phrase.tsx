import { component$ } from "@builder.io/qwik";

export default component$( () => {
  return (
    <>
      <div class="flex w-full my-8 space-x-4">
        <div
          class="flex w-64 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-1 after:inline-block">
        </div>
        <p class="text-gray-500 text-center dark:text-gray-400">Track work across
          the
          enterprise through an open, collaborative platform. Link issues across
          Jira and ingest data from other software development tools, so your IT
          support and operations teams have richer contextual information to
          rapidly respond to requests, incidents, and changes.</p>
        <div
          class="flex w-64 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-1 after:inline-block">
        </div>
      </div>
    </>
  );
} );
