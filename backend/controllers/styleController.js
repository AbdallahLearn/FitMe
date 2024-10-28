import DeepAI from 'openai';

export const provideStyleAdvice = async (req, res) => {
    const { weight, height ,gender} = req.body;
console.log(`your weight is // ${weight}`);
console.log(`your height is // ${height}`);
console.log(`your gender is // ${gender}`);




    const prompt = `Provide fashion advice for a person with the following characteristics: 
    - Weight: ${weight} kg
    - Height: ${height} cm 
    List 3 brief tips specific to ${gender} with a weight of ${weight} and a height of ${height} and suggest appropriate clothing styles and colors to suit their body shape. All in text format, do not use markdown.`
    try {
        const openai = new DeepAI({ apiKey: process.env.OPENAI_API_KEY });

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });

        console.log('DeepAI API response:', completion);
        
        const advice = completion.choices[0].message.content;

        res.json({ advice });
    } 
    catch (error) {
        console.error('Error communicating with DeepAI API:', error);
        res.status(500).send('Error communicating with DeepAI API: ' + error.message);
    }
}