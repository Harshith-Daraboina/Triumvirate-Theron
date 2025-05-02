const fs = require('fs')
const { Command} = require('commander')

const program = new Command();

program
    .name("counter")
    .description("CLI to do file base tasks")
    .version('1.0.0');

program.command('count')
    .description('counts the number of lines in the give sys file')
    .argument('<file>' , 'file to count')
    .action((file) =>{
        fs.readFile(file , 'utf8' , (err ,data) => {
            if(err){
                console.log(err);
                
            }
            else{
                const lines = data.split(' ').length;
                console.log(`There are ${lines} in your ${file}!`);
                
            }
        })
    });
    
program.parse();
