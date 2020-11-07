const express = require('express');
const memberRout = require('./routes/memberRout')(express);
const app = express();
const guestRoute = require('./routes/guestRoute')(express);
app.use('/member' , memberRout);
app.use('/' , guestRoute);
app.listen(3000);