
const AWS = require('aws-sdk')
const {
    v4: uuid
} = require('uuid')
const region = 'us-east-1'

const chime = new AWS.Chime({
    region
})
chime.endpoint = new AWS.Endpoint(
    'https://service.chime.aws.amazon.com/console'
)

const getData = async () => {

    try {
        const response = {}
        response.meetingResponse = await chime
            .createMeeting({
                ClientRequestToken: uuid(),
                MediaRegion: region,
            })
            .promise()
        response.attendee = await chime
            .createAttendee({
                MeetingId: response.meetingResponse.Meeting.MeetingId,
                ExternalUserId: uuid(),
            })
            .promise()
        return response;

    } catch (err) {
        return err
    }
    // console.log("meetingDetails", response.meetingResponse.Meeting)
    // console.log("attendeeDetails", response.attendee.Attendee)
}


module.exports = {
    getData
};