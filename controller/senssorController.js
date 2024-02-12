const Senssor = require("../models_/senssorModule");

const createSenssor = async (req, res) => {
  try {
    const senssor = await Senssor.create(req.body);
    res.status(201).json({ message: "Sensor created successfully", senssor });
  } catch (err) {
    res.status(404);
    throw new Error("Senssor already exists");
  }
};

const updateSenssor = async (req, res) => {
  const { key, project, jop_description } = req.body;

  const filter = { key: key };

  const update = {
    key: key,
    project: project,
    jop_description: jop_description,
  };

  try {
    const doc = await Senssor.findOneAndUpdate(filter, update, { new: true });
    res.status(200).json({ message: "Sensor updated successfully" });
  } catch {
    res.status(404);
    throw new Error("Senssor not found");
  }
};

const deleteSenssor = async (req, res) => {
  const { key } = req.params.key;

  User.findOneAndDelete({ key: { $eq: key } }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ message: "Deleted Senssor" });
    }
  });
};

const getSenssor = async (req, res) => {
  const { key } = req.params.key;

  Senssor.findOne({ key: { $eq: key } })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch((error) => {
      res.status(404), json({ error: error.message });
    });
};

const getAllSenssor = async (req, res) => {
  await Senssor.find()
    .then((senssors) => {
      res.status(200).json(senssors);
    })
    .catch((error) => {
      response.status(500).json({ error: error.message });
    });
};

module.exports = {
  createSenssor,
  updateSenssor,
  deleteSenssor,
  getSenssor,
  getAllSenssor,
};
