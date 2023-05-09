<template>
  <div class="mainContainer">
    <rowList v-bind:albums="searchedAlbumData" @search="retrieveAndTreatAlbumData"/>
    <cardList v-bind:albums="searchedAlbumData"/>
    <listList v-bind:lists="lists"/>
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
      lists : [
        {
          name: "yo",
          albums: [
            {
              name: "Frailty",
              artist: "Jane Remover"
            },
            {
              name: "Starboy",
              artist: "The Weeknd"
            }
          ]
        },
        {
          name: "yo2",
          albums: [
            {
              name: "Frailty",
              artist: "Jane Remover"
            },
            {
              name: "Starboy",
              artist: "The Weeknd"
            }
          ]
        }
      ]
    }
  },
  created: async function() {
    this.retrieveAndTreatAlbumData("four tet", 10);
  },
  methods: {
      async retrieveAndTreatAlbumData(albumName, howMany) {
        this.searchedAlbumData = await getAlbumsFormSearchFromAPI(albumName, howMany);
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
