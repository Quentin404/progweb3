<template>
    <div class="listList">
        <h2>Listes</h2>
        <!-- <input v-model="query" @keyup.enter="search" type="text" placeholder="Album or artist...">
        <select v-model="howMany" @change="updateHowMany">
            <option value=5>5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
        <p v-if="searchQuery">Looking for {{ searchQuery }}...</p>  -->
        <div class="listList">
            <div 
                v-for="list in lists" 
                :key="list.name"
                class="listContainer">
                <p @click="listSelected(list)">{{ list.name }}</p>
                <svg @click="deleteList(list)" class="removeButton" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'listList',
        props: ['lists'],
        emits: ['listSelected', 'deleteList'],
        methods: {
            listSelected(list) {
                console.log("[debug] listSelected in listList called : " + list.name);
                this.$emit('listSelected', list);
            },
            deleteList(list) {
                console.log("[debug] list to delete: " + list.name);
                this.$emit('deleteList', list);
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

    .listContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p {
        border-radius: 5px;
        background-color: #cacaca;
        padding: 5px 10px;
        flex-grow: 2;
        margin: 5px 0px;
    }

    p:hover {
        cursor: pointer;
    }

    .removeButton {
        margin-left: 10px;
        padding: 4px 5px;
        border-radius: 5px;
        /* background-color: #cacaca; */
    }

    .removeButton:hover {
        cursor: pointer;
    }
</style>