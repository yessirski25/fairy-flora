import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://png.pngtree.com/background/20231030/original/pngtree-d-rendering-of-a-green-washing-machine-shelf-featuring-environmentally-friendly-picture-image_5803869.jpg')"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
