class CustomNotFound extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.name = "Not Found";
  }
}

module.exports = CustomNotFound;
