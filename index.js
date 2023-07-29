import express from "express"
import bodyParser from "body-parser"
import userRoute from "./api/routes/users.js"
const app = express();
const PORT = 4000;

const users = [
  {
    name: "Johnoon",
    age: 25,
  },
  {
    name: "Alice",
    age: 30,
  } ,
  {
    name: "Mauro lucas",
    age: 18,
  },
];

  
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(users);
});

app.use("/users", userRoute);




  



app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));



