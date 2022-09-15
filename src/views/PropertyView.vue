<template>
	<div class="conteiner">
		<property-catalog-view :data="propertiesData"></property-catalog-view>
	</div>
</template>

<script>
	import PropertyCatalogView from '@/components/Property/PropertyCatalogView.vue';
	import { propertiesData } from '@/data/data.properties';
export default {
	name: 'PropertyView',
	components: {
		PropertyCatalogView
	},
	data () {
		return {
			propertiesData: propertiesData
		}
	}
}
</script>

<style>

</style>