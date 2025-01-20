import prompt from "prompt";
import mainPrompt from "./prompts-schema/schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassord from "./services/password/create.js";

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if(err) console.log(err);
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassord();
    });

    prompt.start();
}

main();