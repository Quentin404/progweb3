<template>
  <div class="mainContainer">
    <rowList v-bind:albums="searchedAlbumData" @search="retrieveAndTreatAlbumData" @addButtonEvent="addButtonEvent" :isLoading="isSearchLoading"/>
    <cardList v-bind:list="currentList" @removeButtonEvent="removeButtonEvent"/>
    <listList v-bind:lists="lists" @listSelected="listSelectedHandler" @deleteList="deleteList" @addNewList="addNewList"/>
  </div>
</template>

<script>
import rowList from "./components/rowList"
import cardList from "./components/cardList"
import listList from "./components/listList"
import { getAlbumsFormSearchFromAPI } from "./services/api/lastfmAPI";

export default {
  name: 'App',
  components: {
    rowList, 
    cardList,
    listList
  },
  data() {
    return {
      searchedAlbumData: [],
      retrievedQuery: " ",
      isSearchLoading: false,
      lists : [
        {
          name: "yo",
          albums: [
            {
              name: "Frailty",
              artist: "Jane Remover",
              image: "https://static.planetminecraft.com/files/image/minecraft/texture-pack/2020/382/13177875-pack_l.jpg",
              duration: "999:99",
              index: 0
            },
            {
              name: "Starboy",
              artist: "The Weeknd",
              image: "https://static.planetminecraft.com/files/image/minecraft/texture-pack/2020/382/13177875-pack_l.jpg",
              duration: "999:99",
              index: 1
            }
          ]
        },
        {
          name: "yo2",
          albums: [
            {
              name: "4x4=12",
              artist: "deadmau5",
              image: "https://static.planetminecraft.com/files/image/minecraft/texture-pack/2020/382/13177875-pack_l.jpg",
              duration: "999:99",
              index: 0
            },
            {
              name: "Strobe",
              artist: "deadmau5",
              image: "https://static.planetminecraft.com/files/image/minecraft/texture-pack/2020/382/13177875-pack_l.jpg",
              duration: "999:99",
              index: 1
            }
          ]
        },
        {
          name: "yo3",
          albums: [
            {
              name: "Pause",
              artist: "Four Tet",
              image: "https://static.planetminecraft.com/files/image/minecraft/texture-pack/2020/382/13177875-pack_l.jpg",
              duration: "999:99",
              index: 0
            },
            {
              name: "Pink",
              artist: "Four Tet",
              image: "https://static.planetminecraft.com/files/image/minecraft/texture-pack/2020/382/13177875-pack_l.jpg",
              duration: "999:99",
              index: 1
            }
          ]
        }
      ],
      currentList : {}
    }
  },
  created: async function() {
    console.log(this.currentList);
    this.retrieveAndTreatAlbumData("four tet", 10);
    this.currentList = this.lists[0];
  },
  methods: {
      async retrieveAndTreatAlbumData(albumName, howMany) {
        this.isSearchLoading = true;
        this.searchedAlbumData = await getAlbumsFormSearchFromAPI(albumName, howMany);
        this.isSearchLoading = false;
      },
      listSelectedHandler(list) {
        // console.log(this.lists.find(list => list.name === listname));
        this.currentList = {};
        this.currentList = list;
      },
      addButtonEvent(album) {
        console.log("album to add, that has been transported to App.vue :")
        console.log(album);
        // checks if album already in list
        if (this.currentList.albums.find(albumInList => albumInList === album)) {
          console.log("Album already in list");
        }
        else {
          this.currentList.albums.push(album);
        }
      },
      removeButtonEvent(album) {
        console.log("album to REMOVE, that has been transported to App.vue :")
        console.log(album);
        this.currentList.albums = this.currentList.albums.filter(albumInList => albumInList !== album);
      },
      deleteList(listToDelete) {
        console.log("list to REMOVE, that has been transported to App.vue :")
        console.log(listToDelete);
        const userConfirmation = window.confirm("Êtes-vous sûr de vouloir supprimer la liste " + listToDelete.name + " ?");
        if (userConfirmation) {
          this.lists = this.lists.filter(listInLists => listInLists !== listToDelete);
          if (this.currentList == listToDelete) {
            this.currentList = this.lists[0];
          }
        }
      },
      addNewList(newList) {
        this.lists.push(newList);
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
