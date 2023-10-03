import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <body class="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style="background-image: url('https://i.imgur.com/HrTavfe.jpg')">
    <div class="text-center">
    <h1 class="text-4xl font-bold text-white font-roboto font-normal" style="text-shadow: 0 5px 10px black;">piravom.in</h1>
    <p class="mt-4 text-lg font-roboto font-light text-white" style="text-shadow: 0 5px 10px black;">Coming soon...</p>
    </div>
    </body>
    );
}
  