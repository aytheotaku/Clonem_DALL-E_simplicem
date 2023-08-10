import openai from "../config/openaiconfig";

export const generateImage = async (prompt:string) : Promise<string> =>  {
    const response = await openai.createImage({
        prompt,
        n: 1,
        size: '512x512'
    })
    if (response.data && response.data.data && response.data.data[0] && response.data.data[0].url) {
        return response.data.data[0].url;
    }
    else {
        throw new Error('Invalid response format from OpenAI');
      }

}