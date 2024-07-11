import { env } from "$env/dynamic/private";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    console.log("ORIGIN", env.ORIGIN);

    return await resolve(event);
}
