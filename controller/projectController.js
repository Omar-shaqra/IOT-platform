const Projectmodel = require("../models_/projectModule");
const asyncHandler = require("express-async-handler");
const ApiError = require("../Utils/apiError");
const ApiFeatures = require("../Utils/apiFeatures");

class Projects {
  getproject = asyncHandler(async (req, res) => {
    const DocumentsCounts = await Projectmodel.countDocuments();

    const apiFeatures = new ApiFeatures(Projectmodel.find(), req.query)
      .paginate(DocumentsCounts)
      .search()
      .filter()

      .limitFields()
      .sort();

    const { mongooseQuery, PaginationResult } = apiFeatures;

    const getprojects = await mongooseQuery;

    res.status(200).json({
      results: getprojects.length,
      PaginationResult,
      data: getprojects,
    });
  });

  getoneproject = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const getproject = await Projectmodel.findById(id);
    if (!getproject) {
      //    res.status(404).json({msg : "error : id is not found"});
      return next(new ApiError("error : id is not found", 404));
    }
    res.status(200).json({ result: getproject });
  });

  createProject = asyncHandler(async (req, res) => {
    const project = await Projectmodel.create(req.body);
    res.status(201).json({ data: project });
  });

  updateProject = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const updatedata = await Projectmodel.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    if (!updatedata) {
      //  res.status(404).json({msg : "error : id is not found"});
      return next(new ApiError("error : id is not found", 404));
    }
    res.status(200).json({ result: updatedata });
  });

  deleteproject = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletebrand = await Projectmodel.findByIdAndDelete(id);
    if (!deletebrand) {
      //   res.status(404).json({msg : "error : id is not found"});
      return next(new ApiError("error : id is not found", 404));
    }
    res.status(204).send();
  });

  getNumberOfSensors = asyncHandler(async (req, res) => {
    const project = await Projectmodel.findById(req.params.id);
    if (project) {
      const sensorsCount = project.sensors.length;
      res.json({ sensorsCount });
    } else {
      res.status(404);
      throw new Error("Project not found");
    }
  });

  getAllUsersOfProject = asyncHandler(async (req, res) => {
    const project = await Projectmodel.findById(req.params.id);
    if(project){
      const users = project.users;
      res.json({ numberOfUsers: users.length , users:users});
    } else {
      res.status(404);
      throw new Error("Project not found");
    }
  });

  getOwnerOfProject = asyncHandler(async (req, res) => {
    const project = await Projectmodel.findById(req.params.id);
    if(project){
      const owner = project.owner;
      res.json({ owner });
    } else {
      res.status(404);
      throw new Error("Project not found");
    }
  })
}

module.exports = Projects;
