<template>
		
			<div class="header">
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<div class="container">
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>

						<a class="navbar-brand" href="/">
							<img class="logo" src="../assets/logo.png" alt="logo">
						</a>

						<div class="collapse navbar-collapse" id="navbarSupportedContent">

							<ul class="navbar-nav me-auto mb-2 mb-lg-0">
								<li class="nav-item" v-for="(menu, index) in headerMenuList" :key="index">
									<router-link class="nav-link active" aria-current="page" :to="menu.path">
									{{menu.name}}
									</router-link>
								</li>
							</ul>

						</div>

						<div class="contacts_icons">
							<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
							<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
							<a href="#"><i class="fa-brands fa-instagram"></i></a>
							<a href="#"><i class="fa-brands fa-glide-g"></i></a>
						</div>

					</div>
				</nav>
			</div>
		
		
		
  
</template>

<script>
import { menuList } from '@/constant/menuLink';

export default {
	components: {
		
	},
  name: "HeaderView",
  props: {
    msg: String
  },
	data() {
		return {
			headerMenuList: menuList
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.header {
	position: fixed;
	z-index: 100;
	left: 0;
	right: 0;
	border-bottom: 1px solid rgb(65, 63, 63);
}

.fa-airplay {
	background: #000;
}
.logo {
	width: 130px;
}
.navbar {
	padding: 0;
}
.navbar-nav {
	width: 100%;
	display: flex;
	justify-content: center;
}
.nav-item {
	font-family: 'Playfair Display', serif;
	font-size: 18px;
	padding: 10px 15px;
	transition: background .3s linear;

	&:hover {
		background: rgb(216, 216, 216);
	}
}

.nav-link a {
padding: 0 30px;
}
.container {
	display: flex;
	justify-content: center;
	text-align: center;
}
// .contacts_icons i {
// 	margin: 0 10px;
// }
.contacts_icons {
	
	a {
		width: 30px;
		height: 30px;
		text-align: center;
		line-height: 2;
		border: 1px solid rgb(216, 216, 216);
		border-radius: 25px;
		margin-right: 10px;
		display: inline-block;
		transition: color .3s linear;
		color: rgb(138, 138, 138)
	};
	
	a:hover {
		color: #000;
	}
}
</style>
