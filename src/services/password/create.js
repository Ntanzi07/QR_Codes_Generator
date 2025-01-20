import chalk from "chalk";
import handle from "./handle.js";

async function createPassord() {
    const password = await handle();
    console.log(chalk.green("Your password was created!!!"));
    console.log(`Password: ${password}`);

}

export default createPassord;