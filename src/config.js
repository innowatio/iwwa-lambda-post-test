import dotenv from "dotenv";

dotenv.load();

export const API_ENDPOINT = process.env.API_ENDPOINT || "https://iwwa-write-api-preprod.innowatio-aws.com";
