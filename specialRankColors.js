export function rankColors() {
  if (msg.rank === "Owner") p.style.color = "#ebb736";
          else if (msg.rank === "PATRIOT") p.style.color = "blue";
          else if (msg.rank === "Lead Developer") p.style.color = "#4a9905";
          else if (msg.rank === "Head Moderator") p.style.color = "#8928f7";
}