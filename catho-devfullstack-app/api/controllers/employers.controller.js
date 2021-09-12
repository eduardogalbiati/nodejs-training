const employerService = require("../services/employers.service.js");

const post = async (req, res) => {
  try {
    const employer = await employerService.create(req.body);
    if (employer) {
      res.status(201).send("Employer created successfully!");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

const put = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(412).send(`Missing required properties, [${id}]`);
  }

  try {
    const employer = await employerService.update(id, req.body);

    if (!employer) {
      return res.status(404).send(`Employer not found!`);
    }
    res.status(201).send(`Employer ${id} updated successfully!`);
  } catch (err) {
    res.status(400).send(err);
  }
};

const del = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(412).send(`Missing required properties, [${id}]`);
  }

  try {
    employer = await employerService.destroy(id);

    if (!employer) {
      res.status(404).send(`Employer not found!`);
    }
    res.status(200).send(`Employer ${id} deleted successfully!`);
  } catch (err) {
    res.status(400).send(err);
  }
};

const get = async (req, res) => {
  const employers = await employerService.get();
  res.status(200).json(employers);
};

const getById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(412).send(`Missing required properties, [${id}]`);
  }

  try {
    employer = await employerService.getById(id);
    if (!employer) {
      res.status(404).send(`Employer not found!`);
    }
    res.status(200).json(employer);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = app = {
  post,
  put,
  del,
  get,
  getById,
};
