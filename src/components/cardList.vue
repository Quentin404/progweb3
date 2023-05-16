<template>
    <div class="cardList">
        <h2>{{ list.name }}</h2>
        <div class="albumGallery">
            <albumCard 
                v-for="album in list.albums" 
                :key="album.name"
                :artist="album.artist"
                :cover_art="album.image"
                :name="album.name"
                :duration="album.duration"
            />
        </div>
    </div>
</template>

<script>
    import albumCard from "./albumCard"

    export default {
        name: 'cardList',
        props: ['list'],
        components: {
            albumCard
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
        
        height: 88vh;
        overflow-y: auto;
    }
</style>