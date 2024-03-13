import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedPages from "./pages/AnimatedPages";
import Sidebar from "./components/sidebar/Sidebar";
import CircleLoader from "./components/loader/CircleLoader";

function App() {
  return (
    <div className="py-24 px-12 lg:px-48 bg-gray-900 min-h-[100dvh] relative overflow-y-hidden">
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Router>
          <CircleLoader />
          <Sidebar />
          <AnimatedPages />
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
