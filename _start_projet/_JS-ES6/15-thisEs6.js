
/// THIS em ES5 

let jukebox = {
    musicas: [
        {titulo: 'Hey You', artista:' Pink Floyd'},
        {titulo: 'Tunnel of Love', artista:' Dire Straits'},
    ],
    lerMusica: function(musica){
        console.log(`${musica.titulo} - ${musica.artista}`);
    },
    lerMusicas: function(){
       this.musicas.forEach(musica => {
           console.log('teste');
           return this.lerMusica(musica);
        });
    },
};

jukebox.lerMusicas();