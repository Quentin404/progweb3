<template>
    <div class="albumCard">
        <img v-bind:src="album.image">
        <div class="textTitles">
            <span class="textAlbum">{{ album.name }}</span>
            <span class="textArtist">{{ album.artist }}</span>
            <span class="textInfos">{{ album.duration }}</span>
            <svg @click="removeButtonEvent(album)" class="removeButton" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'albumCard',
        props: {
            album: {type: Object, required: true}
        },
        emits: ['removeButtonEvent'],
        methods: {
            removeButtonEvent(album) {
                this.$emit('removeButtonEvent', album);
            }
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
        font-size: 12px;
    }
    
    .removeButton:hover {
        cursor: pointer;
    }
</style>