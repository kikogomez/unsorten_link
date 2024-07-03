async function async_direct_expandUrl(shortUrl) {
    apiUrl = `${encodeURIComponent(shortUrl)}`
    try {
        // Hacemos una solicitud GET a la URL acortada
        const response = await fetch(apiUrl, {
            method: 'GET',
            redirect: 'follow'
        });

        // La propiedad 'url' del objeto de respuesta contendrá la URL final
        return response.url;
    } catch (error) {
        console.error('Request failed:', error);
        return null;
    }
}
