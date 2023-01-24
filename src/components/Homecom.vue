<template>
  <Header />
  <section>
        <h1 class="willkomm" style="font-size: 30px">HERZLICH WILLKOMMEN!</h1>
        <h1 class="allgemein" style="font-size: 30px">Allgemeine Informationen zum Filme</h1>
        <img class = "filmlogo" src="../assets/movie-maker-alternative.png" alt="Film Logo" />
    </section>
    <section>
        <p>Sicherlich hat jeder mal mindestens einen Film in seinem Leben geschaut. 
           Aber wir sind sicher, dass nicht alle von uns die Informationen über diese Filme kennen. 
           Aus diesem Grund haben wir uns entschlossen, diese Website zu erstellen.
        </p>
        <h3>Verwendungszweck:</h3>
        <ul>
            <li>Sie können den Namen des Filmregisseurs herausfinden!</li>
            <li>Produktionsjahr Ihres Lieblingsfilms wird bekannt gemacht!</li>
            <li>Und einige andere nützliche Informationen...</li>
        </ul>
    </section>
    <div class="row g-3 align-items-center">
    <div class ="col-auto d-block mx-auto">
      <button type ="button" @click="filmpage" class ="btn btn-secondary">Infomationen über Filme hier clicken </button> &nbsp;&nbsp;&nbsp;
      <button type ="button" @click="sierepage" class ="btn btn-secondary">Infomationen über Serien hier clicken </button> &nbsp;&nbsp;&nbsp;
    </div>
  </div>
 
</template>

<script>
import Header from '../components/Header.vue';

export default {
    name: 'HomeCom',
    methods : {
        filmpage(){
        this.$router.push({name :"filme"});
      },
      sierepage (){
        this.$router.push({name :"serie"});
      }

    },
    components: {
    Header
  }
};


</script>


<style lang="scss">
p {
  font-size: 20px;
  margin-left: 30px;
  color: white;
  padding: 10px;
}
h3 {
  margin-left: 30px;
  color: white;
  padding: 0;
  text-align: center;
}
li {
  margin-left: 30px;
  color: white;
  padding: 5px;
}
h2 {
  text-align: center;
  color: white;
  padding: 10px;
}
.willkomm {
  padding: 0;
  text-align: center;
  color: white;
}
.allgemein {
  color: white;
}
.filmlogo {
  width: 90%;
  height: 400px;
}
</style>







