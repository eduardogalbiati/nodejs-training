const fs = require("fs");

const employersDB = require("../db/employers.json");
const employersDBPath = "./api/db/employers.json";
class EmployerModel {
  constructor(employer) {
    const { name, email, active } = employer;
    this.name = name;
    this.email = email;
    this.active = active;
  }

  async create(employer) {
    const { data } = employersDB;

    data.push(employer);
    fs.writeFileSync(employersDBPath, JSON.stringify(employersDB));
    return await this.getById(employer.id);
  }

  async get() {
    const { data } = employersDB;
    return data;
  }

  async getById(id) {
    const { data } = employersDB;
    return data.find((item) => item.id === id);
  }

  async update(employer) {
    const { data } = employersDB;
    const { id } = employer;

    const updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ...employer,
        };
      }
      return item;
    });

    employersDB.data = updatedData;
    fs.writeFileSync(employersDBPath, JSON.stringify(employersDB));
    return await this.getById(id);
  }

  async destroy(id) {
    const { data } = employersDB;
    const updatedData = data.filter((item) => item.id !== id);

    employersDB.data = updatedData;
    fs.writeFileSync(employersDBPath, JSON.stringify(employersDB));
  }
}

module.exports = EmployerModel;
