const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const PORT = require( './config' );
let app = express();

app.use( bodyParser.urlencoded( { extended: true } ));

app.get('/', ( req, res ) => {

    res.send( 'tu mama la loca' );
})

app.listen( PORT, () => {
    console.log( `Listening in port ${PORT}` );
});