<template>
    <div class="albumCard">
        <div class="albumArt">
            <img v-bind:src="cover_art">
            <div class="textTitles">
                <span class="textArtist">{{ artist }}</span>
                <span class="textAlbum">{{ name }}</span>
            </div>
        </div>
        <div class="albumStats">
            <span class="textInfos">{{ nb_tracks }}</span> 
            <span class="textInfos">{{ nb_plays }}</span>
            <span class="textInfos">{{ length }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'albumCard',
        props: {
            artist: {type: String, required: true},
            name: {type: String, required: true},
            cover_art: {type: String, default: "https://www.bifolcomatty.co.uk/wp-content/uploads/2019/08/placeholder-square.jpg"},
            nb_tracks: {type: String, required: true},
            nb_plays: {type: String, required: true},
            length: {type: String, required: true}
        }
    }
</script>

<style scoped>
    .albumCard {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        /* align-items: center; */
        flex-direction: column;

        width: 150px;

        background-color: #cacaca;
        border-radius: 5px;
    }
    
    .albumArt {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: 3.5rem;
        width: 66%;
    }

    img {
        height: 100%;
        width: auto;
        margin-right: 2rem;
        border-radius: 5px;
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