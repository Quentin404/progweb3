<template>
  <div class="mainContainer">
    <searchModule v-bind:albums="searchedAlbumData" @search="retrieveAndTreatAlbumData" @addButtonEvent="addAlbum" :isLoading="isSearchLoading"/>
    <displayModule v-bind:list="currentList" @removeButtonEvent="removeAlbum"/>
    <librarylModule v-bind:lists="lists" @listSelected="listSelectedHandler" @removeList="removeList" @addNewList="addList"/>
  </div>
</template>

<script>
import searchModule from "./components/searchModule"
import displayModule from "./components/displayModule"
import librarylModule from "./components/librarylModule"
import { getAlbumsFormSearchFromAPI } from "./services/lastfm";

export default {
  name: 'App',
  components: {
    searchModule, 
    displayModule,
    librarylModule
  },
  data() {
    return {
      searchedAlbumData: [],
      retrievedQuery: " ",
      isSearchLoading: false,
      lists : [],
      currentList : {}
    }
  },
  created: function() {
    const savedLists = localStorage.getItem('lists');
    if (savedLists) {
      this.lists = JSON.parse(savedLists);
    }
  },
  methods: {
      async retrieveAndTreatAlbumData(albumName, howMany) {
        this.isSearchLoading = true;
        this.searchedAlbumData = await getAlbumsFormSearchFromAPI(albumName, howMany);
        this.isSearchLoading = false;
      },
      listSelectedHandler(list) {
        this.currentList = {};
        this.currentList = list;
      },
      addAlbum(album) {
        if (this.currentList.albums) {
          if (this.currentList.albums.find(albumInList => albumInList === album)) {
            alert("Cet album est déjà dans la liste !");
          }
          else {
            this.currentList.albums.push(album);
            this.updateCache();
          }
        }
        else {
          alert("Vous n'avez aucune liste dans laquelle ajouté cet album !");
        }
      },
      removeAlbum(album) {
        this.currentList.albums = this.currentList.albums.filter(albumInList => albumInList !== album);
        this.updateCache();
      },
      addList(newList) {
        this.lists.push(newList);
        this.currentList = newList;
        this.updateCache();
      },
      removeList(listToDelete) {
        const userConfirmation = window.confirm("Êtes-vous sûr de vouloir supprimer la liste " + listToDelete.name + " ?");
        if (userConfirmation) {
          this.lists = this.lists.filter(listInLists => listInLists !== listToDelete);
          this.updateCache();
          if (this.currentList == listToDelete && this.lists.length > 0) {
            this.currentList = this.lists[0];
          } else if (this.lists.length === 0) {
            this.currentList = {};
          }
        }
      },
      updateCache() {
        localStorage.setItem('lists', JSON.stringify(this.lists));
      }
  }
}
</script>

<style>
  body   {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .mainContainer {
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 98vh;
  }

</style>
