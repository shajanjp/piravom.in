import placesRepo from "../../utils/places-repo.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Attraction {
  name: string;
  mapUrl: string;
  image: string;
  description: string;
}

export const handler: Handlers<Attraction[]> = {
  async GET(_req, ctx) {
    const attractionsFilter = {
      filter: {
        property: "Category",
        select: {
          equals: "Attraction",
        },
      },
    };
    const places = await placesRepo.getAll(attractionsFilter);
    const placesFormatted: Attraction[] = places.results.map((
      { properties },
    ) => ({
      name: properties["Name"]?.title[0]?.plain_text,
      mapUrl: properties["Google Map Location"]?.url,
      image: properties["Image"]?.files[0]?.file?.url,
      description: properties["Description"]?.rich_text[0]?.plain_text,
    }));

    if (!placesFormatted.length) {
      return ctx.renderNotFound({
        message: "Attractions do not exist",
      });
    }

    return ctx.render(placesFormatted);
  },
};

export default function AttractionsPage({ data }: PageProps<Attraction[]>) {
  return (
    <div class="bg-gray-100 py-8">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul
          role="list"
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((item) => (
            <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-sm">
              <div class="flex w-full items-center justify-between space-x-6 p-6">
                <div class="flex-1 truncate">
                  <div class="flex items-center space-x-3">
                    <h3 class="truncate text-sm font-medium text-gray-900">
                      {item.name}
                    </h3>
                  </div>
                  <p class="mt-1 truncate text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
                <img
                  alt={item.name}
                  src="./icons/nature.png"
                  class="size-10 shrink-0 rounded-full bg-gray-300"
                />
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <div class="flex w-0 flex-1">
                    <a
                      href={item.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="size-5 text-gray-400"
                      >
                        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z">
                        </path>
                        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z">
                        </path>
                      </svg>
                      Location
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
