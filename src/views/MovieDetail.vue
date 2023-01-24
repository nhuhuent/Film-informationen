<template>
   
    <div class="movie-detail">
        <h2>{{ movie.Title }}</h2>
        <h3 class ="year">{{ movie.Year }}</h3>
        <img :src="movie.Poster" alt= "Movie Poster" class="featured-img"/>
        <p class ="plot" >{{ movie.Plot }}</p>
    </div>
    <div class="row g-3 align-items-center">
    <div class ="col-auto d-block mx-auto">
      <button type ="button" @click="filmpage" class ="btn btn-secondary">Zurück zu Filme suche  </button> &nbsp;&nbsp;&nbsp;
      <button type ="button" @click="sierepage" class ="btn btn-secondary">Zurück zu Serien suche  </button> &nbsp;&nbsp;&nbsp;
    </div>
  </div>
  </template>
  
  <script>

  import {ref,onBeforeMount} from 'vue';
  import {useRoute} from 'vue-router';
  import env  from '@/env.js';

  export default {
    setup (){
        const movie = ref({});
        const route =useRoute();
        onBeforeMount(() => {
            fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
            .then(response => response.json())
            .then(data => {
                movie.value=data;
            });
        });
        return{
            movie
        }
    },
    methods : {
        filmpage(){
        this.$router.push({name :"filme"});
      },
      sierepage (){
        this.$router.push({name :"serie"});
      }

    },
  
  }
  </script>
  
  <style lang="scss">
  .movie-detail {
    padding: 16px;
  
    h2 {
      text-align: center;
      color: white;
      font-size: 28px;
      font-weight: bold;
      padding: 10px;
    }
    .featured-img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 40%;
      border-radius: 10px 10px;
    }
    .year {
      color: white;
      font-size: 20px;
      text-align: center;
      line-height: 1.4;
      margin-left: 0;
    }
    .plot {
      color: white;
      font-size: 24px;
      text-align: center;
    }
  }
  </style>
  