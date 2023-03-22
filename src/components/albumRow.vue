<template>
    <div class="albumRow">
        <div class="albumArt">
            <img src="https://lastfm.freetls.fastly.net/i/u/174s/a217ddc5794aecd2081bda7e2e789782.jpg" alt="">
            <div class="textTitles">
                <span class="textArtist">artist</span>
                <span class="textAlbum">album_name</span>
            </div>
        </div>
        <div class="albumStats">
            <span class="textInfos" alt="nb tracks">999</span> 
            <span class="textInfos" alt="nb plays">72120</span>
            <span class="textInfos" alt="lenght">10:23</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'albumRow'
    }
</script>

<style scoped>
    .albumRow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        background-color: #cacaca;
        border-radius: 10px;
    }
    
    .albumArt {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: 3.5rem;
        flex-grow: 1.5;
    }

    img {
        height: 100%;
        width: auto;
        margin-right: 2rem;
        border-radius: 10px;
    }

    .textTitles {
        display: flex;
        flex-direction: column;
        justify-self: left;
    }

    .textArtist {
        font-size: 14px;
    }

    .textAlbum{
        font-size: 12px;
    }

    .albumStats  {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-grow: 1;
    }

    .textInfos {
        font-size: 16px;
    }
</style>