const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const PORT = require( './config' );
const cors = require( 'cors' );
const nodemailer = require( 'nodemailer' );
let app = express();

app.use(cors({origin: true}));

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ));

app.post('/send-mail', (req, res) =>{

try{
    const { message } = req.body;
    const { subject } = req.body;
    const { email } = req.body;

    
    if(!( !!message && !!email && !!subject )){
        return res.status(400).send({message: 'Invalid request'});
    }

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'anonymous-app@outlook.com',
            pass: 'react2021app'
        }
    });
    
        const mailOption = {
            from: 'Notificación web',
            to: email,
            subject: `${subject}`,
            // text: body.message,
            html: message
        }
    
        transporter.sendMail(mailOption, (err, data)=>{
            if(err){
                return res.status(500).send({message: 'error' + err.mesage});
            }
            return res.send({message: 'Mail sended'});
        });
}catch( error ) {
    console.log( error );
    return res.send( error );
}
     
});

app.listen( PORT, () => {
    console.log( `Listening in port ${PORT}` );
});