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
    <div>
      <table>
        <thead>
          <b>{category}</b>
        </thead>
        <tbody>
          {places.map((place: any) => (
            <tr>
              <td>{place.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
