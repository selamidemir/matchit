import { createContext, useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const getMaxScore = () => {
    const savedMaxScore = localStorage.getItem("maxScore");
    return savedMaxScore ? savedMaxScore : 0;
  };

  const [items, setItems] = useState();
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2);
  const [maxScore, setMaxScore] = useState(getMaxScore());
  const [clickedItemOne, setClickedItemOne] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const point = 50;
  const penalty = 10;
  const waitingTime = 950;

  const initGame = () => {
    const itemNames = [
      "angular2",
      "vue",
      "react",
      "grunt",
      "phantomjs",
      "ember",
      "angular2",
      "vue",
      "react",
      "grunt",
      "phantomjs",
      "ember",
      /*"babel",
      "ionic",
      "gulp",
      "meteor",
      "yeoman",
      "yarn",
      "nodejs",
      "bower",
      "browserify",*/
    ];
    setMoves(0);
    setScore(0);
    setIsGameOver(false);
    const allItems = [];
    for (let i = 0; i < 12; i++) {
      let name = itemNames.splice(
        Math.floor(Math.random() * itemNames.length),
        1
      );
      let newItem = {
        id: nanoid(),
        name: name[0],
        img: `${name[0]}.png`,
        isFinded: false,
        show: false,
      };
      allItems.push(newItem);
    }

    setItems(allItems);
  };

  const gameOver = () => {
    if(score > maxScore ) {
        localStorage.setItem("maxScore", score);
        setMaxScore(score);
    }
    setIsGameOver(true);
  }

  const itemClicked = (item) => {
    if (clickedItemOne && item.id === clickedItemOne.id) return;
    setMoves(moves + 1);

    if (clickedItemOne === null) setClickedItemOne(item);
    else if (clickedItemOne.name === item.name) {
      clickedItemOne.isFinded = true;
      item.isFinded = true;

      setScore(score + point);
      setClickedItemOne(null);
      setVisibleItems(visibleItems + 2);
      resetSelected();
      if (visibleItems >= items.length) gameOver();
    } else if (clickedItemOne.name !== item.name) {
      setScore(score - penalty);
      setClickedItemOne(null);
      resetSelected();
    }
  };

  const resetSelected = () => {
    setClickedItemOne(null);
    items.forEach(item => item.show = false);
  };

  useEffect(() => {
    initGame();
  }, []);

  const values = {
    items,
    moves,
    score,
    initGame,
    maxScore,
    isGameOver,
    waitingTime,
    setScore,
    setMaxScore,
    itemClicked,
    resetSelected,
  };

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);
