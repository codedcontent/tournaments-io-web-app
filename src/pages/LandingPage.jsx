import React from "react";
import CustomButton from "../components/CustomButton";

import allTournamentGames from "../constants/allTournamentGames";

const LandingPage = ({ creatingTournament, setCreatingTournament }) => {
  const join = () => {
    setCreatingTournament(true);
  };

  return (
    <div className="max-w-5xl m-auto h-screen w-screen">
      {/* Navigation */}
      <nav className="flex pt-5 justify-between items-center">
        <span className="font-black text-3xl">T.IO</span>

        <CustomButton title="Join Now" handleClick={join} />
      </nav>

      {/* Header section */}
      <section className="mt-20">
        {/* Header text */}
        <div className="font-black text-4xl flex place-content-center gap-3 uppercase">
          <span className="p-1 bg-secondary rotate-6 rounded-sm w-max block cursor-pointer hover:scale-105">
            Play
          </span>
          <span className="">tournaments with friends</span>
        </div>

        {/* Sub-header text */}
        <p className="text-gray-500 flex place-content-center mt-4 text-2xl w-[80%] m-auto text-center font-medium">
          Stake prizes, battle to the death and collect the spoils of war, or
          just have a friendly battle
        </p>
      </section>

      {/* Game variety section */}
      <section className="mt-20 flex items-center">
        {/* Variety description */}
        <div className="space-y-4 flex-1">
          <p className="font-bold text-xl">
            Browse our variety of tournament games
          </p>

          <p className="font-light text-base max-w-lg text-gray-500">
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
        <div className="grid grid-cols-3 gap-5 place-items-center">
          {allTournamentGames.map((option, index) => (
            <img
              key={index}
              className="h-20 w-20 rounded-md object-cover hover:scale-105 hover:rotate-3"
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
