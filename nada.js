exports.handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify("NADA.sj Hello from Lambda and Github! test2"),
    }
    return response
  }