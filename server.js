const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve public files (assuming a 'public' directory exists)
app.use(express.static(path.join(__dirname, "")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 587,
  // Specify STARTTLS explicitly
  tls: {
    rejectUnauthorized: false, // Optionally disable certificate verification for testing
  },
  auth: {
    user: "kevin.derot@espritweb.io",
    pass: "5tGNjCx#*iZE*C",
  },
});

const sendEmail = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error("Erreur lors de l'envoi de l'email:", err);
    } else {
      console.log("Email envoyé avec succès:", info.response);
    }
  });
};

app.post("/contact", (req, res) => {
  const { firstname, lastname, email, message } = req.body;
  // Log received data and process it, e.g., send email using Nodemailer
  console.log("Received data:", req.body);
  sendEmail({
    from: "kevin.derot@espritweb.io",
    to: "kevin.derot@espritweb.io",
    subject: "Nouveau message depuis votre formulaire",
    text: ` Prénom: ${firstname}
              Nom: ${lastname}
              Email: ${email}
              Message: ${message}`,
  });
  // Handle success or error scenarios
  res.send(`
  <!DOCTYPE html>
  <html lang="fr">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./assets/images/favico.svg" type="image/x-icon">
    <link rel="stylesheet" href="./node_modules/bootstrap-icons/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style/style.css">
    <title>Esprit Web - Contact</title>
  </head>
  
  <body>
  
    <div class="container-fluid outer-pages response">
      <header id="header">
  
  
      </header>
  
      <main class="contact-main d-flex justify-content-center align-items-center col-12 row m-auto">
       
            <h2 class="text-center">Votre message a bien été envoyé</h2>
            <p class="text-center">Nous reviendrons vers vous dès que possible.</p>
           <a href="./index.html" class="btn btn-primary col-6">Retour à l'accueil</a>
  
  
  
    </main>
  
    </div>
    <footer class="d-flex footer" id="footerId">
      <!-- TODO:faire le footer   -->
      <!-- TODO: créditer les photos unsplash-->
      <!-- TODO:créer un bouton rond de retour à la page d'accueil -->
  
    </footer>
  
    <button title="scroll to top button" type="button" id="btnScrollToTop" class="btn btn-scroll-to-top"><i
        class="bi bi-arrow-up-circle-fill"></i></button>
  
  
    <script src="./scripts/header.js"></script>
    <script src="./scripts/footer.js"></script>
    <script src="./node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
    <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="./script.js"></script>
  </body>
  
  </html>





  `);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
