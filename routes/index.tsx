import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <body class="flex items-center justify-center h-screen bg-green-600">
    <div class="text-center">
    <h1 class="text-4xl font-bold text-white font-roboto text-5xl">www.piravom.in</h1>
    <p class="mt-4 text-lg font-roboto font-light text-white">Coming soon...</p>
    </div>
    </body>
    );
}
  