import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

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
  color: var(--color-blue);
}
`;
