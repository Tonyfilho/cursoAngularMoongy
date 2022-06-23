
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
        //let that = this;
        //console.log(this.musicas);

        this.musicas.forEach(function(musica){
            //console.log(this);
            //that.lerMusica(musica);
            this.lerMusica(musica);
        }.bind(this));
        //});
    },
};

jukebox.lerMusicas();