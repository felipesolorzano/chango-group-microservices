exports.handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify("from build server Hello from Lambda and Github! test"),
    }
    return response
  }