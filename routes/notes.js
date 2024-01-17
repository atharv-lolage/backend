const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Notes = require("../models/Notes");

// ROUTE_1 : Fetch all the notes using: GET "/api/auth/fetchallnotes". Doesn't require Auth
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});
// ROUTE_2 : Fetch all the notes using: GET "/api/auth/fetchallnotes". Doesn't require Auth
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});
module.exports = router;
