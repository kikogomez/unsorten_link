function expandURL() {
    const shortUrl = document.getElementById('shortUrl').value;
    const resultDiv = document.getElementById('result');
    const rawResponseTextarea = document.getElementById('rawResponse');
    const service = document.getElementById('serviceSelector').value;
    let apiUrl = '';

    switch(service) {
 /*       case 'direct':
            apiUrl = `${encodeURIComponent(shortUrl)}`;
            expandField = '';
            break;*/
        case 'unshortenme':
            apiUrl = `https://unshorten.me/json/${encodeURIComponent(shortUrl)}`;
            expandField = 'resolved_url';
            break;
 /*       case 'expandurl':
            apiUrl = `https://expandurl.com/api/v1?url=${encodeURIComponent(shortUrl)}`;
            expandField = 'long_url';
            break;
        case 'unshortenlink':
            apiUrl = `https://api.unshorten.link/?url=${encodeURIComponent(shortUrl)}`;
            expandField = 'unshortened_url';
            break;
        case 'checkshorturl':
            apiUrl = `https://checkshorturl.com/expand.php?url=${encodeURIComponent(shortUrl)}`;
            expandField = 'long_url';
            break;
        case 'longurl':
            apiUrl = `http://api.longurl.org/v2/expand?url=${encodeURIComponent(shortUrl)}`;
            expandField = 'long-url';
            break;
        case 'bitly':
            apiUrl = 'https://api-ssl.bitly.com/v4/expand';
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "bitlink_id": shortUrl })
            })
            .then(response => response.json())
            .then(data => {
                rawResponseTextarea.value = JSON.stringify(data, null, 2);
                if (data.long_url) {
                    resultDiv.innerHTML = `<strong>URL Original:</strong> <a href="${data.long_url}" target="_blank">${data.long_url}</a>`;
                } else {
                    resultDiv.innerHTML = `<strong>Error:</strong> No se pudo expandir la URL. Verifica que la URL acortada sea correcta.`;
                }
            })
            .catch(error => {
                rawResponseTextarea.value = error.toString();
                resultDiv.innerHTML = `<strong>Error:</strong> Ocurrió un problema al intentar expandir la URL.`;
            });
            return; // Exit the function to avoid calling fetch again. */
        default:
            resultDiv.innerHTML = `<strong>Error:</strong> Servicio no soportado.`;
            return;
    }


    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        rawResponseTextarea.value = JSON.stringify(data, null, 2);
        if (data[expandField]) {
            const originalUrl = data[expandField];
            resultDiv.innerHTML = `<strong>URL Original:</strong> <a href="${originalUrl}" target="_blank">${originalUrl}</a>`;
        } else {
            resultDiv.innerHTML = `<strong>Error:</strong> No se pudo expandir la URL. Verifica que la URL acortada sea correcta.`;
        }
    })
    .catch(error => {
        rawResponseTextarea.value = error.toString();
        resultDiv.innerHTML = `<strong>Error:</strong> Ocurrió un problema al intentar expandir la URL.`;
    });
        
}
