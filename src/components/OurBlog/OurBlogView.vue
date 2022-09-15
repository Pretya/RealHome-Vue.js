<template>
	<div class="our__blog">
		<div class="container">
			<div class="row d-flex w-100 text-start">
					<div class="our__blog__left col-8" v-for="item in data" :key="item.id">
						<div class="our__blog__title">
							<h3>{{item.title}}</h3> 
						</div>
						<div class="our__blog__text">{{item.postOne}}</div>
						<div class="our__blog__img">
							<img src="../../assets/img/AnastasiaAvenu.png" alt="">
						</div>
						<div class="our__blog__text">
							<p>{{item.postTwo.twoParagrafOne}}</p>
							<p>{{item.postTwo.twoParagrafTwo}}</p>
						</div>
						<div class="our__blog__subtitle">
							<h4>{{item.subtitle}}</h4>
						</div>
						<div class="our__blog__text">
							<p>{{item.postThree.threeParagrafOne}}</p>
							<p>{{item.postThree.threeParagrafTwo}}</p>
						</div>
						<div class="our__blog__left__info">
							<ul class="our__blog__left__list" v-for="item in info" :key="item.id">
								<li class="our__blog__left__item">{{item.date}}</li>
								<li class="our__blog__left__item">BY <a href="#">{{item.name}}</a> </li>
								<li class="our__blog__left__item">IN <a href="#">{{item.day}}</a> </li>
								<li class="our__blog__left__item"><a href="#">{{item.comments}}</a></li>
								<li class="our__blog__left__item"><a href="#">{{item.link}}</a></li>
							</ul>
						</div>
						<div class="our__blog__left__icon">
							<ul v-for="item in icons" :key="item.id">
								<li><a href="#">
									<img :src="require(`../../assets/img/Contacts/${item.icon}.png`)" alt="">
								</a></li>
							</ul>
						</div>

						<div class="our__blog__comments">
							<div class="our__blog__comments__content" v-for="item in comment" :key="item.name">
								<ul class="our__blog__comments__content__list">
									<li class="our__blog__comments__content__item d-flex">
											<div class="our__blog__comments__content__avatar">
												<img :src="require(`../../assets/img/Blogs/${item.avatar}.png`)" :alt="item.avatar">
											</div>

											<div class="our__blog__comments__content__post">
												<div class="our__blog__comments__content__post__header">Written by {{item.name}}</div>
												<div class="our__blog__comments__content__post__main">{{item.post.textOne}}</div>
												<div class="our__blog__comments__content__post__footer">view all posts by: <a href="#">{{item.name}}</a></div>
											</div>
									</li>
								</ul>
							</div>

							<div class="our__blog__comments__title">
								<h3><strong>Leave a Comment:</strong></h3>
							</div>
							<comments-form-view></comments-form-view>
						</div>
							
						
					
				</div>

				<div class="our__blog__right col-4 d-flex-colum text-">

					<div class="our__blog__right__categories">
						<div class="our__blog__right__title">
							<strong>Categories</strong>
						</div>
						<ul class="our__blog__right__categories__item">
							<li class="our__blog__right__categories__list text-start" v-for="(menu, index) in categoriesMenuList" :key="index">
								<router-link class="our__blog__right__link" :to="menu.path">
								{{menu.name}}
								</router-link>
							</li>
						</ul>
					</div>

					<div class="our__blog__right__archives">
						<div class="our__blog__right__title">
							<strong>Archives</strong>
						</div>
						<ul class="our__blog__right__archives__item">
							<li class="our__blog__right__archives__list" v-for="(menu, index) in archivesMenuList" :key="index">
								<router-link class="our__blog__right__link" :to="menu.path">
								{{menu.name}}
								</router-link>
							</li>
						</ul>
					</div>

					<div class="our__blog__right__recent">
						<div class="our__blog__right__title">
							<strong>Recent Posts</strong>
						</div>
						<ul class="our__blog__right__recent__item">
							<li class="our__blog__right__recent__list" v-for="item in recent" :key="item.id">
								<div class="our__blog__right__recent__subtitle">
									<strong>{{item.subtitle}}</strong>
								</div>
								<div class="our__blog__right__recent__text">
									{{item.text}}
									<p> <strong>{{item.day}}</strong> </p>
								</div>
								<!-- <div class="our__blog__right__recent__day">
									{{item.day}}
								</div> -->
							</li>
						</ul>
					</div>

				</div>
		</div>
	</div>
</div>
</template>

<script>
	import CommentsFormView from '../CommentsFormView.vue';
	import { menuCategories, menuArchives } from '@/constant/menuLink';
export default {
	components: {
		CommentsFormView
	},
		data() {
			return {
				categoriesMenuList: menuCategories,
				archivesMenuList: menuArchives

		}
	},
			props: {
					data: {
					type: Array,
					default: () => [],
				},
				info: {
					type: Array,
					default: () => [],
				},
				icons: {
					type: Array,
					default: () => []
				},
				comment: {
					type: Array,
					default: () => []
				},
				recent: {
					type: Array,
					default: () => []
				}
			}
}
</script>

<style lang="scss">

</style>