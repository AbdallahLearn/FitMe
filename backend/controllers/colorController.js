import OpenAI from 'openai';

export const suggestColors = async (req, res) => {
    const skinTone = '#C88F71'; // Fixed skin tone color for the prompt
    const prompt = `List 15 colors suitable for skin tone color ${skinTone} and let the colors such red,green and blue avoid skin color in JSON format. Example: { "Color 1": "#FFDAB9", "Color 2": "#6D351A", ... }`;

    try {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            temperature: 1,
        });

        console.log('OpenAI API response:', completion);
        const suggestions = completion.choices[0].message.content;

        res.json({ suggestions });
    } catch (error) {
        console.error('Error communicating with OpenAI API:', error);
        res.status(500).send('Error communicating with OpenAI API: ' + error.message);
    }
};
