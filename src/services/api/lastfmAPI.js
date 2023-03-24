const getAlbumData = async function() {
    const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=album.search&album=jane remover&api_key=762524dd4376d64eba94f5ccfcbe1223&format=json&limit=3")
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