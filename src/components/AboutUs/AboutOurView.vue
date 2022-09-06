<template>
	<div class="about_our">
		<div class="about_our__title container">
			<h4>About <strong>Our Company</strong></h4>
		</div>
			
		<div class="container">
			
			<div class="row d-flex justify-content-between">
				<div class="col-6">
					<img src="../../assets/img/AboutUs/AboutUs.png" alt="AboutUs">
				</div>
				<div class="col-6">
					<p class="about_our__text">Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr.</p>
					<p class="about_our__text">Agent info ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat nostrud tation ullamcorper nonummy nibh.</p>
				</div>
			</div>
		</div>
	</div>
</template>
	
<script>
export default {
	name: 'AboutOurView'
}
</script>
	
<style lang="scss">
	.about_our {
		margin-bottom: 120px;
		img {
			width: 100%;
			height: 390px;
		}
	&__title {
		display: flex;
		justify-content: left;
		margin-bottom: 75px;
		h4 {
			font-size: 45px;
		}
	}
	&__text {
		font-size: 15px;
		font-family: 'Playfair Display', serif;
		text-align: left;
		line-height: 2;
		color: #9f9f9f;
	}
	}
</style>