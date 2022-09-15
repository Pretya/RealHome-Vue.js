<template>
	<div class="conteiner">
		<our-blog-view 
		:data="blogData"
		:info="blogInfo"
		:icons="blogIcons"
		:comment="blogComments"
		:recent="blogRecent"
		></our-blog-view>
	</div>
</template>

<script>
	import OurBlogView from '@/components/OurBlog/OurBlogView.vue';
	import { blogData, blogInfo, blogIcons, blogComments, blogRecent} from '@/data/data.blog'
export default {
	components: {
		OurBlogView
	},
	name: 'BlogView',
	data() {
		return {
			blogData: blogData,
			blogInfo: blogInfo,
			blogIcons: blogIcons,
			blogComments: blogComments,
			blogRecent: blogRecent
		}
	}
}
</script>

<style>

</style>