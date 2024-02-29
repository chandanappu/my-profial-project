const data=[{
    id:1,
    title:"C CODE SPACE",
    des:"this project is done to uplode my main projects",
    imgs:'./codespace.jpg',
    github:'https://github.com/chandanappu/my-profial-project/tree/main',
    code:'HKHKH'
},
{id:2,
    title:"C CODE SPACE",
    des:"this project is done to uplode my main projects",
    imgs:'./codespace.jpg',
    code:`import express, { json } from "express";
    import pg from 'pg';
    import bodyParser from "body-parser";
    import cors from 'cors'; //this used for linking API with REACT
    
    
    const app = express();
    const port = process.env.PORT || 5002;
    
    
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
     
      app.use(cors());
      app.use(express.json());
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(express.static('public'));
      
    
    // user  data ,enter into database
    app.post('/todo', async (req, res) => {
      try {
          const { description } = req.body;
          const data = await db.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);
          res.json(data.rows[1]); // Send the inserted data back to the client
      } catch (error) {
          console.error('Error inserting data into the database:', error);
          res.status(500).json({ error: 'Internal Server Error' }); // Send an error response to the client
      }
    });
    
    //user read data ,enter into database
    app.put('/todo', async(req, res) => {
        const data = await db.query("select description from todo");
        res.json(data.rows); 
    });
    //user deletes need to delete
    app.delete('/todo/:id', async(req, res) => {
        try{
         let {id}=req.params;
        const data = await db.query("delete from todo where id=$1",[id]);
        res.json({ message: 'Todo item deleted successfully' });
        res.json(data.rows);
        
        }
        catch(error){
            console.error('Error querying the database:', error);
            // You may choose to send an error response to the client here
        }
    });
    //update
    app.patch('/todo/:id',async(req,res) =>{
      let {id}=req.params;
      const {description}=req.body;
      const data = await db.query("update todo set description=$1 where id=$2",[description,id]);
      res.json({message: 'success'});
    });
    
    app.get('/todo',async(req,res) =>{
      const fulldata = await db.query("select * from todo");
      res.json(fulldata.rows);
    })
    
    app.listen(port, () => {
      console.log(Server is running on port ${'port'});
    });
    
    `,


},{id:1,
title:"C CODE SPACE",
des:"this project is done to uplode my main projects",
imgs:'./codespace.jpg',
github:'https://github.com/chandanappu/my-profial-project/tree/main',
code:'HKHKH'
},
]

export  default data;

