import chalk from "chalk"

const promptQRCode = [
    {
        name: "link",
        description: "Enter the link to the QR Code here",
        required:  true,
    },
    {
        name:"QRSelect",
        description: chalk.yellow.bold("(1 - QRCode img | 2 - QRCode terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Choose between 1 or 2"),
        required: true,
    },
];

export default promptQRCode;

