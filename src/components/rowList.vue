<template>
    <div class="rowList">
        <h2>Explorer</h2>
        <select v-model="howMany" @change="updateHowMany">
            <option value=5>5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
        <input v-model="query" @keyup.enter="search" type="text" placeholder="Album or artist...">
        <p v-if="isLoading">🔄 Looking for {{ searchQuery }}...</p>
        <div class="albumList">
            <albumRow 
                v-for="album in albums" 
                :key="album.name"
                :album="album"
            />
        </div>
    </div>
</template>

<script>
    import albumRow from "./albumRow"

    export default {
        name: 'rowList',
        props: {
            ['albums']:{},
            isLoading: {
                type: Boolean,
                required: true
            }
        },
        emits: ['search'],
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
                console.log("[debug] search in rowList called : " + this.query);
                this.$emit('search', this.query, this.howMany);
                this.searchQuery = this.query;
                this.query = "";
            },
            updateHowMany() {
                console.log("[debug] howMany select has been updated");
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

    input {
        margin-bottom: 1rem;
        width: 80%;
    }
</style>