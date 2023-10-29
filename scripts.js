// Realiza una solicitud HTTP para obtener el archivo JSON
fetch('publicaciones.json')
    .then(response => response.json())
    .then(data => {
        const publicacionesSection = document.getElementById('publicaciones-section');
        data.forEach(publicacion => {
            const article = document.createElement('article');
            const title = document.createElement('h3');
            const content = document.createElement('p');
            title.textContent = publicacion.titulo;
            content.textContent = publicacion.contenido;
            article.appendChild(title);
            article.appendChild(content);
            publicacionesSection.appendChild(article);
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

// Agregar una nueva publicación al archivo JSON
const nuevaPublicacion = {
    titulo: "Título de la nueva publicación",
    contenido: "Contenido de la nueva publicación."
};

fetch('publicaciones.json', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevaPublicacion)
})
.then(response => response.json())
.then(data => console.log('Publicación agregada con éxito:', data))
.catch(error => console.error('Error al agregar la publicación:', error));