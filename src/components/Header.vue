<template>
    <div id="nav">
      <router-link to="/">Home</router-link>
      
    </div>
    <router-view />
  </template>
  
  <script>
  export default {
    name: "HeaDer",
  };
  </script>
  
  <style>
  #nav {
    margin-left: 30px;
    padding: 0;
    background-color: #35495e;
    border: rgb(0, 39, 74);
    /*The CSS overflow property controls what happens to content that is too big to fit into an area*/
    overflow: hidden;
  }
  
  #nav a {
    font-weight: bold;
    float: left;
    color: white;
    text-decoration: underline;
    padding: 2px 10px;
    text-align: center;
    font-size: 20px;
    /*text-decoration: none;*/
    margin-right: 5px;
  }
  #nav a.router-link-exact-active {
      color: rgb(114, 187, 255);
    }
  
  
  /* "a:hover": Select and style a link when you mouse over it: */
  #nav a:hover {
    background-color: rgb(114, 187, 255);
    color: rgb(0, 39, 74);
  }
  </style>
  