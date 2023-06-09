import { component$ } from "@builder.io/qwik";

export default component$( () => {
  return (
    <>
      <div class="my-4 md:my-8 flex w-full space-x-4">
        <div
          class="flex w-64 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-1 after:inline-block">
        </div>
        <p class="text-center text-xs text-gray-500 line-clamp-3 dark:text-gray-400 md:text-sm lg:text-base">Track work across
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
