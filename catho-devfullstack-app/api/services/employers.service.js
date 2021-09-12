const fs = require('fs');

const employerModel = require("../models/employerMySQL.model.js");
// const employerModel = require("../models/employerJSON.model.js");

const create = async (data) => {
    if (!data.name) {
        throw 'The employer name can not be empty!';
    }

    const employer = await employerModel.create(data);    
    return employer;
}

const get = async () => {
    const employers = await employerModel.get();
    return employers;
}

const update = async (id, data) => {
    if (isNaN(id)) {
        throw 'This ID is invalid!';
    } 

    const employer = await getById(id);
    
    if (!employer) {
        return;
    }    

    const employerUpdated = await employerModel.update(id, data);  
    
    return employerUpdated;
}

const destroy = async (id) => {
    if (isNaN(id)) {
        throw 'This ID is invalid!';
    } 

    const employer = await getById(id);
    
    if (!employer) {
        return;
    }        
    
    const employerDestroyed = await employerModel.destroy(id);    
    return employerDestroyed;
}

const getById = async (id) => {
    const employer = await employerModel.getById(id);
    return employer;    
}

module.exports = (app) = {
    create, get, update, destroy, getById
}
