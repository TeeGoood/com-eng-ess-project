import {
  getGameObject,
  saveGame,
} from "../logic/utilities.js";

export const drawCard = async (req, res) => {
  // task return top card info
  // query: {player_id}
  // return {card: card.getShowStates()}
  const isDraw = req.query.isDraw == "true";
  const player_id = req.query.player_id;


  try {
    const gameObject = await getGameObject();
    //console.log(isDraw);
    //wtf!!!!!
    if (!isDraw) {
      gameObject.playerDrawCard(player_id, false, false);
      await saveGame(gameObject);
      res.json(gameObject.getShowStates());
    } else {
      const card = gameObject.getTopCard();
      res.json({ card: card.getStates() });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "cannot draw card" });
  }
};

export const submitCard = async (req, res) => {
  // query: player_id, isUse
  // task: submit card
  // res: { gameData }

  const player_id = req.query.player_id;
  const isUse = req.query.isUse == "true";

  try {
    const gameObject = await getGameObject();
    gameObject.playerDrawCard(player_id, true, isUse);
    await saveGame(gameObject);
    res.json(gameObject.getShowStates());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "cannot draw card" });
  }
};
