import prompt from "prompt";
import SchemaMain from "../../prompts-schema/schema-qrcode.js"; 
import handle from "./handle.js";

async function createQRCode() {
    prompt.get(SchemaMain, (err, result) => handle(err, result));

    prompt.start();
}

export default createQRCode;

