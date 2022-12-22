import React, { useState } from "react";
import allTournamentGames from "../constants/allTournamentGames";
import CancelIcon from "@mui/icons-material/Cancel";
import CustomButton from "../components/CustomButton";
import Modal from "@mui/joy/Modal";
import { LinearProgress, ModalClose } from "@mui/joy";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useSnackbar } from "notistack";

const Tournament = ({ setCreatingTournament }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [selectedGame, setSelectedGame] = useState(null);

  const [email, setEmail] = useState("");

  const [open, setOpen] = useState(false);

  const [addingToWaitList, setAddingToWaitList] = useState(false);

  const joinWaitList = async () => {
    if (!email) return;

    setAddingToWaitList(true);

    try {
      // Add a new document with a generated id.
      await addDoc(collection(db, "wait-list"), {
        email,
      });

      enqueueSnackbar("You've been added to the list", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("An error occurred", { variant: "error" });
      console.log(error);
    } finally {
      setAddingToWaitList(false);
      setEmail("");
      setCreatingTournament(setCreatingTournament);
    }
  };

  const TournamentGamesSelect = () => {
    const [searchedTournamentGames, setSearchedTournamentGames] =
      useState(allTournamentGames);

    const [searchText, setSearchText] = useState("");

    const handleSearchChange = (value) => {
      setSearchText(value);

      // Filter and update the searched tournament games
      const searchedGames = allTournamentGames.filter((game) =>
        game.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );

      setSearchedTournamentGames(searchedGames);
    };

    return (
      <div className="pl-4 mt-1">
        {selectedGame && !searchText ? (
          <div className="flex gap-4 cursor pointer items-center">
            <div className="flex  w-full gap-4 bg-gray-600 items-center p-1 mx-2 mt-2 rounded-md">
              <img
                src={selectedGame.src}
                alt={selectedGame.name}
                className="h-14 w-14 object-cover rounded-md"
              />

              <p className="capitalize font-bold text-gray-200">
                {selectedGame.name}
              </p>
            </div>

            <CancelIcon
              className="text-red-500 cursor-pointer"
              fontSize="large"
              onClick={() => {
                setSelectedGame(null);
              }}
            />
          </div>
        ) : (
          <>
            <input
              value={searchText}
              type="text"
              className="w-full bg-gray-600 p-3 rounded-md"
              placeholder="Search a tournament game"
              onChange={(e) => {
                handleSearchChange(e.target.value);
              }}
            />

            <div className="mt-2">
              {searchedTournamentGames.length === 0 ? (
                <p className="text-sm font-bold">
                  Could not find the game you searched, try another.
                </p>
              ) : (
                <div className="space-y-2 max-h-64 overflow-y-scroll border-gray-100 border-2 rounded-md p-1">
                  {searchedTournamentGames.map((tournamentGame, index) => (
                    <div
                      className="flex gap-4 bg-gray-600 items-center p-1 cursor-pointer"
                      key={index}
                      onClick={() => {
                        setSelectedGame(tournamentGame);
                      }}
                    >
                      <img
                        src={tournamentGame.src}
                        alt={tournamentGame.name}
                        className="h-14 w-14 object-cover rounded-md"
                      />

                      <p className="capitalize font-bold text-gray-200">
                        {tournamentGame.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-5xl m-auto h-screen w-screen">
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className="border-none outline-none">
          <ModalClose
            variant="outlined"
            sx={{
              top: "5%",
              right: "5%",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />

          <p className="text-3xl font-black">
            Thanks for showing interest in{" "}
            <span className="underline text-secondary">Tournaments.IO</span>
          </p>

          <p className="text-lg text-gray-800 font-medium mt-2 max-w-lg mx-auto text-center">
            We are currently working on new features and not open for public use
            yet. Please join the waitlist so we can notify you when it's ready.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              joinWaitList();
            }}
            className="mt-6 max-w-lg m-auto space-y-2"
          >
            <p className="text-xl font-black">Join the wait-list</p>

            <input
              type="text"
              value={email}
              className="w-full bg-transparent p-2 py-4 rounded-md border-gray-800 placeholder-gray-800 border-2 outline-none"
              placeholder="Enter your email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            {addingToWaitList ? (
              <LinearProgress
                determinate={false}
                size="md"
                value={25}
                variant="soft"
                color="primary"
              />
            ) : (
              <CustomButton
                title={"Join wait list"}
                handleClick={joinWaitList}
              />
            )}
          </form>
        </div>
      </Modal>

      <>
        {/* Navigation */}
        <nav className="flex pt-5 justify-between items-center">
          <span
            className="font-black text-3xl cursor-pointer"
            onClick={() => {
              setCreatingTournament(false);
            }}
          >
            T.IO
          </span>

          <CustomButton
            title="Home"
            handleClick={() => {
              setCreatingTournament(false);
            }}
          />
        </nav>

        {/* Header section */}
        <section className="mt-20">
          {/* Header text */}
          <p className="font-black text-4xl flex place-content-center gap-3 uppercase">
            create a tournament
          </p>

          {/* Sub-header text */}
          <p className="text-gray-500 flex place-content-center mt-1 text-2xl w-[80%] m-auto text-center font-medium">
            Create tournaments and invite your friends to participate in it
          </p>
        </section>

        {/* Creating tournament section */}
        <section className="flex mt-6">
          {/* tournaments.io modes description */}
          <div className="space-y-3 max-w-sm pr-3 text-lg">
            <p className="font-bold">
              Tournaments.io has 2 types of tournaments. Friendly and Stakes
              tournament.
            </p>

            <p className="text-gray-500">
              In a{" "}
              <span className="text-secondary underline">
                Stakes tournament
              </span>
              , you stake a reward and invite friends to stake rewards as well.
              Each players battles to be the victor, the winner claims all
              stacked rewards at the end of the tournament.
            </p>

            <p className="text-gray-500">
              In a{" "}
              <span className="text-secondary underline">
                Friendly tournament
              </span>
              , you can only invite friends to play a tournament, no prizes to
              be won at the end
            </p>
          </div>

          {/* Create a tournament */}
          <div className="flex-1 max-w-lg mx-auto space-y-4">
            {/* Select tournament type */}
            <div>
              <p className="text-xl font-semibold capitalize text-center">
                Create tournament
              </p>

              <div className="">
                <p className="font-medium">Select tournament type</p>

                <div className="pl-4">
                  <div className="block">
                    <input
                      type="radio"
                      name="tournamentType"
                      id="Friendly tournament"
                    />
                    <label
                      htmlFor="Friendly tournament"
                      className="text-gray-500"
                    >
                      Friendly tournament
                    </label>
                  </div>

                  <div className="block">
                    <input
                      type="radio"
                      name="tournamentType"
                      id="Stakes tournament"
                    />
                    <label
                      htmlFor="Stakes tournament"
                      className="text-gray-500"
                    >
                      Stakes tournament
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Select tournament game */}
            <div className="">
              <p className="font-medium">Select a tournament game</p>

              <TournamentGamesSelect />
            </div>

            {selectedGame && (
              <div className="pt-4">
                <CustomButton
                  title={"Create Tournament"}
                  handleClick={() => {
                    setOpen(true);
                  }}
                />
              </div>
            )}
          </div>
        </section>
      </>
    </div>
  );
};

export default Tournament;
