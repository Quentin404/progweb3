<template>
  <div class="mainContainer">
    <rowList v-bind:albums="searchedAlbumData"/>
    <cardList v-bind:albums="searchedAlbumData"/>
  </div>
</template>

<script>
import rowList from "./components/rowList"
import cardList from "./components/cardList"
import { getAlbumData } from "./services/api/lastfmAPI";

export default {
  name: 'App',
  components: {
    rowList, 
    cardList
  },
  data() {
    return {
      searchedAlbumData: []
    }
  },
  created: async function() {
    let tempArray = await this.retrieveAlbumData("Kero Kero Bonito", 32);
    tempArray = tempArray.results.albummatches.album;
    tempArray.forEach(e => {
      if (e.name != "(null)") {
        this.searchedAlbumData.push(e);
      }
    });
  },
  methods: {
    async retrieveAlbumData(albumName, howMany) {
      return await getAlbumData(albumName, howMany);
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
