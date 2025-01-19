import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js"; 
import handle from "./handle.js";

async function createQRCode() {
    prompt.get(promptQRCode, (err, result) => handle(err, result));

    prompt.start();
}

export default createQRCode;

