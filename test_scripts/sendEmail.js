var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'arbuzovfp@gmail.com',
        pass: 'yourpassword'
    }
});

var mailOptions = {
    from: 'arbuzovfp@gmail.com',
    to: 'arbuzovfp@yandex.ru',
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