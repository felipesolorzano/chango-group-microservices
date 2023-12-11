 
 require('prettier')
 exports.handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify("Hello from Lambda and Github! from local 2"),
    }
    return response
  }