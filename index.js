const express = require('express');
app = express();

app.use(express.static("public"));

app.get("/delay/:seconds", (req,res) => {
    let nseconds = parseInt(req.params.seconds);
    const milliseconds = nseconds ? nseconds * 1000 : 0;

    const d = new Date();
    const mins = d.getMinutes();
    const secs = d.getSeconds();

    console.log('< Request '+ milliseconds + ' received @ ' +  + mins+':'+secs);
    
    setTimeout(() => { 
        const d = new Date();
        const mins = d.getMinutes();
        const secs = d.getSeconds();
        console.log('> Response ' + milliseconds + ' sent @ ' + mins + ':' + secs);
        res.send('Delayed response for ' + milliseconds + ' milliseconds');
    }, milliseconds);
});


app.listen(3000);