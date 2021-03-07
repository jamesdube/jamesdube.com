<template>
   

    <div class="container mx-auto bg-purple-300 p-5">
    <nav class="flex-row md:justify-between">
        <div class="flex flex-row justify-between">
           <a href="#">Logo</a>

           <p @click="toggleMenu" id="hamburgerbtn" class="md:hidden bg-purple-800">
             menu
           </p>
        </div>
        <ul :class="{ 'active': menuActive }" class="hidden md:flex md:flex-row" id="mobileMenu">
            <li class="pr-5"><a> Services </a></li>
            <li class="pr-5"><a>Porfolio</a></li>
            <li class="pr-5"><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>
    </nav>
</div>
</template>


<style>
    .active{
        display: block;
    }    
</style>

<script>
  export default {
    data(){
      return {
        menuActive: false
      }
    },
    methods: {
      toggleMenu(){
        this.menuActive = !this.menuActive
      }
    }
  };
</script>