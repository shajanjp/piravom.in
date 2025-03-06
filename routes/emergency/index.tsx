import PlaceList from "../../islands/PlaceList.tsx";
import placesRepo from "../../utils/places-repo.ts";

interface EmergencyContact {
  name: string;
  mapUrl: string;
  phone: string;
  description: string;
}

export const handler: Handlers<Place> = {
  async GET(_req, ctx) {
    const emergencyFilter: ObjectLiteral = {
      "filter": {
        "property": "Category",
        "select": {
          "equals": "Emergency",
        },
      },
    };
    const places = await placesRepo.getAll(emergencyFilter);
    let placesFormatted: EmergencyContact[] = places.results.reduce(
      (acc, { properties }) => {
        acc.push({
          name: properties["Name"]?.title[0]?.plain_text,
          mapUrl: properties["Google Map Location"]?.url,
          phone: properties["Phone"]?.phone_number,
          description: properties["Description"]?.rich_text[0]?.plain_text,
        });

        return acc;
      },
      [],
    );

    if (!placesFormatted.length) {
      return ctx.renderNotFound({
        message: "Places does not exist",
      });
    }

    return ctx.render(placesFormatted);
  },
};

export default function EmergencyPage(props: PageProps) {
  return (
    <div class="bg-gray-100 py-8">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul
          role="list"
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {props.data.map((item: EmergencyContact) => (
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
                  alt=""
                  src="./icons/siren.png"
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
                  <div class="-ml-px flex w-0 flex-1">
                    <a
                      href={`tel:${item.phone}`}
                      class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="size-5 text-gray-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                          clip-rule="evenodd"
                        >
                        </path>
                      </svg>
                      Call
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
