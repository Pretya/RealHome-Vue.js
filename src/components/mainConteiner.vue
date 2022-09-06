<template>
	<!-- <div class="main__conteiner">
		<slot></slot>
	</div> -->
	<div class="wrap">
		<header>
			<slot name="header"></slot>
		</header>
		<main class="flex-fill container-fluid p-0">
				<slot></slot>
		</main>
		<footer >
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>