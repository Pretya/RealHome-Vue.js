<template>
  <div class="app ">

		<main-conteiner>

			<template v-slot:header>
				<header-view></header-view>
			</template>

			<main>
				<router-view></router-view>
			</main>
			
			<template v-slot:footer>
				<footer-view></footer-view>
			</template>
			
		</main-conteiner>
		
	</div>
</template>


<script>
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
import MainConteiner from './components/mainConteiner.vue';

export default {
	components: {
		HeaderView,
		FooterView,
		MainConteiner
	},
  name: "app",
  props: {
    msg: String
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.wrap {
	display: flex;
	flex-direction: column;
}


</style>
