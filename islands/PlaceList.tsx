import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

// The target date is passed as a string instead of as a `Date`, because the
// props to island components need to be JSON (de)serializable.
export default function PlaceList(props: any) {
  let category = props.data.category;
  let places = props.data.entries;

  // Set up an interval to update the `now` date every second with the current
  // date as long as the component is mounted.
  useEffect(() => {
  }, [props.data]);

  return (
    <div class="mt-2 overflow-hidden ring-1 shadow-sm ring-black/5 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-300">
        <tbody class="divide-y divide-gray-200 bg-white">
          {places.map((place: any) => (
            <tr>
              <td class="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6">
                {place.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
