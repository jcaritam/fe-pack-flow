import { AppRouter } from "./router/router";
import { RootProvider } from "./shared/providers/root";

function App() {
  return (
    <RootProvider>
      <AppRouter />
    </RootProvider>
  );
}

export default App;
