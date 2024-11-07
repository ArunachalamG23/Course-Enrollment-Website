// Configure AWS SDK
AWS.config.update({
    region: "Your aws region", // Your AWS region
    accessKeyId: "Access ID", // Replace with your Access Key ID
    secretAccessKey: "Secret Access Key" // Replace with your Secret Access Key
});

const sns = new AWS.SNS();

document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = "Contact from: " + name;
    const fullMessage = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const params = {
        Message: fullMessage,
        Subject: subject,
        TopicArn: "Sns ARN" // Replace with your SNS Topic ARN
    };

    sns.publish(params, function(err, data) {
        if (err) {
            alert("Error sending message. Please try again later.");
            console.log("Error", err);
        } else {
            alert("Your message has been sent successfully!");
            console.log("Success", data);
        }
    });
};
