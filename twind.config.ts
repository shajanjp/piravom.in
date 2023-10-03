import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        brandBlue: '#0AB',
        brandGray: '#222', 
      },
      fontFamily: {
        roboto: ['Roboto', 'sans'],
      },
    },
  },
} as Options;
