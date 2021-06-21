const querystring = require("querystring");

exports.handler = async event => {
  // Decode the body then parse the querystring
  const data = querystring.parse(
    Buffer.from(event.body, "base64").toString("utf-8")
  );
  // Data is now a usable event.body
  const name = data.name;

  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello ${name}!`)
  };
  return response;
};
