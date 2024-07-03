function expandWithUnshortenLink() {
    const shortUrl = document.getElementById('shortUrl').value;
    const resultDiv = document.getElementById('result');
    const rawResponseTextarea = document.getElementById('rawResponse');
    const apiUrl = `https://api.unshorten.link/?url=${encodeURIComponent(shortUrl)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            rawResponseTextarea.value = JSON.stringify(data, null, 2);
            if (data.success && data.unshortened_url) {
                resultDiv.innerHTML = `<strong>URL Original:</strong> <a href="${data.unshortened_url}" target="_blank">${data.unshortened_url}</a>`;
            } else {
                resultDiv.innerHTML = `<strong>Error:</strong> No se pudo expandir la URL. Verifica que la URL acortada sea correcta.`;
            }
        })
        .catch(error => {
            rawResponseTextarea.value = error.toString();
            resultDiv.innerHTML = `<strong>Error:</strong> Ocurrió un problema al intentar expandir la URL.`;
        });
}
