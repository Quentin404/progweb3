<template>
    <div class="albumCard">
        <img v-bind:src="cover_art">
        <div class="textTitles">
            <span class="textAlbum">{{ name }}</span>
            <span class="textArtist">{{ artist }}</span>
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
            length: {type: String, required: true}
        }
    }
</script>

<style scoped>
    .albumCard {
        display: flex;
        gap: 10px;
        flex-direction: column;

        max-width: 150px;

        background-color: #cacaca;
        border-radius: 5px;
    }

    img {
        width: 150px;
        height: 150px;
        border-radius: 5px;
    }

    .textTitles {
        display: flex;
        flex-direction: column;
        justify-self: left;
        padding: 0 6px 4px;
    }

    .textArtist {
        font-size: 12px;
    }

    .textAlbum{
        font-size: 14px;
        max-height: 60px;
        overflow-y: auto;
    }

    .textInfos {
        font-size: 10px;
    }
</style>