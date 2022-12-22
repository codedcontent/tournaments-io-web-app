import React from "react";
import CustomButton from "../components/CustomButton";
import allTournamentGames from "../constants/allTournamentGames";

const LandingPage = ({ setCreatingTournament }) => {
  const join = () => {
    setCreatingTournament(true);
  };

  return (
    <div className="max-w-5xl m-auto h-screen w-screen p-6 md:p-0">
      {/* Navigation */}
      <nav className="flex md:pt-5  justify-between items-center">
        <span className="font-black md:text-3xl text-xl">T.IO</span>

        <CustomButton title="Join Now" handleClick={join} />
      </nav>

      {/* Header section */}
      <section className="md:mt-20 mt-10">
        {/* Header text */}
        <div className="font-black md:text-4xl text-xl flex place-content-center gap-3 uppercase text-center">
          <span className="py-4 md:py-1 p-1 bg-secondary rotate-6 rounded-sm w-max block cursor-pointer hover:scale-105 text-center">
            Play
          </span>
          <span className="">tournaments with friends</span>
        </div>

        {/* Sub-header text */}
        <p className="text-gray-500 flex place-content-center mt-4 md:text-2xl w-[80%] m-auto text-center font-medium">
          Stake prizes, battle to the death and collect the spoils of war, or
          just have a friendly battle
        </p>
      </section>

      {/* Game variety section */}
      <section className="md:mt-20 mt-10 flex items-center flex-col-reverse md:flex-row">
        {/* Variety description */}
        <div className="md:space-y-4 space-y-2 flex-1">
          <p className="font-bold md:text-xl text-lg">
            Browse our variety of tournament games
          </p>

          <p className="font-light md:text-base text-sm max-w-lg text-gray-500">
            We have a huge library of games that you can battle it out with your
            friends, play tournaments and be its victor of. All you can think
            of, we have it ready to go at{" "}
            <span className="text-secondary underline cursor-pointer">
              tournaments.io
            </span>
          </p>

          <div className="w-max">
            <CustomButton title="Join Now" handleClick={join} />
          </div>
        </div>

        {/* Various games */}
        <div className="grid md:grid-cols-3 grid-cols-4 md:gap-5 gap-3 place-items-center mb-5 md:mb-0">
          {allTournamentGames.map((option, index) => (
            <img
              key={index}
              className="md:h-20 md:w-20 h-12 w-12 rounded-md object-cover hover:scale-125 hover:rotate-3"
              alt={option.name}
              src={option.src}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
