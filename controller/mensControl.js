const mensRanking = require("../model/mens.js");

const mensControl = async (req, res) => {
  try {
    const addingMensRecords = new mensRanking(req.body);
    console.log(req.body);
    addingMensRecords.save();
    return res.json({ msg: "Data Added Successfully", addingMensRecords });
  } catch (error) {
    return res.send(error);
  }
};

const Access = async (req, res) => {
  try {
    const getMens = await mensRanking.find({}).sort({ ranking: 1 });
    return res.status(201).json({ msg: "Your Data", getMens });
  } catch (error) {
    return res.status(500).json({ msg: "get data failed", error });
  }
};

//we will handle get req indivisual
const getById = async (req, res) => {
  try {
    const _id = req.params.id;
    const getId = await mensRanking.findById(_id);
    return res.status(201).json({ msg: "User Founded", getId });
  } catch (error) {
    return res.json({ msg: "invalid id", error });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const userUpdate = await mensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    return res.status(201).json({ msg: "User Updated", userUpdate });
  } catch (error) {
    console.log(error);
    return res.json({ msg: "invalid User", error });
  }
};

const Deleteuser = async (req, res) => {
  try {
    const _id = req.params.id;
    const userDelete = await mensRanking.findByIdAndDelete(_id);
    return res.status(201).json({ msg: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "invalid User", error });
  }
};
module.exports = { mensControl, Access, getById, UpdateUser, Deleteuser };
