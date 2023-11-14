export const baseURL =
  "https://api-receitas-lnp4.onrender.com/api/v1/receitas/";

export const shuffleArray = (array) => {
  const shuffled = array.slice(0, 5);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
