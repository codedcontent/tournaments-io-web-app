import React from "react";
import CustomButton from "../components/CustomButton";
import allTournamentGames from "../constants/allTournamentGames";

const LandingPage = ({ setCreatingTournament }) => {
  const join = () => {
    setCreatingTournament(true);
  };

  return (
    <div className="max-w-4xl m-auto h-screen w-screen p-6 lg:px-10">
      {/* Navigation */}
      <nav className="flex lg:pt-5 justify-between items-center">
        <span className="font-black lg:text-3xl text-xl">T.IO</span>

        <CustomButton title="Join Now" handleClick={join} />
      </nav>

      {/* Header section */}
      <section className="lg:mt-20 mt-10">
        {/* Header text */}
        <div className="font-black lg:text-4xl text-xl flex place-content-center items-center lg:gap-3 gap-0.5 md:gap-1.5 uppercase text-center">
          <span className="py-4 lg:py-1 p-1 bg-secondary rotate-6 rounded-sm w-max block cursor-pointer hover:scale-105 text-center">
            Play
          </span>

          <span className="w-max">tournaments with friends</span>
        </div>

        {/* Sub-header text */}
        <p className="text-gray-500 flex place-content-center mt-4 lg:text-2xl w-[80%] m-auto text-center font-medium">
          Stake prizes, battle to the death and collect the spoils of war, or
          just have a friendly battle
        </p>
      </section>

      {/* Game variety section */}
      <section className="lg:mt-20 mt-10 flex items-center flex-col-reverse lg:flex-row">
        {/* Variety description */}
        <div className="lg:space-y-4 space-y-2 flex-1">
          <p className="font-bold lg:text-xl text-lg">
            Browse our variety of tournament games
          </p>

          <p className="font-light lg:text-base text-sm max-w-lg text-gray-500">
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
        <div className="grid lg:grid-cols-3 grid-cols-4 lg:gap-5 gap-3 place-items-center mb-5 lg:mb-0">
          {allTournamentGames.map((option, index) => (
            <img
              key={index}
              className="lg:h-20 lg:w-20 h-12 w-12 rounded-md object-cover hover:scale-125 hover:rotate-3"
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
