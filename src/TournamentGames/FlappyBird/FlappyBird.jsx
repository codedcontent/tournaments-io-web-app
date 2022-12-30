import React, { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const FlappyBird = () => {
  const {
    unityProvider,
    loadingProgression,
    isLoaded,
    sendMessage,
    addEventListener,
    removeEventListener,
  } = useUnityContext({
    loaderUrl: "/FlappyBird/FlappyBirdE/Build/FlappyBirdE.loader.js",
    dataUrl: "/FlappyBird/FlappyBirdE/Build/FlappyBirdE.data",
    frameworkUrl: "/FlappyBird/FlappyBirdE/Build/FlappyBirdE.framework.js",
    codeUrl: "/FlappyBird/FlappyBirdE/Build/FlappyBirdE.wasm",
  });

  const [isGameOver, setIsGameOver] = useState(false);
  const [userName, setUserName] = useState();
  const [score, setScore] = useState();

  const handleGameOver = useCallback((userName, score) => {
    console.log({ userName, score });
    setIsGameOver(true);
    setUserName(userName);
    setScore(score);
  }, []);

  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    };
  }, [addEventListener, removeEventListener, handleGameOver]);

  function handleClickSpawnEnemies() {
    sendMessage("GameController", "SpawnEnemies", 100);
  }

  return (
    <div>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        className="w-full h-96 lg:h-[500px] rounded-md"
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      />
    </div>
  );
};

export default FlappyBird;
