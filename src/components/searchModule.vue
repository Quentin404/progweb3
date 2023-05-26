<template>
    <div class="searchModule">
        <h2>Recherche</h2>
        <div class="inputs">
            <select v-model="howMany">
                <option value=5>5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
            <input v-model="query" @keyup.enter="search" type="text" placeholder="Album ou artiste...">
            <button @click="search" >Rechercher</button>
        </div>
        <p v-if="isLoading && searchQuery">🔄 Recherche de "{{ trunc(searchQuery, 42) }}"</p>
        <p v-if="!isLoading && searchQuery">🔍 Résultats pour "{{ trunc(searchQuery, 42) }}"</p>
        <div class="albumList">
            <albumRow 
                v-for="album in albums" 
                :key="album"
                :album="album"
                @addButtonEvent="addButtonEvent"
            />
            <p v-if="!albums[0] && searchQuery && !isLoading">😔 Rien de rien...</p>
        </div>
    </div>
</template>

<script>
    import albumRow from "./albumRow"
    import { truncIfTooBig } from "../services/utils"

    export default {
        name: 'searchModule',
        props: {
            ['albums']:{},
            isLoading: {
                type: Boolean,
                required: true
            }
        },
        emits: ['search', 'addButtonEvent'],
        components: {
            albumRow
        },
        data() {
            return {
                query: '',
                searchQuery: '',
                howMany: 10,
            }
        },
        methods: {
            search() {
                if (this.query.trim() !== "") {
                    this.$emit('search', this.query, this.howMany);
                    this.searchQuery = this.query;
                    this.query = "";
                }
            },
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
    .searchModule {
        flex: 1;
        min-width: 33vw;
        padding: .2rem 1rem 1rem;
        display: flex;
        flex-direction: column;

        background-color: #2F3251;
        border-radius: 5px;
    }

    .albumList {
        overflow-y: auto;
    }

    .albumList > * {
        margin-bottom: 1rem;
    }

    .albumList > *:last-child {
        margin-bottom: 0px;
    }

    .inputs {
        margin-bottom: 1rem;
        display: flex;
    }

    input {
        flex-grow: 1;
    }
</style>