const Query = require('../models/Query')
const Option  = require('../models/Option')
const createoption = async(req,res)=>{
    const queryId = req.params.id;
    const newOption = new Option(req.body);
    try {
        const savedOption = await newOption.save();
        try {
            await Query.findByIdAndUpdate(queryId, {
                $push: { options: savedOption._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedOption);
    } catch (err) {
        next(err);
    }
}
module.exports = {createoption}