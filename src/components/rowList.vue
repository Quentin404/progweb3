<template>
    <div class="rowList">
        <h2>Planned</h2>
        <div class="albumList">
            <albumRow 
                v-for="album in albums" 
                :key="album.name"
                :artist="album.artist"
                :name="album.name"
                :cover_art="album.image[1]['#text']"
                :nb_tracks="album.streamable"
                :nb_plays="album.streamable"
                :length="album.streamable"/>
        </div>
    </div>
</template>

<script>
    import albumRow from "./albumRow"

    export default {
        name: 'rowList',
        components: {
            albumRow
        },
        data() {
            return {
                "albums": [
                    {
                        "name": "frailty",
                        "artist": "Jane Remover",
                        "url": "https://www.last.fm/music/Jane+Remover/frailty",
                        "image": [
                            {
                                "#text": "https://lastfm.freetls.fastly.net/i/u/34s/543cc0aee1c6e279f9d8ce4d258bf16d.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm.freetls.fastly.net/i/u/64s/543cc0aee1c6e279f9d8ce4d258bf16d.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm.freetls.fastly.net/i/u/174s/543cc0aee1c6e279f9d8ce4d258bf16d.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/543cc0aee1c6e279f9d8ce4d258bf16d.png",
                                "size": "extralarge"
                            }
                        ],
                        "streamable": "0",
                        "mbid": ""
                    },
                    {
                        "name": "teen week",
                        "artist": "Jane Remover",
                        "url": "https://www.last.fm/music/Jane+Remover/teen+week",
                        "image": [
                            {
                                "#text": "https://lastfm.freetls.fastly.net/i/u/34s/0a6de4088726ae91d043d16dc822d6ff.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm.freetls.fastly.net/i/u/64s/0a6de4088726ae91d043d16dc822d6ff.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm.freetls.fastly.net/i/u/174s/0a6de4088726ae91d043d16dc822d6ff.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/0a6de4088726ae91d043d16dc822d6ff.png",
                                "size": "extralarge"
                            }
                        ],
                        "streamable": "0",
                        "mbid": ""
                    },
                    {
                        "name": "Royal Blue Walls",
                        "artist": "Jane Remover",
                        "url": "https://www.last.fm/music/Jane+Remover/Royal+Blue+Walls",
                        "image": [
                            {
                                "#text": "https://lastfm.freetls.fastly.net/i/u/34s/18ad96e95badb33b0bf5a0278baaf4ac.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm.freetls.fastly.net/i/u/64s/18ad96e95badb33b0bf5a0278baaf4ac.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm.freetls.fastly.net/i/u/174s/18ad96e95badb33b0bf5a0278baaf4ac.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/18ad96e95badb33b0bf5a0278baaf4ac.png",
                                "size": "extralarge"
                            }
                        ],
                        "streamable": "0",
                        "mbid": ""
                    }
                ]
            }
        }
    }

    //import {getAlbumData} from '@/services/api/lastfmAPI.js'
    //let data = getAlbumData();
    //console.log(data);
    //let temp_data = {}
    //console.log(temp_data.albums[0].image[0]["#text"]);

</script>

<style scoped>
    .rowList {
        max-width: 75vw;
        padding: .2rem 1rem 1rem;

        background-color: #eaeaea;
        border-radius: 5px;
    }

    .albumList > * {
        margin-bottom: 1rem;
    }

    .albumList > *:last-child {
        margin-bottom: 0px;
    }
</style>