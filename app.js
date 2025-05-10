const express = require('express');
const userRouter = require('./routes/user.routes');
const userModel = require('./model/user');
const connection = require('./config/db');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use('/user', userRouter);

app.post('/register', async(req, res) => {
  res.render('Form Submited');
  console.log(req.body);
  const {email, username, password, number} = req.body
  await userModel.create({
    email: email,
    username: username,
    password: password,
    number: number,
  }).then((user) => {
    console.log("User Created");
  }).catch((err) => {
    console.log(err);
  })
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Your server is running on port http://localhost:${PORT}`);  
});