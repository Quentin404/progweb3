<template>
  <div class="mainContainer">
    <rowList/>
    <cardList/>
  </div>
</template>

<script>
import rowList from "./components/rowList"
import cardList from "./components/cardList"

export default {
  name: 'App',
  components: {
    rowList, 
    cardList
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
