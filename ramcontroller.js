const ramSchema = require("../models/ramSchema.");

exports.ramCreate = async (req, res) => {
  let { name, email, std } = req.body;

  let ramData = {
    name: name,

    std: std,
  };
  let data = await ramSchema(ramData)
    .save()
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch((e) => res.send(e));
};

exports.getAllram = async (req, res) => {
  await ramSchema
    .find()
    .then((doc) => {
      res.status(200).send({ rams: doc });
    })
    .catch((e) => res.send(e));
};

exports.getramById = async (req, res) => {
  await ramSchema
    .findById(req.params.id)
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch((e) => res.send(e));
};

exports.updateramById = async (req, res) => {
  let { name, std } = req.body;
  let ramData = {
    name: name,
    std: std,
  };
  await ramSchema
    .findByIdAndUpdate(req.params.id, ramData)
    .then((doc) => res.staus(200).send("document updated successfully "))
    .catch((e) => res.send(e));
};

exports.deleteramById = async (req, res) => {
  await ramschema
    .findByIdAndDelete(req.params.id)
    .then((doc) => res.status(200).send("deleted successuflly"))
    .catch((e) => res.send(e));
};