let getAlbumDuration = function(tracks) {
    let duration = 0;
    tracks.forEach(e => {
        duration += e.duration;
    });
    return duration;
}

let convertToBeautifulTime = function(duration) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;
    return (hours > 0 ? hours + ':' : '') + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

let truncIfTooBig = function(name, limit) {
    if (name.length <= limit) {
        return name;
    } else {
        return name.slice(0, limit) + '…';
    }
}

export {
    getAlbumDuration,
    convertToBeautifulTime,
    truncIfTooBig
}