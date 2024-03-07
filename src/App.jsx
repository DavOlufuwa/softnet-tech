import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedPages from "./pages/AnimatedPages";
import Sidebar from "./components/sidebar/Sidebar";

function App() {

  return (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Router>
        <Sidebar />
        <AnimatedPages />
      </Router>
    </SnackbarProvider>
  );
}

export default App;
