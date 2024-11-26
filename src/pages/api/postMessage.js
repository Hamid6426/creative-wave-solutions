// pages/api/contact.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        try {
            const client = await clientPromise;
            const db = client.db('messages'); // Change to your DB name

            const newMessage = {
                name,
                email,
                subject,
                message,
                createdAt: new Date(),
            };

            await db.collection('messages').insertOne(newMessage); // Save to messages collection

            res.status(200).json({ message: 'Message sent successfully!' });
        } catch (error) {
            res.status(500).json({ message: 'Error saving message.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}