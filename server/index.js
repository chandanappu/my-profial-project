import express, { json } from "express";
import pg from 'pg';
import bodyParser from "body-parser";
import dotenv from 'dotenv'; 
import cors from 'cors';


const app = express();
const port = process.env.PORT || 5050;

const db = new pg.Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT, // default PostgreSQL port
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to the database');
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
 
  app.use(express.static('public'));

app.use(cors({
    origin: 'http://localhost:3000'
}));

  
app.get('/', async (req, res) => {
    res.send('hello');  

})

app.post('/contact', async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        const { name, email, message } = req.body;
        const data = await db.query('INSERT INTO client(name, email, message) VALUES ($1, $2, $3) RETURNING *', [name, email, message]);
        console.log('Query result:', data); // Debugging: Log the result
        if (data && data.rows && data.rows.length > 0) {
            res.status(201).json({ success: true, data: data.rows[0], message: 'Contact form submitted successfully!' });
        } else {
            throw new Error('No data returned from the query');
        }
    } catch (error) {
        console.error('Error inserting contact form data:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
