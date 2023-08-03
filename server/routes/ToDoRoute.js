const { Router } = require("express");

const {
  getToDo,
  saveToDo,
  deleteToDo,
  updateToDo,
  addService,
  updateService,
  getAllservice,
  getAservice,
  getNotification,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/contact/getAll", getToDo);
router.get("/notification/get",getNotification);

router.post("/save", saveToDo);

router.post("/update", updateToDo);

router.post("/delete", deleteToDo);

router.get("/service/getall", getAllservice);

router.post("/service/add", addService);
router.put("/service/edit/:id", updateService);
router.get("/service/Geta/:id", getAservice);



module.exports = router;