import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <body class="flex items-center justify-center h-screen bg-brandGray">
    <div class="text-center">
    <h1 class="text-4xl font-bold text-brandBlue font-roboto font-normal">www.piravom.in</h1>
    <p class="mt-4 text-lg text-[#EEE] font-roboto font-light">Coming soon...</p>
    </div>
    </body>
    );
}
  