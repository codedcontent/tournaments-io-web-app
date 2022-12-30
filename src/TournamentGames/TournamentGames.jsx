import React, { useState } from "react";
import flapCover from "../assets/flappybird.png";
import FlappyBird from "./FlappyBird/FlappyBird";

const gameData = {
  gameTitle: "Flappy Bird",
  gameDescription: "Get the little Birdy to his mama.",
  gameRules: ["Don't cheat"],
  tournamentRules: ["You win if you get the highest score."],
  gameCover: flapCover,
};

const TournamentGames = () => {
  const [gameReadyToPlay, setGameReadyToPlay] = useState(false);

  const handlePlayGame = () => {
    setGameReadyToPlay(true);
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row-reverse lg:h-[600px]">
      {/* Game window */}
      <div className="w-11/12 lg:w-full lg:flex-[70%] m-auto h-max border-[1px] border-secondary rounded-md relative p-2">
        {!gameReadyToPlay ? (
          <>
            <img
              src={gameData.gameCover}
              alt=""
              className="w-full object-cover rounded-md"
            />

            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-10 w-10 rounded-full flex items-center justify-center p-4 hover:scale-125"
              onClick={handlePlayGame}
            >
              <p className="font-bold text-red-500 text-center text-xs">Play</p>
            </div>
          </>
        ) : (
          <FlappyBird />
        )}
      </div>

      {/* Game Info */}
      <div className="space-y-4 lg:w-full lg:flex-[30%] lg:flex lg:pl-6 lg:justify-center flex-col">
        {/* Game Title && Description */}
        <div>
          <p className="font-header text-secondary font-black text-2xl capitalize">
            {gameData.gameTitle}
          </p>

          <p className="font-title font-extralight ">
            {gameData.gameDescription}
          </p>
        </div>

        {/* Game Rules */}
        <div>
          <p className="font-header text-secondary font-black text-2xl">
            Game Rules
          </p>

          <ul className="list-disc list-inside">
            {gameData.gameRules.map((rule, ruleIndex) => (
              <li className="font-title font-extralight" key={ruleIndex}>
                {rule}
              </li>
            ))}
          </ul>
        </div>

        {/* Tournament Rules */}
        <div>
          <p className="font-header text-secondary font-black text-2xl">
            Tournament Rules
          </p>

          <ul className="list-disc list-inside">
            {gameData.gameRules.map((rule, ruleIndex) => (
              <li className="font-title font-extralight" key={ruleIndex}>
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TournamentGames;
