import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

interface BusTiming {
  route: string;
  arrivalTime: string;
  departureTime: string;
  platform: string;
}

export const handler: Handlers<BusTiming[]> = {
  async GET(_req, ctx) {
    // In a real application, you would fetch this data from a database or API
    const busTimings: BusTiming[] = [
      {
        route: "Piravom - Ernakulam",
        arrivalTime: "05:55 AM",
        departureTime: "06:00 AM",
        platform: "1",
      },
      {
        route: "Piravom - Kottayam",
        arrivalTime: "06:25 AM",
        departureTime: "06:30 AM",
        platform: "2",
      },
      {
        route: "Piravom - Thodupuzha",
        arrivalTime: "06:55 AM",
        departureTime: "07:00 AM",
        platform: "3",
      },
      {
        route: "Piravom - Ernakulam",
        arrivalTime: "07:10 AM",
        departureTime: "07:15 AM",
        platform: "1",
      },
      {
        route: "Piravom - Kottayam",
        arrivalTime: "07:40 AM",
        departureTime: "07:45 AM",
        platform: "2",
      },
    ];
    return ctx.render(busTimings);
  },
};

export default function BusTimingsPage({ data }: PageProps<BusTiming[]>) {
  return (
    <>
      <Head>
        <title>Bus Timings - Piravom.in</title>
      </Head>
      <div class="bg-gray-100 py-8">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-6">Bus Timings</h1>
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul role="list" class="divide-y divide-gray-200">
              {data.map((timing) => (
                <li class="px-4 py-5 sm:px-6">
                  <div class="flex items-center justify-between">
                    <p class="text-lg font-medium text-gray-900">
                      {timing.route}
                    </p>
                    <div class="flex flex-row flex-shrink-0">
                      <p class="text-sm text-gray-500 mr-4">
                        <span class="font-semibold text-gray-900">
                          {timing.arrivalTime}
                        </span>
                      </p>
                      <p class="text-sm text-gray-500">
                        <span class="font-semibold text-gray-900">
                          {timing.departureTime}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="mt-1 sm:flex sm:justify-between">
                    <p class="text-sm text-gray-500">
                      Platform: {timing.platform}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
