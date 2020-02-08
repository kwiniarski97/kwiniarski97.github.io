import Meme from "@/models/meme";

export async function getMeme(): Promise<Meme> {
  const response = await fetch(
    "https://meme-api.herokuapp.com/gimme/ProgrammerHumor"
  );
  return response.json();
}
