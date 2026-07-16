const User = require("../models/User");

const markCompleted = async (req, res) => {

    try{

        const { email, algorithm } = req.body;

        if(!email || !algorithm){

            return res.status(400).json({
                success:false,
                message:"Email and Algorithm are required"
            });

        }

        const user = await User.findOne({ email });

        if(!user){

            return res.status(404).json({
                success:false,
                message:"User not found"
            });

        }

        if(!user.completedAlgorithms.includes(algorithm)){

            user.completedAlgorithms.push(algorithm);

            await user.save();

        }

        res.json({
            success:true,
            completed:user.completedAlgorithms
        });

    }catch(error){

        console.log(error);

        res.status(500).json({
            success:false,
            message:"Server Error"
        });

    }

};
const getProgress = async (req, res) => {

    try{

        const email = req.params.email;

        const user = await User.findOne({ email });

        if(!user){

            return res.status(404).json({
                success:false,
                message:"User not found"
            });

        }

        res.json({

            success:true,

            completed:user.completedAlgorithms

        });

    }catch(error){

        console.log(error);

        res.status(500).json({

            success:false,

            message:"Server Error"

        });

    }

};
module.exports = {
    markCompleted,
    getProgress
};