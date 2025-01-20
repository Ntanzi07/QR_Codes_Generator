async function permittedCharacters() {
    let permited = [];

    if(process.env.UPPERCASE_LETTERS === "true")
        permited.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYX");

    if(process.env.LOWERCASE_LETTERS === "true")
        permited.push(... "abcdefghijklmnopqrstuvwxyz");

    if(process.env.NUMBERS === "true")
        permited.push(... "123456789");

    if(process.env.SPECIAL_CHARACTERS === "true")
        permited.push(... "@#$_-");

    return permited;
}


async function handle() {
    let password = "";
    const passwordLength = process.env.PASSWORD_LENGTH;
    let characters = await permittedCharacters();

    for(let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

export default handle;