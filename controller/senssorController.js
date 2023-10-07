const  Senssor = require("../models_/senssorModule");


const createSenssor = async (req, res) => {
    const { key, project, jop_description} = req.body;

    const senssorexists = await User.findOne({ key });

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