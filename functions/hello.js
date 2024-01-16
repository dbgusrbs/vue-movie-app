exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Hyun',
      age: 33,
      email: 'thesecon@gmail.com'
    })
  }
}