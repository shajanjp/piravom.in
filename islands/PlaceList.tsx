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

  let emojiMapping = {
    "Shopping": "🛍",
    "Emergency": "🚨",
    "Education": "🎓",
    "Religious": "⛪",
    "Entertainment": "🎭",
    "Food": "🍔",
    "Attraction": "✨",
    "Bank": "💰",
  };

  return (
    <div class="overflow-hidden ring-1 shadow-sm ring-black/5 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-300">
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr>
            <td class="py-2 pr-2 pl-2 text-sm font-bold bg-gray-100 whitespace-normal text-gray-900 sm:pl-2">
              {emojiMapping[category] || "📍"} {category}
            </td>
          </tr>
          {places.map((place: any) => (
            <tr>
              <td class="py-2 pr-2 pl-2 text-sm font-medium whitespace-normal text-gray-700 sm:pl-2">
                <a
                  href={place.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {place.name}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
