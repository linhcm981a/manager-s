module.exports = app => {
    const newmodels = require("../controllers/newCtrl");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", newmodels.create);
  
    // Retrieve all Tutorials
    router.get("/", newmodels.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", newmodels.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", newmodels.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", newmodels.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", newmodels.delete);
  
    // Create a new Tutorial
    router.delete("/",newmodels.deleteAll);
  
    app.use("/api/newmodels", router);
  };
  