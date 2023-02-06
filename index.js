//import express and body-parser
const express = require('express')
const bodyParser = require('body-parser')


//create express server
const server = express('server')

//middleware
server.use(bodyParser.json());

//database
let banksDb = [

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
    static update(updateInfo ={}) {
        //find the bank and update it
     banksDb =   banksDb.map(bank =>{
            if(bank.name === updateInfo.name) {
                return {...bank, ...updateInfo}
            }
            return bank;
        })
    }
    static delete({ name }) {
        let deletedBank = null;

        banksDb = banksDb.filter(bank => {
            if (bank.name !== name) {
                deletedBank = bank;
                return true;
            }
            return false;
        });
        return deletedBank;
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
    const { name, branch, location, phone, address, accountNumber } = req.body;
    const updatedBank = BankModel.update({ name, branch, location, phone, address, accountNumber })
    res.json({message:"update successful", data:updatedBank})
}

const deleteBankController = (req, res) => {
    const { name } = req.body;
    const deletedBank = BankModel.delete({name});
    res.json({ message: "bank deleted", data: deletedBank });
}
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