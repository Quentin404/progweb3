<template>
    <div class="rowList">
        <h2>Research</h2>
        <div class="albumList">
            <albumRow 
                v-for="album in albumData" 
                :key="album.name"
                :artist="album.artist"
                :cover_art="album.image[1]['#text']"
                :name="album.name"
                :nb_tracks="album.streamable"
                :nb_plays="album.streamable"
                :length="album.streamable"
            />
        </div>
    </div>
</template>

<script>
    import albumRow from "./albumRow"
    import {getAlbumData} from '@/services/api/lastfmAPI.js'

    export default {
        name: 'rowList',
        components: {
            albumRow
        },
        data() {
            return {
                albumData: []
            }
        },
        created: async function() {
            this.albumData = await this.retrieveAlbumData("Men I Trust", 10);
            this.albumData = this.albumData.results.albummatches.album;
            console.log(this.albumData);
        },
        methods: {
            async retrieveAlbumData(albumName, howMany) {
                return await getAlbumData(albumName, howMany);
            }
        }
    }

</script>

<style scoped>
    .rowList {
        flex: 1;
        max-width: 75vw;
        min-width: 33vw;
        padding: .2rem 1rem 1rem;

        background-color: #eaeaea;
        border-radius: 5px;
    }

    .albumList > * {
        margin-bottom: 1rem;
    }

    .albumList > *:last-child {
        margin-bottom: 0px;
    }
</style>