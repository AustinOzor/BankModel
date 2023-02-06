const BankModel = require('./model')
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

module.exports = {
    listBanksController,
    createBankController,
    updateBankController,
    deleteBankController,
}