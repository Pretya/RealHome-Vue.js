<template>
  <div class="about">
		<about-our-view></about-our-view>
		<feauters-view :data="feauterData"></feauters-view>
		<our-team-view></our-team-view>
		<main-conteiner></main-conteiner>
  </div>
</template>

<script>
import mainConteiner from '@/components/mainConteiner.vue';
import AboutOurView from '@/components/AboutUs/AboutOurView.vue';
import FeautersView from '@/components/FeautersView.vue';
import OurTeamView from '@/components/AboutUs/OurTeamView.vue';
import { feauterData } from '../data/data.feauters';
export default {
	components: {
		mainConteiner,
		AboutOurView,
		FeautersView,
		OurTeamView
  },
	name: 'AboutView',
	data () {
		return {
			feauterData: feauterData
		}
	}
	
}
</script>

<style lang="scss">
	.about {
		margin-top: 100px;
	}
</style>
