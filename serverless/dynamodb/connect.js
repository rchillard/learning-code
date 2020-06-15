const AWS = require("aws-sdk")

const { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, TABLE_NAME } = process.env

AWS.config.update({
    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
})

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: TABLE_NAME,
    Key: {
        EventID
    }
}

docClient.get(params, function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})