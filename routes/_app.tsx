import { AppProps } from "$fresh/server.ts";
import { NavbarIsland } from "../islands/NavbarIsland.tsx";
import { Footer } from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <title>Piravom.in</title>
      </head>
      <body>
        <div>
          <div class="bg-white">
            <NavbarIsland />
            <Component />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
