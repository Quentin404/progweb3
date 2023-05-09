<template>
    <!-- <div v-if="duration != '0:00'" class="albumRow"> -->
    <div class="albumRow">
        <div class="albumArt">
            <img v-bind:src="cover_art">
            <div class="textTitles">
                <span class="textAlbum">{{ name }}</span>
                <span class="textArtist">{{ artist }}</span>
            </div>
        </div>
        <div class="albumStats">
            <span class="textInfos">{{ nb_tracks }}</span> 
            <span class="textInfos">{{ nb_plays }}</span>
            <span class="textInfos">{{ duration }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'albumRow',
        props: {
            artist: {type: String, required: true, default: "[no artist name]"},
            name: {type: String, required: true, default: "[no album name]"},
            cover_art: {type: String, default: "https://www.bifolcomatty.co.uk/wp-content/uploads/2019/08/placeholder-square.jpg"},
            nb_tracks: {type: Number, default: 0},
            nb_plays: {type: Number, default: 0},
            duration: {type: String, default: "0:00"}
        }
    }
</script>

<style scoped>
    .albumRow {
        display: flex;
        flex-direction: row;
        align-items: center;

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
        margin-right: 1rem;
        border-radius: 5px;
    }

    .textTitles {
        display: flex;
        flex-direction: column;
        justify-self: left;
    }

    .textArtist {
        font-size: 12px;
    }

    .textAlbum{
        font-size: 14px;
    }

    .albumStats  {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-grow: 1;
    }

    .textInfos {
        font-size: 12px;
    }
</style>