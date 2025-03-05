import PlaceList from "../../islands/PlaceList.tsx";
import placesRepo from "../../utils/places-repo.ts";

interface Place {
  name: string;
  category: string;
}

export const handler: Handlers<Place> = {
  async GET(_req, ctx) {
    const places = await placesRepo.getAll();
    let placesFormatted = places.results.reduce((acc, { properties }) => {
      const category = properties["Category"]?.select.name;
      const name = properties["Name"]?.title[0]?.plain_text;
      const mapUrl = properties["Google Map Location"]?.url;

      acc[category] = acc[category] || [];
      acc[category].push({ name, category, mapUrl });

      return acc;
    }, {});

    if (!places) {
      return ctx.renderNotFound({
        message: "Places does not exist",
      });
    }

    return ctx.render(placesFormatted);
  },
};

export default function ProjectPage(props: PageProps) {
  return (
    <div class="container mx-auto mt-5">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="columns-2 md:columns-4 gap-4 space-y-4">
          {Object.keys(props.data).map((category: string) => (
            <div class="divide-y divide-gray-200 rounded-lg bg-white shadow-sm">
              <PlaceList data={{ category, entries: props.data[category] }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
