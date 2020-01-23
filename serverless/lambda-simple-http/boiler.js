exports.handler = async event => {
  console.log("Request received!");
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!")
  };
  console.log("Response created: " + JSON.stringify(response));
  return response;
};
