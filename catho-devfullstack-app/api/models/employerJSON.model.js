const fs = require('fs');

const employersDB = require('../db/employers.json');
const employersDBPath = './api/db/employers.json';

const employerModel = function(customer) {
    this.name = customer.name;
    this.email = customer.email;
    this.active = customer.active;
};

employerModel.create = async function(data) {
    // Get keys of employers
    var keys = Object.keys(employersDB);

    // Get the highest key/ID in the array
    var highestID = Math.max.apply(null, keys);

    const employerID = highestID + 1;

    employersDB[employerID] = data;
    
    // Writing the JSON to data file
    fs.writeFileSync(employersDBPath, JSON.stringify(employersDB));

    return employersDB[employerID];
};

employerModel.get = async function() {
    return employersDB;
};

employerModel.update = async function(id, data) {
    employersDB[id] = data;
    
    // Writing the JSON to data file
    fs.writeFileSync(employersDBPath, JSON.stringify(employersDB));

    return employersDB[id];
};

employerModel.destroy = async function(id) {
    delete employersDB[id];
    
    // Writing the JSON to data file
    fs.writeFileSync(employersDBPath, JSON.stringify(employersDB));
};

employerModel.getById = async function(id) {
    return employersDB[id];
};

module.exports = employerModel;