<template>
    <div class="rowList">
        <h2>Research</h2>
        <div class="albumList">
            <albumRow 
                v-for="album in albums" 
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

    export default {
        name: 'rowList',
        props: ['albums'],
        components: {
            albumRow
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

    .albumList {
        height: 88vh;
        overflow-y: auto;
    }

    .albumList > * {
        margin-bottom: 1rem;
    }

    .albumList > *:last-child {
        margin-bottom: 0px;
    }
</style>