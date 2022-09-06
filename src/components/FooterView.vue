<template>
	<div class="footerView">
			
		<div class="footer__container">
			<div class="row">
				<div class="col">
					<div class="footer_logo">

						<img class="logo" src="../assets/logo-footer.png" alt="logo">

					</div>

					<div class="contacts_icons">
							<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
							<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
							<a href="#"><i class="fa-brands fa-instagram"></i></a>
							<a href="#"><i class="fa-brands fa-glide-g"></i></a>
					</div>
				</div>

				<div class="col">
					<div class="footer_title">
						<h4>Navigation</h4>
						<ul>
							<li v-for="(menu, index) in footerMenuList" :key="index">

							<router-link class="" aria-current="page" :to="menu.path">
							{{menu.name}}
							</router-link>
							
							</li>
						</ul>
					</div>
				</div>

				<div class="col">
					<div class="footer_title">
						<h4>For clients</h4>
						<ul>
							<li v-for="(menu, i) in footerMenuClient" :key="i">

								<router-link :to="menu.path">
									{{menu.name}}
								</router-link>

							</li>
						</ul>
					</div>
				</div>

				<div class="col">
					<div class="footer_title">
						<h4>Contact us</h4>
						<ul>
							<li><a href="#"><p>240 Central Park, London OR 10019</p></a></li>
							<li><a href="tel:+18005596580">Freephone:+1 800 559 6580</a></li>
							<li><a href="tel:+19596036035">Telephone:+1 959 603 6035</a></li>
							<li><a href="#">FAX:+1 959 603 6035</a></li>
							<li><a class="footer__maill" href="mailto:info@realhome.com">info@realhome.com</a></li>
						</ul>
					</div>
				</div>

			</div>
		</div>
		
		
	</div>
</template>

<script>
import { menuList, menuClient } from '@/constant/menuLink'

export default {
	components: {
		
	},
	name: 'FooterView',
	data() {
		return {
			footerMenuList: menuList,
			footerMenuClient: menuClient,
		}
	}
}
</script>

<style lang="scss">
@import '@/assets/layout/color.scss';
.footerView {
	color: white;
	background-color: $darkgrey;
	height: 385px;


	.footer__container {
		height: 100%;

	.row {
		width: 100%;
		height: 100%;
		
		.col {
			padding: 80px 0 0 0;
			.footer__maill {
				color: rgb(197, 52, 52);
				text-decoration: underline;
			}
			.contacts_icons {
				margin-left: 10px;
			}

			h4 {
				font-family: 'Raleway', sans-serif;
				font-size: 28px;
				color: #b2b2b2;
				text-align: start;
				margin-bottom: 25px;
			}

			ul li {
				list-style: none;
				text-align: start;
				
				margin-bottom: 10px; 
			}
			p {
				padding: 0;
				margin: 0;
			}
			a {
				font-family: 'Playfair Display', serif;
				text-decoration: none;
				color: #b2b2b2;
				transition: color .3s linear;

				&:hover {
					color: white;
				}
			}
		}

	}
}
}

.footer_logo {
	margin-bottom: 25px;
}

</style>