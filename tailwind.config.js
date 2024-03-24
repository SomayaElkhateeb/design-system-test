/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Define custom color classes here
      colors: {
        //! Primary Colors
        primary: "#0D53FC",
        "pri-dark": "#032C58",
        "pri-pressed": "#0A3FBF",
        "pri-hover": "#0B47D9",
        "pri-light": "#E7EEFF", // primary-Light
        // "pri-top-light": "#E7EEFF", // Primary-Top light-BG

        //! Secondary Colors
        secondary: "#55C397",
        "sec-dark": "#004328", //secondary-dark
        "sec-pressed": "#3E8F6E",
        "sec-hover": "#49A882 ",
        "sec-light": "#EEF9F5",

        //! Grayscale Colors
        black: "#000000",
        title: "#002042",
        subtitle: "#55607A",
        hint: "#8791A8", // hint, light icons,text
        inactive: "#C0C7D6", //inactive icons
        constrained: "#E8EBF2",
        "borders-lines": "#E8EBF2", // borders, lines
        "light-1": "#F9FAFC", // BG1
        "light-2": "#F2F3F7", // BG2, light borders
        "light-3": "#F3F7FF", // BG2, light borders

        //! Semantic & illustration colors
        "neutral-1": "#FFCC73",
        Warning: "#F59556",
        error: "#EC5151",
        "neutral-2": "#D65036",
        tips: "#446CCE", // info, tips
        success: "#49C596",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(313.9deg, #0D53FC -2.74%, #55C397 140.56%)",
      },
      fontSize: {
        "clamp-title": "clamp(18px, 2.5vw, 22px)",
        "clamp-paragraph": "clamp(14px, 2.5vw, 16px)",
        "clamp-container": "clamp(500px, 50vw, 1186px)",
        // clamp: "font-size: clamp(0.625rem, 0.3501rem + 1.0676vw, 1.375rem);",
      },
      boxShadow: {
        "custom-shadow": "0px 5px 15px 0px #7C82B90D",
      },
    },
  },
  plugins: [],
};
