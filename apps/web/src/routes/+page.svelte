<script lang="ts">
    import { superForm } from "sveltekit-superforms";

    export let data: any;

    // Client API:
    const { form, message, enhance } = superForm(data.form, {
        resetForm: false,
    });

    let dialog: any;
    let seconds = 0;

    $: if ($message) {
        showDialog();
    }

    async function showDialog() {
        dialog?.showModal();
        seconds = 3;

        // wait 3 seconds
        while (seconds > 0) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            seconds--;
        }

        dialog?.close();
    }
</script>

<dialog
    bind:this={dialog}
    class="backdrop:bg-black/50 backdrop:backdrop-blur-md"
>
    <div class="border p-4">
        <h1 class="text-center">{$message}</h1>
        <p class="italic text-center">
            This dialog will close after <span
                class="font-bold text-xl text-red-500">{seconds}</span
            > seconds
        </p>
    </div>
</dialog>

<div class="h-screen flex justify-center items-center">
    <div class="grid justify-center items-center p-4 border gap-4 w-[75%]">
        <h1 class="text-center">Turborepo SvelteKit Docker Railway Demo</h1>
        <h2 class="text-center">Enter any username and password</h2>
        <form
            method="POST"
            class="grid gap-4 justify-center items-center"
            use:enhance
        >
            <label for="username">
                Username
                <input
                    name="username"
                    class="uppercase"
                    bind:value={$form.username}
                />
            </label>
            <label for="password">
                Password
                <input
                    name="password"
                    type="password"
                    bind:value={$form.password}
                />
            </label>
            <div class="text-center">
                <button>login</button>
            </div>
        </form>
    </div>
</div>
