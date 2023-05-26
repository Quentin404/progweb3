<template>
    <div class="displayModule">
        <h2 v-if="list.name !== undefined">{{ list.name }}</h2>
        <p v-if="list.name == undefined">Créez une liste dans la bibliothèque à droite puis ajoutez des albums dedans !</p>
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
        name: 'displayModule',
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
    .displayModule {
        flex: 3;
        display: flex;
        flex-direction: column;
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