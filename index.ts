import HTTP_STATUS from "http-status";

export class Err extends Error{
	readonly status: number;
	readonly data?: object;

	constructor(message: string, status?: number, data?: object, options?: ErrorOptions) {
		super(message, options);
		this.status = status || HTTP_STATUS.INTERNAL_SERVER_ERROR;
		this.data = data;
	}
}
