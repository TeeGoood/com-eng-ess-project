import { checkWinner } from "./utilities.js";

export const gameStatesEnum = [
<<<<<<< HEAD
  "waiting_player",
=======
  "waiting",
>>>>>>> main
  "break",
  "card_select",
  "choice_select",
  "game_end",
];
export const choicesEnum = ["rock", "paper", "scissors"];
export const resultsEnum = ["player1", "player2", "draw"];
<<<<<<< HEAD

export const cardsEnum = {
  Paper_Loss: {
    description: "สามารถใช้เพื่อบังคับเปลี่ยนเป้าที่ฝั่งตรงข้ามออกเป็น'กระดาษ'",
=======
export const cardsEnum = {
  Paper_Loss: {
    description: "สามารถใช้เพื่อบังคับเปลี่ยนเป้าที่ฝั่งตรงข้ามออกเป็น'กระดาษ'",
    isForce: false,
>>>>>>> main
    preSkill: (game, player) => {
      const number = player.getNumber() == 1 ? 2 : 1;
      const opponent = game.getPlayerByNumber(number);
      opponent.setAvailableChoices(
        choicesEnum.filter((choice) => choice == "paper")
      );
    },
    postSkill: (game, player) => {
      checkWinner(game);
    },
  },

  Rock_Out: {
    description: "สามารถใช้เพื่อบังคับเปลี่ยนเป้าที่ฝั่งตรงข้ามออกเป็น'ค้อน'",
<<<<<<< HEAD
=======
    isForce: false,
>>>>>>> main
    preSkill: (game, player) => {
      const number = player.getNumber() == 1 ? 2 : 1;
      const opponent = game.getPlayerByNumber(number);
      opponent.setAvailableChoices(
        choicesEnum.filter((choice) => choice == "rock")
      );
    },
    postSkill: (game, player) => {
      checkWinner(game);
    },
  },

  Hopecutting_Scissors: {
    description: "สามารถใช้เพื่อบังคับเปลี่ยนเป้าที่ฝั่งตรงข้ามออกเป็น'กรรไกร'",
<<<<<<< HEAD
=======
    isForce: false,
>>>>>>> main
    preSkill: (game, player) => {
      const number = player.getNumber() == 1 ? 2 : 1;
      const opponent = game.getPlayerByNumber(number);
      opponent.setAvailableChoices(
        choicesEnum.filter((choice) => choice == "scissors")
      );
    },
    postSkill: (game, player) => {
      checkWinner(game);
    },
  },

  OneMoreTime: {
    description: "สามารถใช้เพื่อให้ฝั่งตรงข้ามไม่ได้แต้ม หากเขาเป่าชนะในตานี้",
<<<<<<< HEAD
=======
    isForce: false,
>>>>>>> main
    preSkill: (game, player) => {},
    postSkill: (game, player) => {
      const number = player.getNumber() == 1 ? 2 : 1;
      const opponent = game.getPlayerByNumber(number);
      const oppo_ch = opponent.getChoice();
      const player_ch = player.getChoice();
      if (
        (oppo_ch === "rock" && player_ch === "scissors") ||
        (oppo_ch === "paper" && player_ch === "rock") ||
        (oppo_ch === "scissors" && player_ch === "paper")
      ) {
        // set ให้ฝั่งตรงข้ามออกช้อยเดียวกันเพื่อให้ฝั่งตรงข้ามไม่ได้แต้มตอนคิดคะแนน
        opponent.setChoice(player_ch);
      }
      checkWinner(game);
    },
  },

  Makeit_Or_Breakit: {
    description: "ผู้ชนะในตานี้จะได้รับ 2 แต้ม",
<<<<<<< HEAD
=======
    isForce: false,
>>>>>>> main
    preSkill: (game, player) => {},
    postSkill: (game, player) => {
      const number = player.getNumber() == 1 ? 2 : 1;
      const opponent = game.getPlayerByNumber(number);
      const prescore_oppo = opponent.getScore();
      const prescore_player = player.getScore();
      checkWinner(game);
      if (player.getScore() > prescore_player) {
        player.setScore(player.getScore() + 1);
      } else if (opponent.getScore() > prescore_oppo) {
        opponent.setScore(opponent.getScore() + 1);
      }
    },
  },

  Rock_You: {
    description:
      "สามารถใช้เพื่อให้ฝั่งตรงข้ามไม่ได้คะแนน หากเขาเป่าชนะด้วย'ค้อน'",
<<<<<<< HEAD
=======
    isForce: false,
>>>>>>> main
    preSkill: (game, player) => {},
    postSkill: (game, player) => {
      const number = player.getNumber() == 1 ? 2 : 1;
      const opponent = game.getPlayerByNumber(number);
      const prescore_oppo = opponent.getScore();
      checkWinner(game);
      if (
        opponent.getScore() > prescore_oppo &&
        opponent.getChoice() == "rock"
      ) {
        opponent.setScore(prescore_oppo);
      }
    },
  },

  Paper_Cut: {
    description:
      "สามารถใช้เพื่อให้ฝั่งตรงข้ามไม่ได้คะแนน หากเขาเป่าชนะด้วย'กระดาษ'",
<<<<<<< HEAD
=======
    isForce: false,
>>>>>>> main
    preSkill: (game, player) => {},
    postSkill: (game, player) => {
      const number = player.getNumber() == 1 ? 2 : 1;
      const opponent = game.getPlayerByNumber(number);
      const prescore_oppo = opponent.getScore();
      checkWinner(game);
      if (
        opponent.getScore() > prescore_oppo &&
        opponent.getChoice() == "paper"
      ) {
        opponent.setScore(prescore_oppo);
      }
    },
  },

  Snipping_Victory: {
    description:
      "สามารถใช้เพื่อให้ฝั่งตรงข้ามไม่ได้คะแนน หากเขาเป่าชนะด้วย'กรรไกร'",
<<<<<<< HEAD
=======
    isForce: false,
>>>>>>> main
    preSkill: (game, player) => {},
    postSkill: (game, player) => {
      const number = player.getNumber() == 1 ? 2 : 1;
      const opponent = game.getPlayerByNumber(number);
      const prescore_oppo = opponent.getScore();
      checkWinner(game);
      if (
        opponent.getScore() > prescore_oppo &&
        opponent.getChoice() == "scissors"
      ) {
        opponent.setScore(prescore_oppo);
      }
    },
  },

  Late_Game: {
    description: "ลดแต้มผู้เล่นทั้ง 2 ฝั่ง ฝั่งละ 1 แต้ม",
<<<<<<< HEAD
=======
    isForce: true,
>>>>>>> main
    preSkill: (game, player) => {},
    postSkill: (game, player) => {
      const player1 = game.getPlayerByNumber(1);
      const player2 = game.getPlayerByNumber(2);
      checkWinner(game);
      player1.setScore(player1.getScore() - 1);
      player2.setScore(player2.getScore() - 1);
    },
  },

  Escalating_The_Loss: {
    description: "ผู้เล่นที่แพ้จะโดนหัก 1 แต้ม",
<<<<<<< HEAD
=======
    isForce: false,
>>>>>>> main
    preSkill: (game, player) => {},
    postSkill: (game, player) => {
      const number = player.getNumber() == 1 ? 2 : 1;
      const opponent = game.getPlayerByNumber(number);
      const prescore_oppo = opponent.getScore();
      const prescore_player = player.getScore();
      checkWinner(game);
      if (opponent.getScore() > prescore_oppo) {
        player.setScore(player.getScore() - 1);
      } else if (player.getScore() > prescore_player) {
        opponent.setScore(opponent.getScore() - 1);
      }
    },
  },

  Even_Odds: {
    description: "สามารถใช้เพื่อลดตัวเลือกของฝั่งตรงข้ามจาก 3 เป้าเป็น 2 เป้า",
<<<<<<< HEAD
=======
    isForce: false,
>>>>>>> main
    preSkill: (game, player) => {
      const ch = ["rock", "scissors", "paper"];
      const randomInt = Math.floor(Math.random() * 3); // 0 1 2
      const number = player.getNumber() == 1 ? 2 : 1;
      const opponent = game.getPlayerByNumber(number);
      opponent.setAvailableChoices(
        choicesEnum.filter((choice) => choice != ch[randomInt])
      );
    },
    postSkill: (game, player) => {
      checkWinner(game);
    },
  },

  Ground_Zero: {
    description: "รีเซตคะแนนทั้ง 2 ฝั่งเป็น 0 แต้ม",
<<<<<<< HEAD
=======
    isForce: true,
>>>>>>> main
    preSkill: (game, player) => {
      const player1 = game.getPlayerByNumber(1);
      const player2 = game.getPlayerByNumber(2);
      player1.setScore(0);
      player2.setScore(0);
    },
    postSkill: (game, player) => {
      checkWinner(game);
    },
  },

  Score_Swap: {
    description: "สลับแต้มของผู้เล่น",
<<<<<<< HEAD
=======
    isForce: true,
>>>>>>> main
    preSkill: (game, player) => {
      const player1 = game.getPlayerByNumber(1);
      const player2 = game.getPlayerByNumber(2);
      const tmp = player1.getScore();
      player1.setScore(player2.getScore());
      player2.setScore(tmp);
    },
    postSkill: (game, player) => {
      checkWinner(game);
    },
  },
};
