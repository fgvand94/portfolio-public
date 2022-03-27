const express = require("express");

const nodemailer = require("nodemailer");


const app = express();


// app.use(express.static('public'));
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "public/index.html")
// });




app.post('/', (req, res) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body);

  const transporter = nodemailer.createTransport ({
    service: 'gmail',
    auth: {
      user: 'portfolliotemp@gmail.com',
      pass: 'fourothreepm10!'
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: 'portfolliotemp@gmail.com',
    subject: `message from ${req.body.name}: ${req.body.email}`,
    text: req.body.message,

  }

  transporter.sendMail(mailOptions, (error, info)=> {
    if(error) {
      console.log(error);
      res.send('error');
    }else {
      console.log('email sent');
      res.send('success');
    }
  })
  console.log(mailOptions);
})

//port will be 5000 for testing
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

