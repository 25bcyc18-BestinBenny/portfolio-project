document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };

    try {
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.text();
        alert(result);
        this.reset();

    } catch (error) {
        alert("Error sending message");
        console.error(error);
    }
});
