import { getAlbumDuration } from "../albumFunctions";
import { convertToBeautifulTime } from "../albumFunctions";

const getAlbumsFormSearchFromAPI = async function(albumName, howMany) {
    const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=album.search&album=" + albumName + "&api_key=762524dd4376d64eba94f5ccfcbe1223&format=json&limit=" + howMany)
    if (response.status == 200) 
    {
        let tab = await response.json();
        let searchedAlbums = tab.results.albummatches.album.filter(e => e.name !== "(null)");
        let testAlbum = searchedAlbums[3];
        console.log(testAlbum);

        for(let i = 0; i < searchedAlbums.length; i++) {
            let currentAlbum = searchedAlbums[i];
            searchedAlbums[i].image = currentAlbum.image[1]['#text'];
            let currentAlbumInfo = await getAlbumInfoFromAPI(currentAlbum.artist, currentAlbum.name);
            if ('tracks' in currentAlbumInfo.album) {
                console.log(currentAlbumInfo.album.tracks.track);
                if (Array.isArray(currentAlbumInfo.album.tracks.track)) {
                    searchedAlbums[i].nb_tracks = currentAlbumInfo.album.tracks.track.length;
                    searchedAlbums[i].duration = getAlbumDuration(currentAlbumInfo.album.tracks.track);
                }
                else {
                    searchedAlbums[i].nb_tracks = 1;
                    searchedAlbums[i].duration = convertToBeautifulTime(currentAlbumInfo.album.tracks.track.duration);
                }
            }
            else {
                searchedAlbums[i].duration = "n/a"
                searchedAlbums[i].nb_tracks = 1
            }
            searchedAlbums[i].playcount = currentAlbumInfo.album.playcount;
        }

        return searchedAlbums;
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
    getAlbumsFormSearchFromAPI,
    getAlbumInfoFromAPI
}
