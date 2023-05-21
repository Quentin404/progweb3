<template>
  <div class="mainContainer">
    <rowList v-bind:albums="searchedAlbumData" @search="retrieveAndTreatAlbumData" :isLoading="isSearchLoading" />
    <cardList v-bind:list="currentList"/>
    <listList v-bind:lists="lists" @listSelected="listSelectedHandler"/>
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
              image: "x",
              duration: "999:99"
            },
            {
              name: "Starboy",
              artist: "The Weeknd",
              image: "x",
              duration: "999:99"
            }
          ]
        },
        {
          name: "yo2",
          albums: [
            {
              name: "4x4=12",
              artist: "deadmau5",
              image: "x",
              duration: "999:99"
            },
            {
              name: "Strobe",
              artist: "deadmau5",
              image: "x",
              duration: "999:99"
            }
          ]
        }
      ],
      currentList : {
          name: "yo2",
          albums: [
            {
              name: "4x4=12",
              artist: "deadmau5",
              image: "x",
              duration: "999:99"
            },
            {
              name: "Strobe",
              artist: "deadmau5",
              image: "x",
              duration: "999:99"
            }
          ]
        }
    }
  },
  created: async function() {
    console.log(this.currentList);
    this.retrieveAndTreatAlbumData("four tet", 10);
  },
  methods: {
      async retrieveAndTreatAlbumData(albumName, howMany) {
        this.isSearchLoading = true;
        this.searchedAlbumData = await getAlbumsFormSearchFromAPI(albumName, howMany);
        this.isSearchLoading = false;
      },
      listSelectedHandler(listname) {
        console.log(this.lists.find(list => list.name === listname));
        this.currentList = this.lists.find(list => list.name === listname);
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
