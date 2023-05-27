<template>
    <!-- <div v-if="duration != '0:00'" class="albumRow"> -->
    <div class="albumRow">
        <div class="albumArt">
            <img v-bind:src="album.image">
            <div class="textTitles">
                <a :href="album.url" target="_blank">
                    <span class="textAlbum" :title="album.name">{{ trunc(album.name, 42) }}</span>
                </a>
                <span class="textArtist" :title="album.artist" >{{ trunc(album.artist, 42) }}</span>
            </div>
        </div>
        <div class="albumStats">
            <span class="textInfos">{{ album.nb_tracks }}</span> 
            <span class="textInfos">{{ album.playcount }}</span>
            <span class="textInfos">{{ album.duration }}</span>
            <svg @click="addButtonEvent(album)" class="addIcon" style="fill: white;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
        </div>
    </div>
</template>

<script>
    import { truncIfTooBig } from "../services/utils"

    export default {
        name: 'albumRow',
        props: {
            album: {type: Object, required: true}
        },
        emits: ['addButtonEvent'],
        methods: {
            addButtonEvent(album) {
                this.$emit('addButtonEvent', album);
            },
            trunc(albumName, limit) {
                return truncIfTooBig(albumName, limit);
            }
        }
    }
</script>

<style scoped>
    .albumRow {
        display: flex;
        flex-direction: row;
        align-items: center;

        background-color: #41456F;
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

    a {
        color: #FFF;
        text-decoration: none;
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

    .addIcon:hover {
        cursor: pointer;
    }
</style>