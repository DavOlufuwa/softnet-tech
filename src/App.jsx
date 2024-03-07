import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedPages from "./pages/AnimatedPages";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="py-24 px-12 lg:px-48">
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
