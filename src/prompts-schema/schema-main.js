import chalk from "chalk";

const SchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("(1 - QRCODE or 2 - PASSWORD)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Choose between 1 or 2"),
        required:  true,
    }
];

export default SchemaMain;