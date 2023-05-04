const getAlbumDataFromAPI = async function(albumName, howMany) {
    const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=album.search&album=" + albumName + "&api_key=762524dd4376d64eba94f5ccfcbe1223&format=json&limit=" + howMany)
    if (response.status == 200) 
    {
        return response.json()
    }
    else 
    {
        new Error(response.statusText)
    }
}
const getAlbumInfoFromAPI = async function(artist, albumName) {
    console.log("[API] Going to get info for " + artist + " - " + albumName);
    const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=762524dd4376d64eba94f5ccfcbe1223&artist=" + artist + "&album=" + albumName + "&format=json")
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
    getAlbumDataFromAPI,
    getAlbumInfoFromAPI
}

// fonction getAlbumInfo qui récupère les infos d'un seul album

/*
mettre des arguments aux fonctions et les appeler dans les éléments vue

utiliser getAlbumInfo dans getAlbumData pour récupérer plus d'infos sur les albums
et après getAlbumData renvoie un gros tableau tout propre avec tout ce qu'il faut

*/ 