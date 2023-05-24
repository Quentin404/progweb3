<template>
    <div class="cardList">
        <h2 v-if="list">{{ list.name }}</h2>
        <h2 v-if="!list"> Vous n'avez pas de liste !</h2>
        <div v-if="list" class="albumGallery">
            <albumCard 
                v-for="album in list.albums" 
                :key="album"
                :album="album"
                @removeButtonEvent="removeButtonEvent"
            />
        </div>
    </div>
</template>

<script>
    import albumCard from "./albumCard"

    export default {
        name: 'cardList',
        props: ['list'],
        emits: ['removeButtonEvent'],
        components: {
            albumCard
        },
        methods: {
            removeButtonEvent(album) {
                this.$emit('removeButtonEvent', album);
            }
        }
    }

</script>

<style scoped>
    .cardList {
        flex: 3;
        display: flex;
        flex-direction: column;
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
        
        overflow-y: auto;
    }
</style>