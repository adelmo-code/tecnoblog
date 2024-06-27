document.addEventListener('DOMContentloaded', function() {
    var video = document.getELementByld('myVideo');

    //defina o tempo específico (em segundo)
    var startime = 10; // por exemplo, iniciar no 10º segundo

    // garanta que o vídeo comece do tempo específicado
    vídeo.addEventListener('loademetadata', function () {
        video.currentTime = startTime;

    });

    // Opcional: iniciar o video automaticamente
    video.play();
    
});
    
