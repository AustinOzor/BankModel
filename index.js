//import express and body-parser
const express = require('express')
const bodyParser = require('body-parser')
const banksDb = require('./db')
const {listBanksController, createBankController, deleteBankController, updateBankController} = require('./controllers')
//create express server
const server = express('server')

//middleware
server.use(bodyParser.json());





//routes
 //view account -get
server.get('/bank', listBanksController);
 //create account - post
server.post('/bank', createBankController);
 //update account - put/patch
server.put('/bank', updateBankController);
//  //delete account - delete
server.delete('/bank', deleteBankController)
// //request handlers/controllers


//start server
server.listen(3004, ()=> console.log('Server is ready'))