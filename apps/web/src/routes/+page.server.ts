import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { z } from "zod";

const schema = z.object({
    username: z.string().transform((val) => val.toUpperCase()),
    password: z.string(),
});

export const load = async () => {
    const form = await superValidate(zod(schema));

    // Always return { form } in load functions
    return { form };
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(schema));
        const { username, password } = form.data;
        return message(form, `Hello '${username}' with password '${password}'`);
    },
};
