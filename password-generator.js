const GenPassword = () => {
    var generator = require('generate-password');

    var password = generator.generate({
        length: 10,
        numbers: true
    });
    console.log(password);
}

setInterval(GenPassword, 2000)