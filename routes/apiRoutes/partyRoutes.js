const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

// Get all parties
router.get("/parties", (req, res) => {
  // internal logic remains the same
});

// Get single party
router.get("/party/:id", (req, res) => {});

// Delete a party
router.delete("/party/:id", (req, res) => {});

module.exports = router;

// //BEGIN PARTY ENDPOINTS
// // Get all parties
// app.get("/api/parties", (req, res) => {
//   const sql = `SELECT * FROM parties`;
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: rows,
//     });
//   });
// });

// //Get single party
// app.get("/api/party/:id", (req, res) => {
//   const sql = `SELECT * FROM parties WHERE id = ?`;
//   const params = [req.params.id];
//   db.query(sql, params, (err, row) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: row,
//     });
//   });
// });

// //Delete party
// app.delete("/api/party/:id", (req, res) => {
//   const sql = `DELETE FROM parties WHERE id = ?`;
//   const params = [req.params.id];
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: res.message });
//       // checks if anything was deleted
//     } else if (!result.affectedRows) {
//       res.json({
//         message: "Party not found",
//       });
//     } else {
//       res.json({
//         message: "deleted",
//         changes: result.affectedRows,
//         id: req.params.id,
//       });
//     }
//   });
// });

// // Update a candidate's party
// app.put("/api/candidate/:id", (req, res) => {
//   const errors = inputCheck(req.body, "party_id");

//   if (errors) {
//     res.status(400).json({ error: errors });
//     return;
//   }
//   const sql = `UPDATE candidates SET party_id = ?
//                WHERE id = ?`;
//   const params = [req.body.party_id, req.params.id];
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       // check if a record was found
//     } else if (!result.affectedRows) {
//       res.json({
//         message: "Candidate not found",
//       });
//     } else {
//       res.json({
//         message: "success",
//         data: req.body,
//         changes: result.affectedRows,
//       });
//     }
//   });
// });
