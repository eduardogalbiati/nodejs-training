const db = require("./db.js");

const employerModel = function (customer) {
  this.name = customer.name;
  this.email = customer.email;
  this.active = customer.active;
};

employerModel.create = async function (data) {
  const employer = new employerModel(data);

  const results = await db.query(
    "INSERT INTO employers (name, email) VALUES (?, ?);",
    [employer.name, employer.email]
  );

  return await this.getById(results.insertId);
};

employerModel.get = async function () {
  const employers = await db.query("SELECT * FROM employers;");
  return employers;
};

employerModel.update = async function (id, data) {
  const employer = new employerModel(data);

  const results = await db.query(
    "UPDATE employers SET  name = ?, email = ? WHERE id = ?;",
    [employer.name, employer.email, id]
  );

  return await this.getById(id);
};

employerModel.destroy = async function (id) {
  const results = await db.query(
    "UPDATE employers SET active = 0 WHERE id = ?;",
    [id]
  );

  return await this.getById(id);
};

employerModel.getById = async function (id) {
  const employer = await db.query(`SELECT * FROM employers WHERE id = ${id};`);
  return employer.length > 0 ? employer : false;
};

module.exports = employerModel;
