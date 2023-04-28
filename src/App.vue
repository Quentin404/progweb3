<template>
  <div class="mainContainer">
    <rowList/>
    <cardList/>
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
    this.searchedAlbumData = await this.retrieveAlbumData("Four Tet", 8);
    this.searchedAlbumData = this.searchedAlbumData.results.albummatches.album;
    console.log(this.searchedAlbumData);
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
  }

</style>
