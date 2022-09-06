<template>
	<div class="properties container">
		<div class="row d-flex justify-content-center">
			<div class="col-6">
				<h2>Featured <strong>Properties</strong></h2>
				<img src="../assets/img/catalog/line.png" class="red__underline">
				<p>Quisque diam lorem interdum vitaapibus vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar.</p>
			</div>
		</div>
	</div>
	<div class="properties container">
		<div class="row">
			<div class="col-md-4" v-for="item in data" :key="item.id">

				<div class="properties__header__cart">
					<img :src="require(`../assets/img/catalog/${item.image}.png`)" :alt="item.title">
					
					<h4 class="h4">{{item.desc.title}}</h4>
					<h5 class="h5">{{item.subtitle}}</h5>
					<p class="price">{{item.price}}</p>
				</div>
				
				<div class="properties__footer__cart">
					<span>{{item.desc.numb}}</span>
					<span class="dots">{{item.desc.rooms}}</span>
					<span>{{item.desc.bath}}</span>
				</div>

			</div>
		</div>
	</div>
	<div class="properties container">
		<div class="row d-flex justify-content-centr">
			<div class="col-12">
				<button class="btn btn-danger">ALL PROPERTIES</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style>

</style>