import DeepAI from 'openai';

// الدالة لتوفير نصائح الموضة
export const provideStyleAdvice = async (req, res) => {
    const { weight, height, veinColor } = req.body;

    const prompt = `Provide fashion advice for a person with the following characteristics: 
    - Weight: ${weight} kg
    - Height: ${height} cm
    - Vein Color: ${veinColor} 
    Based on a person with weight ${weight}, height ${height}, and vein color ${veinColor}, suggest appropriate dress styles that would be flattering. Provide specific recommendations for dress cuts, lengths All in text format, do not use markdown.` }

    try {
        const openai = new DeepAI({ apiKey: process.env.OPENAI_API_KEY });

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });

        // طباعة استجابة الـ API
        console.log('DeepAI API response:', completion);
        
        // استخراج النصائح من الاستجابة
        const advice = completion.choices[0].message.content;

        // إعادة النصائح في استجابة JSON
        res.json({ advice });
    } catch (error) {
        console.error('Error communicating with DeepAI API:', error);
        res.status(500).send('Error communicating with DeepAI API: ' + error.message);
    }
};