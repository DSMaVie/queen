import { connect_to_db } from "$lib/server/db_connector";
import type { PageServerLoad } from "./$types";


export const load = (async () => {
    try {
        await connect_to_db()
        console.log("connection open!")
    } catch (err) {
        console.error(err)
    }

    return {}
}) satisfies PageServerLoad;