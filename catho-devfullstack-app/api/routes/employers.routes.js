const employerController = require('../controllers/employers.controller.js');

module.exports = (app) => {

  app.route('/employers')
    .post(employerController.post)
    .get(employerController.get);

  app.route('/employers/:id')
    .put(employerController.put)
    .delete(employerController.del)
    .get(employerController.getById);
    
}
