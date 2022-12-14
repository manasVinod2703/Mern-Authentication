import { StatusCodes } from "http-status-codes";
import customAPIError from "./customAPIError.js";

class notFoundError extends customAPIError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

export default notFoundError