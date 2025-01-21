import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomAppBar from "./components/CustomAppBar";
import LandingPage from "./pages/LandingPage";
import Tournament from "./pages/Tournament";
import TournamentGames from "./TournamentGames/TournamentGames";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/tournaments",
    element: <Tournament />,
  },
  {
    path: "/tournaments/tournament-id/game/game-id",
    element: <TournamentGames />,
  },
]);

function App() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden">
      <CustomAppBar />

      <div className="px-4 max-w-5xl m-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
