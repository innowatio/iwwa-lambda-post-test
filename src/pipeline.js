import axios from "axios";

import * as config from "config";
import payload from "payload";

export default async function pipeline(event, context) {

    try {

        const endpoint = `${config.API_ENDPOINT}/aggregated-readings`;

        console.log({
            endpoint,
            payload
        });

        const result = await axios.post(endpoint, payload);

        console.log({
            status: result.data
        });

        context.succeed();

    } catch (error) {
        console.log(error);
        context.fail();
    }

}
