import openai from "./openai";

const createDocumentationRequest = async (title: string, file: File): Promise<string> => {
  // Read the file contents and create the prompt.
  const fileContent = await file.text();
  const prompt = `...`; // Replace with your setup, load, and create documentation prompts using the fileContent.

  const response = await openai.post("", {
    prompt,
    max_tokens: 150,
    n: 1,
    stop: null,
    temperature: 0.8,
  });

  return response.data.choices[0].text;
};

export default createDocumentationRequest;
