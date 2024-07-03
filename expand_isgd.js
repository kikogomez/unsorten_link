function expandWithIsGd() {
    const shortUrl = document.getElementById('shortUrl').value;
    const resultDiv = document.getElementById('result');
    const apiUrl = `https://is.gd/forward.php?shorturl=${shortUrl}&format=simple`;

    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            if (data.includes('http')) {
                resultDiv.innerHTML = `<strong>URL Original:</strong> <a href="${data}" target="_blank">${data}</a>`;
            } else {
                resultDiv.innerHTML = `<strong>Error:</strong> No se pudo expandir la URL. Verifica que la URL acortada sea correcta.`;
            }
        })
        .catch(error => {
            resultDiv.innerHTML = `<strong>Error:</strong> Ocurrió un problema al intentar expandir la URL.`;
        });
}
