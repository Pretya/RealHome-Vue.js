<template>
	<div class="our_team">

		<div class="container">
			<div class="our_team__header row">
				<div class="col-sm-6">
					<div class="our_team__title">Our <strong>Team</strong></div>
				</div>
				<div class="col-sm-6">
					<div class="our_team__part">
						<a href="">Want to be a part of this team?</a>
					</div>
				</div>
			</div>
			
		</div>

		<div class="container">
			<div class="our_team__main row">
				<div class="col-sm-3">
					<div class="our_team__img">
						<img src="../../assets/img/AboutUs/maria.png" alt="">
					</div>
					<div class="our_team__name">Maria Spilberg</div>
					<div class="our_team__prof">Manager</div>
				</div>
				<div class="col-sm-3">
					<div class="our_team__img">
						<img src="../../assets/img/AboutUs/stan.png" alt="">
					</div>
					<div class="our_team__name">Stan Barnard</div>
					<div class="our_team__prof">Agent</div>
				</div>
				<div class="col-sm-3">
					<div class="our_team__img">
						<img src="../../assets/img/AboutUs/philip.png" alt="">
					</div>
					<div class="our_team__name">Phillip Morris</div>
					<div class="our_team__prof">Agent</div>
				</div>
				<div class="col-sm-3">
					<div class="our_team__img">
						<img src="../../assets/img/AboutUs/andy.png" alt="">
					</div>
					<div class="our_team__name">Andy Zuckerberg</div>
					<div class="our_team__prof">Account Manager</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="our_team__footer row">
				<div class="our_team__footer__title col-6">
						<h4>
							Subscribe To <strong>Our Newsletter</strong>
						</h4>
						
				</div>
				<div class="our_team__footer__form col-6">
					
						<form action="">
							<input v-model="inputValue" type="text" placeholder="Your email...">
							<button class="btn btn-danger">SUBSCRIBE</button>
						</form>
					
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'OurTeamView',
	data () {
		return {
			inputValue: ''
		}
	}
}
</script>

<style lang="scss">
	.our_team {
		
		&__header {
			width: 100%;
			margin-bottom: 100px;
			display: flex;
			justify-content: space-between;
		}
		&__title {
			font-size: 37px;
			text-align: left;
		}
		&__part {
			text-align: right;
			a {
				font-size: 20px;
				font-family: 'Playfair Display', serif;
				text-decoration: underline;
				color: red
			}
		}
		&__main {
			width: 100%;
			margin-bottom: 100px;
			display: flex;
			justify-content: space-between;
		}
		&__name {
			font-family: 'Raleway', sans-serif;
			font-weight: 700;
			font-size: 20px;
			margin: 30px 0 15px 0;
		}
		&__prof {
			font-size: 14px;
			color: #797979;
			font-family: 'Playfair Display', serif;
			margin-bottom: 30px;
		}
		&__footer {
			width: 100%;
			margin-bottom: 100px;
			display: flex;
			justify-content: space-between;
		}
		&__footer__title {
			display: flex;
			align-items: center;
			font-size: 37px;
		}
		&__footer__form {
			input {
				width: 390px;
				margin-right: 35px;
				border-radius: 5px;
				padding: 20px;
				border: 1px solid #e6e6e6;
			}
			button {
				width: 150px;
				letter-spacing: .08em;
				font-family: 'Raleway', sans-serif;
				font-weight: 700;
				padding: 16px;
			}
		}
	}
</style>