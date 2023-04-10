<!-- :cover_art="album.image[1]['#text']" -->
<template>
    <div class="rowList">
        <h2>Planned</h2>
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
            this.albumData = await this.retrieveAlbumData();
            this.albumData = this.albumData.results.albummatches.album;
            console.log(this.albumData);
        },
        methods: {
            async retrieveAlbumData() {
                return await getAlbumData();
                //console.log(this.albumData);
            }
        }
    }

    //let data = getAlbumData();
    //data.then(result => {console.log(result);})

    
    //console.log(data);
    // let temp_data = {}
    // console.log(temp_data.albums[0].image[0]["#text"]);

</script>

<style scoped>
    .rowList {
        max-width: 75vw;
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