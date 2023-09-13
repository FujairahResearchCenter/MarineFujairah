<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header class="shadow-md bg-white sticky top-0 z-50 header--top">
    <nav class="max-w-6xl mx-auto py-4 px-4 lg:px-0">
      <div class="flex justify-between items-center">
        <!-- <RouterLink to="/"> -->
        <router-link :to="{ name: 'home' }" rel="noreferrer" class="text-sm"
          ><h1 style="font-size: 1.5em;"><b><strong>Fujairah Marine Research</strong></b></h1></router-link>
        <!-- </RouterLink> -->

        <div class="hidden md:block">
          <ul class="flex flex-row gap-4 text-sm">
            <li
              class="py-2 border-b-4 border-white hover:border-b-4 hover:border-green-600 hover:transition hover:ease-in-out duration-300"
            >
              <RouterLink to="/">HOME</RouterLink>
            </li>
            <li
              class="py-2 border-b-4 border-white hover:border-b-4 hover:border-green-600 hover:transition hover:ease-in-out duration-300"
            >
              <RouterLink to="agenda">GIS-DATA</RouterLink>
            </li>
            <li
              class="py-2 border-b-4 border-white hover:border-b-4 hover:border-green-600 hover:transition hover:ease-in-out duration-300"
            >
              <RouterLink to="speakers">BIO-DIVERSITY</RouterLink>
            </li>
            <li
              class="py-2 border-b-4 border-white hover:border-b-4 hover:border-green-600 hover:transition hover:ease-in-out duration-300"
            >
              <RouterLink to="researchers">RESEARCHS</RouterLink>
            </li>
            <li
              class="py-2 border-b-4 border-white hover:border-b-4 hover:border-green-600 hover:transition hover:ease-in-out duration-300"
            >
              <RouterLink to="partners">STRATEGIC PARTNERS</RouterLink>
            </li>
            <li
              class="py-2 border-b-4 border-white hover:border-b-4 hover:border-green-600 hover:transition hover:ease-in-out duration-300"
            >
            
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />

  <footer class="bg-gray-100">
    <div class="max-w-6xl mx-auto">
      <nav
        class="py-6 lg:py-12 mx-4 lg:mx-0 flex flex-col md:flex-row gap-4 md:gap-0 justify-between border-b border-gray-300"
      >
        <!-- Quick Links -->
        <div class="flex flex-col gap-1 text-gray-500">
          <h3 class="mb-2 text-xl text-gray-600 font-bold">Quick Links</h3>
          <a
            href="https://www.instagram.com/fuj_environment/?hl=en"
            target="_blank"
            rel="noreferrer"
            class="text-sm"
            >About Fujairah Environment Authority</a
          >
          <a
            href="https://www.frc.ae/about"
            target="_blank"
            rel="noreferrer"
            class="text-sm"
            >About Fujairah Research Center</a
          >
          <a
            href="https://www.uaeflora.ae/about"
            target="_blank"
            rel="noreferrer"
            class="text-sm"
            >About UAE Flora</a
          >
        </div>
      
        <div class="flex flex-col gap-1 text-gray-500">
          <h3 class="mb-2 text-xl text-gray-600 font-bold">
            Social Media Sites
          </h3>
          <a
            href="https://ae.linkedin.com/company/fujairah-research-center"
            target="_blank"
            rel="noreferrer"
            class="text-sm"
            >Linkedin</a
          >
          <a
            href="https://www.instagram.com/fujairah_research_centre/"
            target="_blank"
            rel="noreferrer"
            class="text-sm"
            >Instagram</a
          >
          <a
            href="https://www.facebook.com/profile.php?id=100086306988384"
            target="_blank"
            rel="noreferrer"
            class="text-sm"
            >Facebook</a
          >
        </div>
        <!-- Event Resources -->
        <div class="flex flex-col gap-1 text-gray-500">
          <h3 class="mb-2 text-xl text-gray-600 font-bold">Contact Details</h3>
          <a
           
            target="_blank"
            rel="noreferrer"
            class="text-sm"
            >+97192222411</a
          >
          <a
           
            target="_blank"
            rel="noreferrer"
            class="text-sm"
            >info@frc.ae</a
          >
          <a
            
            target="_blank"
            rel="noreferrer"
            class="text-sm"
            >Al Hilal City, Al Hilal tower,26 floor Fujairah, UAE.</a
          >
        </div>
      </nav>

      <div class="py-4 mx-4 lg:mx-0 flex flex-row justify-between items-center">
        <a
          href="https://fujairah.ae/en/pages/fujairah_government.aspx"
          target="_blank"
          rel="noreferrer"
          class="text-sm"
          ><img class="h-12" src="/images/fea.png"
        /></a>
        <a
          href="https://www.frc.ae/"
          target="_blank"
          rel="noreferrer"
          class="text-sm text-gray-500"
          ><img class="h-12" src="/images/frc.png"/></a
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
.header--top {
  z-index: 500;
}
</style>
