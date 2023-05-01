import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./global/styles/globalStyles.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./global/styles/theme.tsx";
import { Home } from "./pages/Home/index.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </Provider>
);
