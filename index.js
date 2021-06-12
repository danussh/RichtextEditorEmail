const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.listen(3001, () => console.log(`server Statered`));
//Api which displays all users
app.get('/users', async (req, res) => {
    res.send("Server satrted");
})

//send mail

app.post('/sendMail', async (req, res) => {
    if(req.body.modal){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: '***********',
              pass: '***'
            }
          });
          
          var mailOptions = {
            from: 'Samplemail.com',
            to: req.body.toemail,
            subject: 'Message From NodeMailer',
            html:req.body.modal
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              res.send({message:"Message Sent Sucessfully"})
            }
          });      
    }else{
        res.send({message:"Enter the Message To be Sent"})
    }
})
