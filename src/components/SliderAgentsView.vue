<template>
<div class="slider_agents row d-flex justify-content-center">
				<!-- image -->
				
				<!-- sliser -->
		<div class="col-sm-10">
			<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item  active">
						<div class="row d-flex">
											<div class="slider_agents_content__img col-sm-4">
												<img  src="@/assets/img/catalog/Gerrard.png" class="slider_agents__img" alt="...">
											</div>
				
									
											<div class="slider_agents_content__header col-sm-8">
												<div class="slider_agents_content__content">
														<h3 class="slider_agents_content__title">Our <strong>Agents</strong></h3>
																<img src="../assets/img/catalog/line_slider.png" alt="">
														<h3 class="slider_agents_content__name">Gerrard Vakovski</h3>
														<div class="slider_agents_content__text">
																Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ratione quas placeat voluptatem ipsam aperiam quis suscipit, omnis adipisci nobis recusandae porro ex nesciunt amet, aut, cupiditate reiciendis est? Sed suscipit voluptates odio architecto similique beatae aliquam nisi reprehenderit magnam, a laudantium iste odit, quo, dignissimos repudiandae ea cumque fugit.
														</div>
														<div class="slider_agents_content__links">
																<div class="slider_agents_content__phone">
																	<a href="tel:+71234567899" class="slider_agents_content__tel"><i class="fa-solid fa-phone"></i>+7(123)456-78-99</a>
																</div>
																<div class="slider_agents_content__maill">
																	<a href="mailto:lisa.gerrard@realhome.com" class="slider_agents_content__maill"><i class="fa-solid fa-envelope"></i>lisa.gerrard@realhome.com</a>
																</div>
														</div>
												</div>
											</div>
						</div>

											
					</div>
					<div class="carousel-item">
					<!-- sliser -->
					<div class="row d-flex">
							<div class="col-sm-4">
												<img  src="@/assets/img/catalog/Lisa.png" class="slider_agents__img" alt="...">
											</div>
				
									
												<div class="slider_agents_content__header col-sm-8">
														
												

												<div class="slider_agents_content__content">
														<h3 class="slider_agents_content__title">Our <strong>Agents</strong></h3>
																<img src="../assets/img/catalog/line_slider.png" alt="">
														<h3 class="slider_agents_content__name">Lisa Krakovski</h3>
														<div class="slider_agents_content__text">
																Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ratione quas placeat voluptatem ipsam aperiam quis suscipit, omnis adipisci nobis recusandae porro ex nesciunt amet, aut, cupiditate reiciendis est? Sed suscipit voluptates odio architecto similique beatae aliquam nisi reprehenderit magnam, a laudantium iste odit, quo, dignissimos repudiandae ea cumque fugit.
														</div>
														<div class="slider_agents_content__links">
																<div class="slider_agents_content__phone">
																	<a href="tel:+71234567899" class="slider_agents_content__tel"><i class="fa-solid fa-phone"></i>+7(123)456-78-99</a>
																</div>
																<div class="slider_agents_content__maill">
																	<a href="mailto:lisa.gerrard@realhome.com" class="slider_agents_content__maill"><i class="fa-solid fa-envelope"></i>lisa.gerrard@realhome.com</a>
																</div>
														</div>
												</div>
											</div>
						</div>
					</div>
					<div class="carousel-item">
					<!-- sliser -->
					<div class="row d-flex">
											<div class="col-sm-4">
												<img  src="@/assets/img/catalog/Gerrard.png" class="slider_agents__img" alt="...">
											</div>
				
									
												<div class="slider_agents_content__header col-sm-8">
														
												

												<div class="slider_agents_content__content">
														<h3 class="slider_agents_content__title">Our <strong>Agents</strong></h3>
																<img src="../assets/img/catalog/line_slider.png" alt="">
														<h3 class="slider_agents_content__name">Gerrard Vakovski</h3>
														<div class="slider_agents_content__text">
																Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ratione quas placeat voluptatem ipsam aperiam quis suscipit, omnis adipisci nobis recusandae porro ex nesciunt amet, aut, cupiditate reiciendis est? Sed suscipit voluptates odio architecto similique beatae aliquam nisi reprehenderit magnam, a laudantium iste odit, quo, dignissimos repudiandae ea cumque fugit.
														</div>
														<div class="slider_agents_content__links">
																<div class="slider_agents_content__phone">
																	<a href="tel:+71234567899" class="slider_agents_content__tel"><i class="fa-solid fa-phone"></i>+7(123)456-78-99</a>
																</div>
																<div class="slider_agents_content__maill">
																	<a href="mailto:lisa.gerrard@realhome.com" class="slider_agents_content__maill"><i class="fa-solid fa-envelope"></i>lisa.gerrard@realhome.com</a>
																</div>
														</div>
												</div>
											</div>
						</div>
					</div>
					
				</div>
		</div>
		</div>
		
	</div>
		<div class="slider_agents__footer container">
			<div class="slider_agents__footer__title">Get Started on Buying Your <strong>New Home</strong></div>
			<div class="slider_agents__footer__button">
				<button class="btn btn-danger">MORE ABOUT US</button>
			</div>
		</div>
</template>

<script>
export default {
	name: 'slider-agents-view',
	props: {
		data: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style lang="scss">
	
</style>