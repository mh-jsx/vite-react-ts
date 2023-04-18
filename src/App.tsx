import ThemeContextProvider from "context/theme-context";

import Router from "routes/router";

function App() {
  return (
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  );
}

export default App;
