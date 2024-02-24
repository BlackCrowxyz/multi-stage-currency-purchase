/** @type {import('tailwindcss').Config} */
const spacing = {};
[...Array(51).keys()].map((i) => {
  spacing[i] = `${i * 4}px`;
});


const colors = {
  primary: "#826EF7",
  "primary-light": "#f0eefe",
  label: "#8C8F9D",
  accent: '#001F46',
  error: "#FF7171",
  "error-light": "#fff1f1",
  "label-lighter": '#f1f1f3',
  "label-dark": "#555865",
  "label-light": "#E7E8EB",
  teal: "#2B98BA",
  success: "#6FCF97",
  "success-dark": "#297c4c",
  "success-dark-2": "#14A38B",
  "success-light": "#f2fbf6",
  purple: "#6D70C6",
  pro: "#D4BD8E",
  secondary: "#FFC700",
  "text-color": "#0B0D1C",
  "body-color": "#3F4253",
  background: "#EAEEF1",
  white: "#ffffff",
  orange: "#ff9800",
};


export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      xs: "600px",
      sm: "960px",
      md: "1264px",
      xl: "1904",
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "960px",
        xl: "2400px",
      },
    },
    fontFamily: {
      vazir: ["Vazir", "sans-serif"],
    },
    spacing: {
      ...spacing,
    },
    extend: {
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
      },
      fontFamily: {
        vazir: ["Vazir,Arial,Helvetica,sans-serif!important"],
      },
      colors: {
        ...colors,
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "10px",
        xl: "20px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",

      },
    },
  },
  plugins: [],
  safelist: [
    ...Object.keys(colors).map((color) => `bg-${color}`),
    ...Object.keys(colors).map((color) => `text-${color}`),
    ...Object.keys(colors).map((color) => `border-${color}`),
    ...['sm', 'md', 'lg', 'xl', 'full'].map((size) => `rounded-${size}`),
  ],
};
