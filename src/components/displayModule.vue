<template>
    <div class="displayModule">
        <div class="title">
            <h2 v-if="list.name !== undefined">{{ list.name }}</h2>
            <select v-if="list.name !== undefined" @change="sortAlbums($event.target.value, list)">
                <option value="mostRecent">Les plus récemment ajouté(s)</option>
                <option value="mostOld">Les plus anciennement ajouté(s)</option>
                <option value="alphabetical">Tri alphabétique</option>
                <option value="reverseAlphabetical">Tri alphabétique inverse</option>
                <option value="longest">Les plus longs</option>
                <option value="shortest">Les plus courts</option>
            </select>
        </div>
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
        data() {
            return {
                sortedAlbums: []
            }
        },
        methods: {
            removeButtonEvent(album) {
                this.$emit('removeButtonEvent', album);
            },
            sortAlbums(sort, list) {
                switch(sort) {
                    case 'mostRecent':
                        list.albums.sort((a, b) => b.addedAt - a.addedAt);
                        break;
                    case 'mostOld':
                        list.albums.sort((a, b) => a.addedAt - b.addedAt);
                        break;
                    case 'alphabetical':
                        list.albums.sort((a, b) => a.name.localeCompare(b.name));
                        break;
                    case 'reverseAlphabetical':
                        list.albums.sort((a, b) => b.name.localeCompare(a.name));
                        break;
                    case 'longest':
                        list.albums.sort((a, b) => a.durationInSeconds - b.durationInSeconds);
                        break;
                    case 'shortest':
                        list.albums.sort((a, b) => b.durationInSeconds - a.durationInSeconds);
                        break;
                }
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

    .title {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
    .albumGallery {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        
        overflow-y: auto;
    }
</style>