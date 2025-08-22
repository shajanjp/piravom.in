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
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D6D1X5V2T9"
        >
        </script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D6D1X5V2T9');
          `}
        </script>
      </head>
      <body>
        <div>
          <div class="bg-white min-h-screen">
            <NavbarIsland />
            <Component />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
