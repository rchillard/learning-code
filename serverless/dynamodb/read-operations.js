const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.get({
//     TableName: 'td_notes_test',
//     Key: {
//         user_id: 'A',
//         timestamp: 1
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// docClient.query({
//     TableName: 'td_notes_test',
//     KeyConditionExpression: "user_id = :uid",
//     ExpressionAttributeValues: {
//         ":uid": "A"
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// docClient.scan({
//     TableName: 'td_notes_test',
//     FilterExpression: "cat = :cat",
//     ExpressionAttributeValues: {
//         ":cat": "general"
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


docClient.batchGet({
    RequestItems: {
        'td_notes_test': {
          Keys: [
            {
               user_id: 'A',
               timestamp: 1
            },
            {
                user_id: 'B',
                timestamp: 2
            }
          ]
        },
        'td_notes_sdk': {
          Keys: [
            { 
                user_id: '11',
                timestamp: 1
            }
          ]
        }
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});


// More Examples

// Query all songs by artist Arturus Ardvarkian with the Document Client
async function logSongsByArtistDdbDc(){
    try {
        var params = {
            KeyConditionExpression: 'artist = :artist',
            ExpressionAttributeValues: {
                ':artist': 'Arturus Ardvarkian'
            },
            TableName: tableName
        };
        var result = await ddbDocumentClient.query(params).promise()
        console.log(JSON.stringify(result))
    } catch (error) {
        console.error(error);
    }
}
logSongsByArtistDdbDc()

// Query all songs by artist Arturus Ardvarkian that start with "C" using the Document Client
async function logArtistSongsStartingWithCDdbDc(){
    try {
        var params = {
            KeyConditionExpression: 'artist = :artist AND begins_with ( song , :song )',
            ExpressionAttributeValues: {
                ':artist': 'Arturus Ardvarkian',
                ':song': 'C'
            },
            TableName: tableName
        };
        var result = await ddbDocumentClient.query(params).promise()
        console.log(JSON.stringify(result))
    } catch (error) {
        console.error(error);
    }
}
logArtistSongsStartingWithCDdbDc()
