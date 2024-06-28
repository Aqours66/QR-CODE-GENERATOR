function generateQRCode() {
    const text = document.getElementById('text-input').value;
    if (text.trim() === "") {
        alert("Please enter some text or a URL.");
        return;
    }

    // Clear any existing QR code
    document.getElementById('qr-code').innerHTML = "";

    // Generate the QR code
    new QRCode(document.getElementById('qr-code'), {
        text: text,
        width: 256,
        height: 256
    });
}