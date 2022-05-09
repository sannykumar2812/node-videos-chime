var express = require('express');
var router = express.Router();
const con = require("../../../config/db")


//get meeting details
router.get('/meeting/:meeting_id', function(req,res) {
  try{
  var sql = `SELECT * FROM meeting where meeting_id="${req.params.meeting_id}"`;
  
  con.query(sql ,function (err,result) {
    if (err) {
      res.status(500).json({
        "message": "error in query"
      })
    } else {
      res.status(200).send(result)
    }
  })
  }catch(err){
    return err
  }

});


//get attende details 
router.get('/attendee/:attendeeId', function(req,res) {
try{
  var sql = `select * from attendee where AttendeeId="${req.params.attendeeId}"`;
  con.query(sql ,function (err,result) {
    if (err) {
      res.status(500).json({
        "message": err
      })
    } else {
      res.status(200).send(result)
    }
  })
}catch(err){
  return err
}
});


module.exports = router;
