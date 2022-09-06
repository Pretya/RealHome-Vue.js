<template>
	<div class="partners">
		<div class="container">
			<div class="row d-flex justify-content-between w-100">
				<div class="col-2">
					<img src="../assets/img/catalog/OurPartners.png" alt="">
				</div>
				<div class="col-2">
					<img src="../assets/img/catalog/TechStart.png" alt="">
				</div>
				<div class="col-2">
					<img src="../assets/img/catalog/Swan.png" alt="">
				</div>
				<div class="col-2">
					<img src="../assets/img/catalog/AudioPro.png" alt="">
				</div>
				<div class="col-2">
					<img src="../assets/img/catalog/Strongwave.png" alt="">
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
	name: 'PartnersView'
}
</script>

<style lang="scss">
	.partners {
		min-height: 265px;
		display: flex;
		align-items: center;
		.col-2 {
			display: flex;
			align-items: center;
		}
	}

</style>