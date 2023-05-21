<template>
    <div class="listList">
        <h2>Lists</h2>
        <!-- <input v-model="query" @keyup.enter="search" type="text" placeholder="Album or artist...">
        <select v-model="howMany" @change="updateHowMany">
            <option value=5>5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
        <p v-if="searchQuery">Looking for {{ searchQuery }}...</p>  -->
        <div class="listList">
            <p 
                v-for="list in lists" 
                :key="list.name"
                @click="listSelected(list)"
            >
            {{ list.name }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'listList',
        props: ['lists'],
        emits: ['listSelected'],
        // components: {
        //     albumRow
        // },
        // data() {
        //     return {
        //         query: '',
        //         searchQuery: '',
        //         howMany: 10,
        //     }
        // },
        methods: {
            listSelected(list) {
                console.log("[debug] listSelected in listList called : " + list.name);
                this.$emit('listSelected', list.name);
            }
        }
    }

</script>

<style scoped>
    .listList {
        flex: 1;
        max-width: 33vw;
        padding: .2rem 1rem 1rem;

        background-color: #eaeaea;
        border-radius: 5px;
    }
    p {
        border-radius: 5px;
        background-color: #cacaca;
        padding: 5px 10px;
    }
    p:hover {
        cursor: pointer;
    }
</style>