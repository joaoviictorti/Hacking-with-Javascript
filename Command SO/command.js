const comando = require("child_process").execSync("whoami").toString();
console.log(comando)