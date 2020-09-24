import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Cocogoose";
  src: url("../fonts/cocogoose.eot"); /* IE9 Compat Modes */
  src: url("../fonts/cocogoose.eot?#iefix") format("embedded-opentype"),
    url("../fonts/cocogoose.otf") format("opentype"),
    url("../fonts/cocogoose.svg") format("svg"),
    url("../fonts/cocogoose.ttf") format("truetype"),
    url("../fonts/cocogoose.woff") format("woff"),
    url("../fonts/cocogoose.woff2") format("woff2"); /* Modern Browsers */
  font-weight: normal;
  font-style: normal;
}

:root {
  --color-white: #FBFCFF;
  --color-light-green: #B2EECE;
  --color-light-mint: #66EEBC;
  --color-mint: #00E38F;
  --color-dark-green: #7DA790;
  --color-light-blue: #00A5F0;
  --color-blue: #004295;
  --color-dark-blue: #004260;
  --color-gray: #2A3A54;

  --font-primary: "Cocogoose", sans-serif;
  --font-secondary: "Montserrat", sans-serif;

  --space-nano: 8px;
  --space-mini: 16px;
  --space-small: 24px;
  --space-medium: 40px;
  --space-large: 160px;
}

* {
  margin: 0;
  padding: 0;
}

body {
  width: 100vw;
  height: 100vh;
  background-color: var(--color-mint);
}

h3 {
  font-family: var(--font-secondary);
  color: var(--color-blue);
}
`;
