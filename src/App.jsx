import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedPages from "./pages/AnimatedPages";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="px-12 lg:px-48 bg-gray-950 min-h-[100dvh] relative overflow-y-scroll">
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Router>
          <Sidebar />
          <AnimatedPages />
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
