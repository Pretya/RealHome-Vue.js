<template>
	<div class="">

		<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-indicators home__carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="@/assets/img/AnastasiaAvenu.png" class="d-block w-100" alt="">
						<div class="carousel-caption d-none d-md-block">
							<h5>120 Anastasia Avenu, Coral Gables</h5>
							<div class="slider__price">
								<p>$625,000</p>
								<button class="btn btn-light">MORE INFO</button>
							</div>
							
						</div>
					</div>
					<div class="carousel-item">
						<img src="@/assets/img/AnastasiaAvenu2.png" class="d-block w-100" alt="">
						<div class="carousel-caption d-none d-md-block">
							<h5>120 Anastasia Avenu, Coral Gables</h5>
							<div class="slider__price">
								<p>$625,000</p>
								<button class="btn btn-light">MORE INFO</button>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img src="@/assets/img/AnastasiaAvenu.png" class="d-block w-100" alt="">
						<div class="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<div class="slider__price">
								<p>$625,000</p>
								<button class="btn btn-light">MORE INFO</button>
							</div>
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
		</div>


	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss">
	@import '../assets/layout/fonts.scss';
	.carousel {
		h5 {
			font-family: 'Raleway', sans-serif;
			font-weight: 700;
			font-size: 48px;
		}
	}
	
.carousel-caption {
	bottom: 9.25rem;
}

.home {
	&__carousel-indicators {
	margin-bottom: 350px;
}

}

.slider__price {
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	p {
		font-size: 32px;
		font-family: Helvetica, serif;
		margin: 0;
		margin-right: 30px;
	}
	.btn {
		color: white;
		background: rgb(198 197 197 / 38%);
		font-size: 16px;
		width: 115px;
		transition: background .4s linear;

		&:hover {
			background: rgba(235, 231, 231, 0.63);
		}

	}

}
</style>