var nodemailer = require('nodemailer');
let path = (__dirname + '/image.jpg' )

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shabnambegum1511@gmail.com',
    pass: 'orlb olcz xjdc gjkc'
  }
});

var mailOptions = {
  from: 'shabnambegum1511@gmail.com',
  to: 'shabnam.doodleblue@gamil.com',
  subject: 'Sending Email using Node.js',
  text: 'Hii this is shabnam!',
  attachments :[{
    filename:'image.jpg',
    path :path
  }]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent:sucessfully');
  }
});


//https://github.com/shabnambegum123/javascript.git














