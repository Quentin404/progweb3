<template>
    <div class="albumCard">
        <img v-bind:src="album.image">
        <div class="textTitles">
            <a :href="album.url" target="_blank">
                <span class="textAlbum" :title="album.name">{{ trunc(album.name, 42) }}</span>
            </a>
            <span class="textArtist" :title="album.artist">{{ trunc(album.artist, 42) }}</span>
            <span class="textInfos">{{ album.duration }}</span>
            <svg @click="removeButtonEvent(album)" class="removeButton" style="fill: white;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg>
        </div>
    </div>
</template>

<script>
    import { truncIfTooBig } from "../services/utils"
    
    export default {
        name: 'albumCard',
        props: {
            album: {type: Object, required: true}
        },
        emits: ['removeButtonEvent'],
        methods: {
            removeButtonEvent(album) {
                this.$emit('removeButtonEvent', album);
            },
            trunc(albumName, limit) {
                return truncIfTooBig(albumName, limit);
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

        background-color: #41456F;
        border-radius: 5px;
    }

    img {
        width: 150px;
        height: 150px;
        border-radius: 5px;
    }

    a {
        color: #FFF;
        text-decoration: none;
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
        overflow-x: hidden;
    }

    .textInfos {
        font-size: 12px;
    }
    
    .removeButton:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 1000px) {

    .albumCard {
        max-width: 100px;
    }

    img {
        width: 100px;
        height: 100px;
    }

    .textArtist {
        font-size: 10px;
    }

    .textAlbum{
        font-size: 12px;
        max-height: 50px;
        overflow-x: hidden;
    }

  }
</style>