<template>
	<div class="property_catalog">
		<div class="container">
			<div class="row d-flex justify-content-center">
				<div class="property_catalog__title col-4">
					<h4>Property <strong>Catalog</strong></h4>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row d-flex justify-content-center w-100">
				<div class="property_catalog__city col-6">
					<ul class="property_catalog__city__list">
						<li class="property_catalog__city__item active"><a href="#">CHICAGO</a></li>
						<li class="property_catalog__city__item"><a href="#">KANSAS CITY</a></li>
						<li class="property_catalog__city__item"><a href="#">DENVER</a></li>
						<li class="property_catalog__city__item"><a href="#">NEW-YORK</a></li>
						<li class="property_catalog__city__item"><a href="#">LONDON</a></li>
					</ul>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row d-flex justify-content-center w-100">
				<div class="property_catalog__city__carts col-4" v-for="item in data" :key="item.id">

					<div class="properties__header__cart">
							<img :src="require(`../../assets/img/catalog/${item.image}.png`)" :alt="item.title">
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

		<div class="container">
			<div class="property_catalog__pagination row d-flex justify-content-center w-100">
				<div class="col-4 w-70">
					<ul class="property_catalog__pagination_list d-flex">
						<li class="property_catalog__pagination__item previous"><a href="">Previous</a></li>
						<li class="property_catalog__pagination__item"><a href="">2</a></li>
						<li class="property_catalog__pagination__item"><a href="">3</a></li>
						<li class="property_catalog__pagination__item"><a href="">4</a></li>
						<li class="property_catalog__pagination__item next"><a href="">Next</a></li>
					</ul>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	
export default {
	name: 'PropertyCatalogView',
	props: {
		data: {
			type: String,
			default: () => {

			},
		}
		
	},

}
</script>

<style lang="scss" scoped>
	
</style>