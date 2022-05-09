const express = require('express')
const router = express()
const {getData} = require("../../services/getData")
const con = require("../../../config/db")


//post data in meeting table
router.post('/meeting', async (req, res) => {

    try {
        var data = await getData();
        var MeetingId = data.meetingResponse.Meeting.MeetingId
        var AudioHostUrl = data.meetingResponse.Meeting.MediaPlacement.AudioHostUrl
        var AudioFallbackUrl = data.meetingResponse.Meeting.MediaPlacement.AudioFallbackUrl
        var ScreenDataUrl = data.meetingResponse.Meeting.MediaPlacement.ScreenDataUrl
        var ScreenSharingUrl = data.meetingResponse.Meeting.MediaPlacement.ScreenSharingUrl
        var ScreenViewingUrl = data.meetingResponse.Meeting.MediaPlacement.ScreenViewingUrl
        var SignalingUrl = data.meetingResponse.Meeting.MediaPlacement.SignalingUrl
        var TurnControlUrl = data.meetingResponse.Meeting.MediaPlacement.TurnControlUrl
        var EventIngestionUrl = data.meetingResponse.Meeting.MediaPlacement.AudioHostUrl
    } catch (err) {
return err
    }
    try {
        var sql = `insert into meeting (meeting_id,AudioHostUrl,AudioFallbackUrl,ScreenDataUrl,ScreenSharingUrl,ScreenViewingUrl,SignalingUrl,TurnControlUrl,EventIngestionUrl)
        values ("${MeetingId}","${AudioHostUrl}","${AudioFallbackUrl}","${ScreenDataUrl}","${ScreenSharingUrl}","${ScreenViewingUrl}","${SignalingUrl}","${TurnControlUrl}","${EventIngestionUrl}")`

        con.query(sql, function (err, result) {
            if (err) {
                res.status(500).json({
                    "message": err
                })
            } else {
            res.status(200).json({
                "message": "Meeting created succesfully",
                "MeetingID":MeetingId,
                
        })
            }
        })
    } catch (err) {
        err
    }

})

//post data in attendee table
router.post('/attendee', async (req, res) => {

    try {
        var data = await getData();
        var AttendeeId = data.attendee.Attendee.AttendeeId
        var ExternalUserId = data.attendee.Attendee.ExternalUserId
        var JoinToken = data.attendee.Attendee.JoinToken
        
    } catch (err) {
return err
    }
    try {
        var sql = `insert into attendee (AttendeeId,ExternalUserId,JoinToken)
        values ("${AttendeeId}","${ExternalUserId}","${JoinToken}")`

        con.query(sql, function (err, result) {
            if (err) {
                res.status(500).json({
                    "message": err
                })
            } else {
                res.status(200).json({
                    'message': "Attendee details..!",
                    AttendeeId
                })
            }
        })
    } catch (err) {
        err
    }

})


//get all data
router.post('/alldata', async (req, res) => {

    try {
        var data = await getData();
        var MeetingId = data.meetingResponse.Meeting.MeetingId
        var AttendeeId = data.attendee.Attendee.AttendeeId
        var AudioHostUrl = data.meetingResponse.Meeting.MediaPlacement.AudioHostUrl
        var AudioFallbackUrl = data.meetingResponse.Meeting.MediaPlacement.AudioFallbackUrl
        var ScreenDataUrl = data.meetingResponse.Meeting.MediaPlacement.ScreenDataUrl
        var ScreenSharingUrl = data.meetingResponse.Meeting.MediaPlacement.ScreenSharingUrl
        var ScreenViewingUrl = data.meetingResponse.Meeting.MediaPlacement.ScreenViewingUrl
        var SignalingUrl = data.meetingResponse.Meeting.MediaPlacement.SignalingUrl
        var TurnControlUrl = data.meetingResponse.Meeting.MediaPlacement.TurnControlUrl
        var EventIngestionUrl = data.meetingResponse.Meeting.MediaPlacement.AudioHostUrl
        var ExternalUserId = data.attendee.Attendee.ExternalUserId
        var JoinToken = data.attendee.Attendee.JoinToken
    } catch (err) {
return err
    }
    try {
        var sql = `insert into chimeData (meeting_id,AttendeeId,AudioHostUrl,AudioFallbackUrl,ScreenDataUrl,ScreenSharingUrl,ScreenViewingUrl,SignalingUrl,TurnControlUrl,EventIngestionUrl,ExternalUserId,JoinToken)
        values ("${MeetingId}","${AttendeeId}","${AudioHostUrl}","${AudioFallbackUrl}","${ScreenDataUrl}","${ScreenSharingUrl}","${ScreenViewingUrl}","${SignalingUrl}","${TurnControlUrl}","${EventIngestionUrl}","${ExternalUserId}","${JoinToken}")`

        con.query(sql, function (err, result) {
            if (err) {
                res.status(500).json({
                    "message": err
                })
            } else {
            res.status(200).json({
                "message": "Meeting created succesfully",
                "MeetingID":data,
                
        })
            }
        })
    } catch (err) {
        err
    }

})

module.exports = router;

