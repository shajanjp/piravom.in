import { useState } from "preact/hooks";

export function NavbarIsland() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header class="inset-x-0 top-0 z-50 border-b border-gray-200">
      <nav
        aria-label="Global"
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Piravom.in</span>
            <img
              alt=""
              src="./letter-p.png"
              class="h-8 w-auto"
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              >
              </path>
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="/attractions" class="text-sm/6 font-semibold text-gray-900">
            Attractions
          </a>
          <a href="/emergency" class="text-sm/6 font-semibold text-gray-900">
            Emergency
          </a>
          <a href="#" class="text-sm/6 font-semibold text-gray-900">
            Business
          </a>
          <a href="#" class="text-sm/6 font-semibold text-gray-900">
            About
          </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm/6 font-semibold text-gray-900">
            Explore <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div class="lg:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/attractions"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-900"
            >
              Attractions
            </a>
            <a
              href="/emergency"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-900"
            >
              Emergency
            </a>
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-900"
            >
              Business
            </a>
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-900"
            >
              About
            </a>
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-900"
            >
              Explore
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
