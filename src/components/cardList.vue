<template>
    <div class="cardList">
        <h2>Planned</h2>
        <div class="albumGallery">
            <albumCard 
                v-for="album in albumData" 
                :key="album.name"
                :artist="album.artist"
                :cover_art="album.image[2]['#text']"
                :name="album.name"
                :nb_tracks="album.streamable"
                :nb_plays="album.streamable"
                :length="album.streamable"
            />
        </div>
    </div>
</template>

<script>
    import albumCard from "./albumCard"
    import {getAlbumData} from '@/services/api/lastfmAPI.js'

    export default {
        name: 'cardList',
        components: {
            albumCard
        },
        data() {
            return {
                albumData: []
            }
        },
        created: async function() {
            this.albumData = await this.retrieveAlbumData("Frost Children", 10);
            this.albumData = this.albumData.results.albummatches.album;
        },
        methods: {
            async retrieveAlbumData(albumName, howMany) {
                return await getAlbumData(albumName, howMany);
            }
        }
    }

</script>

<style scoped>
    .cardList {
        flex: 3;
        max-width: 75vw;
        min-width: 33vw;
        padding: .2rem 1rem 1rem;

        background-color: #eaeaea;
        border-radius: 5px;
    }
    .albumGallery {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>