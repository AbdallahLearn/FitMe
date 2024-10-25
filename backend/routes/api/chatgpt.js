import { Router } from 'express';
import { OpenAI } from 'openai';

const chatGptStylesRouter = Router();

const openai = new OpenAI();

chatGptStylesRouter.post('/chatgpt-style-advice', async (req, res) => {
    const { weight, height, veinColor } = req.body;
    console.log(`${weight}`);
    console.log(`${height}`);
    console.log(`${veinColor}`);


    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",

            messages: [{ role: "user", content: `Based on a person with weight ${weight}, height ${height}, and vein color ${veinColor}, suggest appropriate dress styles and colors that would be flattering. Provide specific recommendations for dress cuts, lengths, and color palettes. All in text format, do not use markdown.` }],
            max_tokens: 150,
            temperature: 0.7,
        });

        const advice = response.choices[0].message.content.trim();
        console.log("Advice:", advice)
        res.json({ advice });
    } catch (error) {
        console.error('Error fetching style advice from OpenAI:', error);
        res.status(500).json({ error: 'Failed to fetch style advice. Please try again.' });
    }
});

export default chatGptStylesRouter;