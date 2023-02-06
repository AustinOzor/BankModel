let banksDb = require('./db');
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

module.exports = BankModel 