/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
          extend: {
                  colors: {
                            ink: "#1C2B2D",
                            parchment: "#F6F3EC",
                            clay: "#A8562E",
                            moss: "#3F5B52",
                            gold: "#B08A3E",
                            line: "#DED6C4",
                  },
                  fontFamily: {
                            display: ["'Fraunces'", "serif"],
                            body: ["'Inter'", "system-ui", "sans-serif"],
                  },
                  maxWidth: {
                            content: "72rem",
                  },
          },
    },
    plugins: [],
};
