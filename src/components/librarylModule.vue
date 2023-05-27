<template>
    <div class="librarylModule">
        <h2>Bibliothèque</h2>
        <div class="lists">
            <div 
                v-for="list in lists" 
                :key="list"
                class="listContainer">
                <p @click="listSelected(list)" :title="list.name">{{ truncListName(list.name, 20) }}</p>
                <svg @click="removeList(list)" style="fill: white;" class="removeButton" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg>
            </div>
        </div>
        <div class="addListModule">
            <input v-model="newListName" @keyup.enter="createList" type="text" placeholder="Nouvelle liste...">
            <button @click="createList">Ajouter</button>
        </div>
    </div>
</template>

<script>
    import { truncIfTooBig } from "../services/utils"

    export default {
        name: 'librarylModule',
        props: ['lists'],
        emits: ['listSelected', 'removeList', 'addNewList'],
        data() {
            return {
                newListName: ''
            }
        },
        methods: {
            listSelected(list) {
                this.$emit('listSelected', list);
            },
            removeList(list) {
                this.$emit('removeList', list);
            },
            createList() {
                if (this.newListName.trim() !== "") {
                    let newList = {name: this.newListName, albums: []};
                    this.newListName = "";
                    this.$emit('addNewList', newList);
                }
            },
            truncListName(listName, limit) {
                return truncIfTooBig(listName, limit);
            }
        }
    }

</script>

<style scoped>
    .librarylModule {
        flex: 1;
        padding: .2rem 1rem 1rem;
        display: flex;
        flex-direction: column;

        background-color: #2F3251;
        border-radius: 5px;
    }

    .lists {
        overflow-y: auto;
    }

    .listContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p {
        border-radius: 5px;
        background-color: #41456F;
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
    }

    .removeButton:hover {
        cursor: pointer;
    }

    .addListModule {
        display: flex;
        margin-top: 10px;
    }

    input {
        flex-grow: 1;
    }

</style>