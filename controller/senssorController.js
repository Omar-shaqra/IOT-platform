const  Senssor = require("../models_/senssorModule");


const createSenssor = async (req, res) => {
    const { key, project, jop_description} = req.body;

    const senssorexists = await Senssor.findOne({ key });

    if (senssorexists) {
        res.status(404);
        throw new Error("Senssor already exists");
    }

    const senssor = Senssor.create({
        key, 
        project, 
        jop_description
    });

    if(senssor){
        res.status(201).json({message : "Sensor created successfully"});
    }else {
        res.status(404);
        throw new Error("Senssor already exists");
    }
}

const updateSenssor = async (req, res) => {
    const { key, project, jop_description} = req.body;

    const filter = { key: key };

    const update = {
        key:key, 
        project:project, 
        jop_description:jop_description
    }

    try{
        const doc = await Character.findOneAndUpdate(filter, update, { new: true });
        res.status(200).json({ message: 'Sensor updated successfully'})
    }catch{
        res.status(404);
        throw new Error("Senssor not found");
    }
}

module.exports = { 
    createSenssor,
    updateSenssor
}