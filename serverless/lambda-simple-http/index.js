exports.handler = async event => {
  let responseMessage = "Response";
  let responseCode = 200;

  if (event.context["http-method"] === "POST") {
    console.log("BODY-JSON");
    console.log(event["body-json"]);
    console.log("RAW DATA");
    console.log(event.name);
    console.log(event.email);
    console.log(event.password);
    responseMessage = "This form received a POST request";
  }

  const response = {
    statusCode: responseCode,
    body: JSON.stringify(responseMessage),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };

  return response;
};
