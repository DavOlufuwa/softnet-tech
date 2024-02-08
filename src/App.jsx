import { SnackbarProvider } from "notistack";
import HomeScreen from "./pages/HomeScreen";

function App() {
  return (
    <>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <HomeScreen />
      </SnackbarProvider>
    </>
  );
}

export default App;
