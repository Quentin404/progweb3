let getAlbumDuration = function(tracks) {
    let duration = 0;
    tracks.forEach(e => {
        duration += e.duration;
    });
    return convertToBeautifulTime(duration);
}

let convertToBeautifulTime = function(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return minutes + ":" + seconds.toString().padStart(2, '0');
}

export {
    getAlbumDuration,
    convertToBeautifulTime
}