<template>
  <Header />
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt0409591">
        <img alt="Superman Poster " src="../assets/superman.png" class="featured-img" />

        <div class="detail">
          <h3>Superman</h3>
          <p>
            Superman (alternativer deutscher Titel: Superman – Der Film) ist ein
            Science-Fiction-Film aus dem Jahr 1978 und zugleich der erste Teil der
            erfolgreichen Comicverfilmungen um die Geschichte des von Jerry Siegel und Joe
            Shuster geschaffenen Comichelden Superman.
          </p>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="SearchMovies()" class="search-box" v-cloak>
      <input type="text" placeholder="Was suchst du ?" v-model="search" />
      <input type="submit" value="Suchen" />
    </form>
    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="product-image">
            <img :src="movie.Poster" alt="Movie Poster" />
            <div class="type">{{ movie.Type }}</div>
          </div>
          <div class="detail">
            <p class="year">{{ movie.Year }}</p>
            <h3>{{ movie.Title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import env from "@/env";
import Header from "@/components/Header.vue";

export default {
  name: 'FilmeCom',
  setup() {
    const search = ref("");
    const movies = ref([]);
    const SearchMovies = () => {
      if (search.value != "") {
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.Search;
            search.value = "";
            console.log(movies.value);
          });
      }
    };
    return {
      search,
      movies,
      SearchMovies,
    };
  },
  components: {
    Header,
  },
};
</script>
<style lang="scss">
.featured-img {
  padding: 35px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  height: 650px;
}
.home {
  .feature-card {
    position: relative;

    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index: 1;
      h3 {
        color: #fff;
        margin-bottom: 16px;
      }

      p {
        color: #fff;
      }
    }
  }
  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 100%;
        color: #fff;
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transform: 0.4s;

        &::placeholder {
          color: #f3f3f3;
        }
        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #428883;
        padding: 16px;
        border-radius: 8px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;

        &:active {
          background-color: #388070;
        }
      }
    }
  }

  .movies-list {
    margin: 10px 8px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 70px;
    width: 90%;
    border-radius: 10px 10px;

    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;

      .movie-link {
        display: flex;
        flex-direction: column;
        height: 100%;

        .product-image {
          position: relative;
          display: block;

          img {
            display: block;
            width: 100%;
            height: 275px;
            object-fit: cover;
          }
          .type {
            position: absolute;
            padding: 8px 16px;
            background-color: #428883;
            color: #fff;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }

        .detail {
          background-color: #496583;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;

          .year {
            color: white;
            font-size: 20px;
            text-align: center;
            font-weight: bold;
          }
          h3 {
            color: #fff;
            font-weight: 600;
            font-size: 22px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
