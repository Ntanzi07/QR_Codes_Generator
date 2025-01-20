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

export default permittedCharacters;