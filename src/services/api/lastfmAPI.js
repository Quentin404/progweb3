const getAlbumData = async function() {
    const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=album.search&album=porter robinson&api_key=762524dd4376d64eba94f5ccfcbe1223&format=json&limit=3")
    if (response.status == 200) 
    {
        return response.json()
    }
    else 
    {
        new Error(response.statusText)
    }
}
export {
    getAlbumData
}

// fonction getAlbumInfo qui récupère les infos d'un seul album

/*
mettre des arguments aux fonctions et les appeler dans les éléments vue

utiliser getAlbumInfo dans getAlbumData pour récupérer plus d'infos sur les albums
et après getAlbumData renvoie un gros tableau tout propre avec tout ce qu'il faut

*/ 