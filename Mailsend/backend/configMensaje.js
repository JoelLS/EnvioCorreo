const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        pool: true,
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'joelleitonsegura@gmail.com',
            pass: 'Malloner'
        }
    });
    console.log("se realizo comprobacion de datos cuenta");

    const mailOptions = {
        from: `"${formulario.nombre} " ${formulario.email}`,
        to: 'joel.leiton.dev@gmail.com',

        subject: 'Cupon de descuento Limoncello',
        html: `
        <strong>Cedula:</strong> ${formulario.cedula}<br/>
        <strong>Nombre:</strong> ${formulario.nombre}<br/>
        <strong>Email:</strong>${formulario.email}<br/>
        <strong>Codigo de descuento:</strong>${formulario.codigo}<br/> 
        <strong>Mensaje Adicional:</strong>${formulario.mensaje}<br/>   `
    };

    console.log("se renderizo correo");

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err + "    ESTAMOS TENIENDO UN PUTO ERROR")
        else
            console.log(info);
    });
}