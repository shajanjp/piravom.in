import PlaceList from "../../islands/PlaceList.tsx";
import placesRepo from "../../utils/places-repo.ts";

interface Place {
  name: string;
  category: string;
}

export const handler: Handlers<Place> = {
  async GET(_req, ctx) {
    // const places = [{ name: "Place 1" }, { name: "Place 2" }];
    const places = await placesRepo.getAll();
    let placesFormatted = places.results.reduce((acc, { properties }) => {
      // console.log(JSON.stringify(properties, null, 2));
      const category = properties["Category"]?.select.name;
      const name = properties["Name"]?.title[0]?.plain_text;
      acc[category] = acc[category] || [];
      acc[category].push({ name, category });
      return acc;
    }, {});
    console.log(JSON.stringify(placesFormatted, null, 2));

    if (!places) {
      return ctx.renderNotFound({
        message: "Project does not exist",
      });
    }
    return ctx.render(placesFormatted);
  },
};

export default function ProjectPage(props: PageProps) {
  return (
    <div class="container mx-auto">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul
          role="list"
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Object.keys(props.data).map((category: string) => (
            <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-sm">
              <PlaceList data={{ category, entries: props.data[category] }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
