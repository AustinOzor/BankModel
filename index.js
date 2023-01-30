//import express and body-parser
const express = require('express')
const bodyParser = require('body-parser')


//create express server
const server = express('server')

//middleware
server.use(bodyParser.json());

//database
const banksDb = [

];

//bank model
class BankModel {
    constructor({ name, branch, location, phone, address, accountNumber }){
        this.name = name;
        this.branch = branch;
        this.location = location;
        this.phone = phone;
        this.address = address;
        this.accountNumber = accountNumber;
        
    }
    save(){
        banksDb.push(this);
        return this;
    }
    static all(){ 
        return banksDb;
    }
}
//controllers list
const listBanksController = (req, res) => {
    //list banks
    const banks = BankModel.all();
    res.json({ data: banks });
}

const createBankController = (req, res) => {
    const { name, branch, location, phone, address, accountNumber } = req.body;
    const bank = new BankModel({ name, branch, location, phone, address, accountNumber });
    bank.save();
    res.json({ message: "create successful", data: bank})
}

const updateBankController = (req, res) => {
    
}
const deleteBankController = (req, res) => {
    
}
//routes
 //view account -get
server.get('/bank', listBanksController);
 //create account - post
server.post('/bank', createBankController);
 //update account - put/patch
// server.put('/bank', updateBankController);
//  //delete account - delete
// server.delete('/bank', deleteBankController)
// //request handlers/controllers


//start server
server.listen(3004, ()=> console.log('Server is ready'))