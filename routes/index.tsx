/// <reference lib="deno.unstable" />

import PlaceList from "../islands/PlaceList.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import placesRepo from "../utils/places-repo.ts";

interface Place {
  name: string;
  category: string;
  mapUrl: string;
  image?: string;
  description?: string;
}

export const handler: Handlers = {
  async GET(_req, ctx) {
    const placesFormatted = await placesRepo.getAllFromKv();
    if (!placesFormatted || Object.keys(placesFormatted).length === 0) {
      return ctx.renderNotFound({
        message: "Places do not exist",
      });
    }
    return ctx.render(placesFormatted);
  },
};

export default function Home(props: PageProps) {
  return (
    <main>
      <div class="relative isolate">
        <svg
          aria-hidden="true"
          class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y="-1"
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0"
            >
            </path>
          </svg>
          <rect
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            width="100%"
            height="100%"
            stroke-width="0"
          >
          </rect>
        </svg>
        <div
          aria-hidden="true"
          class="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            style="
              clip-path: polygon(
                63.1% 29.5%,
                100% 17.1%,
                76.6% 3%,
                48.4% 0%,
                44.6% 4.7%,
                54.5% 25.3%,
                59.8% 49%,
                55.2% 57.8%,
                44.4% 57.2%,
                27.8% 47.9%,
                35.1% 81.5%,
                0% 97.7%,
                39.2% 100%,
                35.2% 81.4%,
                97.2% 52.8%,
                63.1% 29.5%
              );
            "
            class="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          >
          </div>
        </div>
        <div class="overflow-hidden">
          <div class="mx-auto max-w-7xl px-6 pt-12 pb-20 sm:pt-60 lg:px-8 lg:pt-12">
            <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 class="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                  Piravom.in
                </h1>
                <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                  Discover everything our hometown has to offer - all in one
                  place! From the best restaurants and shopping spots to
                  essential services like hospitals, schools, and government
                  offices, we’ve got you covered. Whether you’re a resident or a
                  visitor, explore local businesses, find hidden gems, and stay
                  connected with our community.
                </p>
                <div class="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Contact Us
                  </a>
                  <a href="#" class="text-sm/6 font-semibold text-gray-900">
                    Explore <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div class="relative">
                    <img
                      title="Piravom Fighter Jet"
                      alt="Piravom Fighter Jet"
                      src="/images/piravom-fighter-jet.jpg"
                      class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset">
                    </div>
                  </div>
                </div>
                <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div class="relative">
                    <img
                      title="Piravom Kochareekkal Caves"
                      alt="Piravom Kochareekkal Caves"
                      src="/images/piravom-kochareekkal-caves.jpg"
                      class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset">
                    </div>
                  </div>
                  <div class="relative">
                    <img
                      title="Piravom Nechoor River"
                      alt="Piravom Nechoor River"
                      src="/images/piravom-nechoor-river.jpg"
                      class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset">
                    </div>
                  </div>
                </div>
                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="relative">
                    <img
                      title="Piravom River Sunset"
                      alt="Piravom River Sunset"
                      src="/images/piravom-river-sunset.jpg"
                      class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset">
                    </div>
                  </div>
                  <div class="relative">
                    <img
                      title="Piravom Riverside Walkway"
                      alt="Piravom Riverside Walkway"
                      src="/images/piravom-riverside-walkway.jpg"
                      class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mx-auto mt-5">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
                {Object.keys(props.data).map((category: string) => (
                  <div class="divide-y divide-gray-200 rounded-lg bg-white shadow-sm">
                    <PlaceList
                      data={{ category, entries: props.data[category] }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
