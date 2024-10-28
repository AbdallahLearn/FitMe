import OpenAI from 'openai';

export const suggestColors = async (req, res) => {
    const { veinColor, skinColor, gender } = req.body;

    console.log('Received veinColor:', veinColor);
    console.log('Received skinColor:', skinColor);
    console.log('Received gender:', gender);
    
    
    // const prompt = `List 15 unique clothing colors that are suitable for ${gender} with ${veinColor}-toned and ${skinColor}-toned skin. Make sure to include a wide variety of colors (like green, blue, purple, yellow, red, orange, etc.) and avoid suggesting different shades of the same color in JSON format. Example: { "Color 1": "#hexcode", "Color 2": "#hexcode", ... }`;
    const prompt = `Can you provide 15 unique colors suggestions that would suit a skin tone with the hex code ${skinColor} and ${veinColor} vein color for ${gender}, and please make sure to include a wide variety of colors (like green, blue, purple, yellow, red, orange, etc.)? I'm looking for colors that would be harmonious and flattering for clothing in JSON format. Example: { "Color 1": "#hexcode", "Color 2": "#hexcode", ... }`;

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
