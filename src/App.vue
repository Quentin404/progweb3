<template>
  <div class="mainContainer">
    <rowList v-bind:albums="searchedAlbumData" @search="retrieveAndTreatAlbumData"/>
    <cardList v-bind:albums="searchedAlbumData"/>
  </div>
</template>

<script>
import rowList from "./components/rowList"
import cardList from "./components/cardList"
import { getAlbumDataFromAPI } from "./services/api/lastfmAPI";
import { getAlbumInfoFromAPI } from "./services/api/lastfmAPI";
import { getAlbumDuration } from "./services/albumFunctions";
import { convertToBeautifulTime } from "./services/albumFunctions";

export default {
  name: 'App',
  components: {
    rowList, 
    cardList
  },
  data() {
    return {
      searchedAlbumData: [],
      retrievedQuery: " "
    }
  },
  created: async function() {
    // let tempArray = await this.retrieveAlbumData("Kero Kero Bonito", 32);
    // tempArray = tempArray.results.albummatches.album;
    // tempArray.forEach(e => {
    //   if (e.name != "(null)") {
    //     this.searchedAlbumData.push(e);
    //   }
    // });
    // // TODO for later : store in local datas last search to show up when the page is loaded
  },
  methods: {
      async retrieveAlbumDataFromAPI(albumName, howMany) {
        return await getAlbumDataFromAPI(albumName, howMany);
      },
      async retrieveAndTreatAlbumData(albumName, HowMany) {
        this.searchedAlbumData = [];
        // get the general album data
        let tempArray = await this.retrieveAlbumDataFromAPI(albumName, HowMany);
        tempArray = tempArray.results.albummatches.album;
        let albumInfoPromises = tempArray.map(e => { 
          if (e.name != "(null)") {
            this.searchedAlbumData.push(e);
            return getAlbumInfoFromAPI(e.artist, e.name);
          }
        });
        let albumInfoData = await Promise.all(albumInfoPromises);
        // update of the searchedAlbumData array with the album info
        console.log("[debug] NB OF ALBUMS TO UPDATE: " + this.searchedAlbumData.length);
        for (let i = 0; i < this.searchedAlbumData.length; i++){ 
          if (albumInfoData[i]) { // there are at least one track
            if (albumInfoData[i].album.tracks && Array.isArray(albumInfoData[i].album.tracks.track)) { // multiple tracks
              this.searchedAlbumData[i].nb_tracks = albumInfoData[i].album.tracks.track.length;
              this.searchedAlbumData[i].duration = getAlbumDuration(albumInfoData[i].album.tracks.track);
            }
            else { // no tracks (single)
              this.searchedAlbumData[i].nb_tracks = 1;
              this.searchedAlbumData[i].duration = convertToBeautifulTime(albumInfoData[i].album.tracks.track.duration);
            }
            this.searchedAlbumData[i].playcount = albumInfoData[i].album.playcount;
          }
          else { // no tracks album (no idea why last.fm have those, maybe for regional exclusives? weird)
            this.searchedAlbumData[i].nb_tracks = 0;
            this.searchedAlbumData[i].duration = "0:00";
            this.searchedAlbumData[i].playcount = 0;
          }
        }
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
