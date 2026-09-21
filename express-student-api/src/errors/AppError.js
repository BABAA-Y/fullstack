class AppError extends Error { // ! Make a new type of error called AppError. WHICH IS BASED ON JS ERROR
    constructor(message, statusCode) {
        super(message); // # super(message) - gives the parent Error the message.

        this.statusCode = statusCode; // store error msg
        this.isOperational = true; // This is an error that we intentionally created and know how to handle.

    }
}

module.exports = AppError;