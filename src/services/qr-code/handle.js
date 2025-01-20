import qr from 'qrcode-terminal';
import chalk from 'chalk';

async function handle(err, result) {
 if(err){
    console.log("error on application");
    return
 }
    
 const isSmall = result.type == 2;
 console.log(isSmall);
 
 qr.generate(result.link, {small: isSmall}, (qrcode) => {
   console.log(qrcode);
 }); 
}
export default handle;