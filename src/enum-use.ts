export enum Status {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}

export const handleResponse = (status: Status): string => {
    return status === Status.SUCCESS ? "Success!" : "Error!";
};