<template>
	<div class="container">
		<div class="row row__offering">
			<div class="col-md-3" v-for="item in data" :key="item.id">
			<div class="feauter">
				<img :src="require(`../assets/icon/${item.icon}.png`)" :alt="item.title">
				<h5> {{item.title}}</h5>
				<p> {{ item.text }}</p>
			</div>
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

<style lang="scss" scoped>
	.row {
		&__offering {
			padding: 75px 0 150px 0;
			h5 {
				color: #4e4e4e;
				font-size: 20px;
				font-family: 'Raleway', sans-serif;
				font-weight: 500;
				margin: 25px 0;
			}
			p {
				padding: 0 30px;
				
				color: #797979;
				line-height: 2rem;
			}
	}
}
			
</style>