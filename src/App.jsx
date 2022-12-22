import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Tournament from "./pages/Tournament";

function App() {
  const [creatingTournament, setCreatingTournament] = useState(false);

  return (
    <div className="h-screen w-screen">
      {
        creatingTournament ? 
        <Tournament setCreatingTournament={setCreatingTournament} /> :

      <LandingPage
        setCreatingTournament={setCreatingTournament}
      />
      }
    </div>
  );
}

export default App;
