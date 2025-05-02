const fs = require('fs');

function main(fileName) {
    fs.readFile(fileName, "utf-8", function (err, data) {
        if (err) {
            console.error("Error reading file:", err.message);
            return;
        }

        let total = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] === ' ')
                total++;
        }

        console.log("Number of spaces:", total+1);
    });
}

main(process.argv[2]);
