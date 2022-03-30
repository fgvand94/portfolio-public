const form = document.querySelector('#form');
let name = document.getElementById('name-input');
let email = document.getElementById('email-input');
let message = document.getElementById('message-input');








form.addEventListener('submit', (e)=> {
  e.preventDefault();
  
  let formData = {
    name: name.value,
    email: email.value,
    message: message.value,
    allow: 'POST'
  }
  console.log(formData);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json', {
    allow: 'POST'
  });
  xhr.onload = function() {
    console.log(xhr.responseText);
    if(xhr.responseText == 'success') {
      alert('Email sent');
      name.value = '';
      email.value = '';
      message.value = '';
    } else {
      alert('ERROR');
    }
  }
 
  xhr.send(JSON.stringify(formData));
  
});





/*The way above is using ajax. It was from a video that better discribed how to actually link the
server to your html and get the html page to show up on the server you were running. I might
come back and try it with this other method. fetch and those other packeges that other video did.
it's probably a good idea to be able to do the same thing more then one way. */

/*I haven't fully figured out how to do it yet. But I'm going to make the email form on my website functionsl.
I know how to build basic api's-although I've kind of forgot but I should be able to brush
up on it quickly-*/
/* this is a basic example of sending emails using node. It is for sending your emails though
it uses expresses nodemailer module
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
idk cause i'm just looking into it but I think I could essentially do this just switch the to
and from emails and then replace the subject and text with the inputs from the email form*/

/*
const sendMail = (mail) => {
  
  fetch("/send", {
    method: "post", 
    body: mail, 

  }).then((response) => {
    return response.json();
  });
};


const form = document.getElementById("form"); 

//1.
const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  //2.
  let mail = new FormData(form);

  //3.
  sendMail(mail);
})*/