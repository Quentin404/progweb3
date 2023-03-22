<template>
    <div class="rowList">
        <h2>Planned</h2>
        <div class="albumList">
            <albumRow/>
            <albumRow/>
            <albumRow/>
            <albumRow/>
            <albumRow/>
        </div>
    </div>
</template>

<script>
    import albumRow from "./albumRow"

    export default {
        name: 'rowList',
        components: {
            albumRow
        }
    }

    import {getAlbumData} from '@/services/api/lastfmAPI.js'
    console.log(getAlbumData());
</script>

<style scoped>
    .rowList {
        max-width: 75vw;
        padding: .2rem 1rem 1rem;

        background-color: #eaeaea;
        border-radius: 10px;
    }

    .albumList > * {
        margin-bottom: 0.5rem;
    }

    .albumList > *:last-child {
        margin-bottom: 0px;
    }
</style>