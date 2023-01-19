import express from "express";
import exempleRouter from './routers/exemple.router';
var app = express();
app.use(express.json());
app.use(exempleRouter);
app.listen(4000, function () {
    console.log('server listening on port 4000');
});
