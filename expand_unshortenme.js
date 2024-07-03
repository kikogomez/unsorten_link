function expandWithUnshortenMe() {
    const shortUrl = document.getElementById('shortUrl').value;
    const resultDiv = document.getElementById('result');
    const rawResponseTextarea = document.getElementById('rawResponse');
    const apiUrl = `https://unshorten.me/json/${shortUrl}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            rawResponseTextarea.value = JSON.stringify(data, null, 2);
            if (data.success && data.resolved_url) {
                resultDiv.innerHTML = `<strong>URL Original:</strong> <a href="${data.resolved_url}" target="_blank">${data.resolved_url}</a>`;
            } else {
                resultDiv.innerHTML = `<strong>Error:</strong> No se pudo expandir la URL. Verifica que la URL acortada sea correcta.`;
            }
        })
        .catch(error => {
            rawResponseTextarea.value = error;
            resultDiv.innerHTML = `<strong>Error:</strong> Ocurrió un problema al intentar expandir la URL.`;
        });
}

