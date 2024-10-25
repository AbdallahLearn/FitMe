import OpenAI from 'openai';

export const provideStyleAdvice = async (req, res) => {
    const { weight, height, veinColor } = req.body;

    const prompt = `Provide fashion advice for a person with the following characteristics: 
    - Weight: ${weight} kg
    - Height: ${height} cm
    - Vein Color: ${veinColor} 
    The advice should include recommendations on clothing styles, colors, and patterns that would be flattering short by 3 point every point one line.`;

    try {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });

        console.log('OpenAI API response:', completion);
        const advice = completion.choices[0].message.content;

        res.json({ advice });
    } catch (error) {
        console.error('Error communicating with OpenAI API:', error);
        res.status(500).send('Error communicating with OpenAI API: ' + error.message);
    }
};
