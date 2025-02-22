const Query = require('../models/Query')
const createquery = async(req,res)=>{
    try {
        const newquery = new Query(req.body);
        const savequery  = await newquery.save();
        res.status(201).json(savequery);
    } catch (error) {
        console.error(error);
    }
}
const addVote = async (req, res) => {
    try {
        const { queryId, optionId } = req.params;
        const userId = req.user._id;
        if (!mongoose.Types.ObjectId.isValid(queryId) || 
            !mongoose.Types.ObjectId.isValid(optionId)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

      
        const query = await Query.findById(queryId);
        if (!query) return res.status(404).json({ message: 'Query not found' });

       
        const hasVoted = query.options.some(option => 
            option.votes.some(voteId => voteId.equals(userId))
        );
        
        if (hasVoted) {
            return res.status(400).json({ message: 'User already voted' });
        }

      
        if (!query.isActive || new Date() > query.endDate) {
            return res.status(403).json({ message: 'Voting is closed' });
        }

        const option = query.options.id(optionId);
        if (!option) return res.status(404).json({ message: 'Option not found' });


        option.votes.push(userId);
        const updatedQuery = await query.save();

        res.status(201).json({
            message: 'Vote added successfully',
            query: updatedQuery
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
const deleteQuery = async(req,res)=>{
    try {
        await Query.findByIdAndDelete(req.params.id);
        res.status(201).json({message:"query has been deleted..."})
    } catch (error) {
        console.error(error);
    }
}
const getquery = async(req,res)=>{
    try {
        const query = await Query.findById(req.params.id);
    } catch (error) {
        console.error(error);
    }
}
const getqueries = async(req,res)=>{
    try {
        const queries = await Query.find();
        res.status(201).json(queries)
    } catch (error) {
        console.log(error);
    }
}
module.exports = {createquery,getquery,getqueries,deleteQuery,addVote};