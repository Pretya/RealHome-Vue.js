<template>
  <div class="conteiner">
		<slider-view></slider-view>

		<div class="row d-flex justify-content-center">
			<div class="col-10">
				<div class="row row__deals">
					<div class="col-md-4">
							<h4>We are Offering the <br> Best Estate Deals <br> _</h4>
					</div>
					<div class="col-md-8">
						<p>Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
					</div>
				</div>

				<feauters-view :data="feauterData"></feauters-view>

				<properties-view :data="propertiesData"></properties-view>

				<div class="home__slider">
					<slider-agents-view :data="sliderAgentsData"></slider-agents-view>
				</div>
				
			</div>
			
		</div>
		<slider-footer-view></slider-footer-view>
  </div>
		<partners-view></partners-view>
</template>

<script>

import SliderView from '@/components/SliderView.vue';
import FeautersView from '@/components/FeautersView.vue';
import PropertiesView from '@/components/PropertiesView.vue';
import SliderAgentsView from '@/components/SliderAgentsView.vue';
import SliderFooterView from '@/components/SliderFooterView.vue';
import PartnersView from '@/components/PartnersView.vue';
import { feauterData } from '../data/data.feauters';
import { propertiesData,sliderAgentsData } from '../data/data.properties'

export default {
  name: 'HomeView',
  components: {
		
		SliderView,
		FeautersView,
		PropertiesView,
		SliderAgentsView,
		SliderFooterView,
		PartnersView
  }, 
	data() {
		return {
			feauterData: feauterData,
			propertiesData: propertiesData,
			sliderAgentsData: sliderAgentsData,
		}
	}
}
</script>


<style scoped lang="scss">
	.home__slider {
			padding-top: 75px;
			height: 645px;
			overflow: hidden;
			box-sizing: border-box;
		}
	.row {
		&__deals {
			padding: 115px 0;
		}

		
	}
	.col-md-4 {
		
		h4 {
			padding: 0 40px;
			text-align: end;
			font-family: 'Raleway', sans-serif;
			font-weight: 500;
			font-size: 37px;
		}
	}
	.col-md-8 {
		p {
			text-align: left;
			line-height: 1.85rem;
			font-family: 'Playfair Display', serif;
			font-size: 16px;
			color: #797979;
			margin: 0;
		}
	}
</style>