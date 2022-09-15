<template>
	<div class="our_contacts">
		<div class="container">
			<div class="our_contacts__title">
				Our <strong>Contacts</strong>
			</div>
			</div>
			<div class="container">
				<div class="row d-flex w-100">
					<div class="col-12 w-100">
						<img class="w-100" src="@/assets/img/Contacts/map.png" alt="">
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row d-flex w-100">
					<div class="col-4">
						<div class="our_contacts__info">
							<h3 class="our_contacts__info__title">
								Contact info
							</h3>
							<p class="our_contacts__info__text">Etiam commodo consequat egestas. Morbi at ligula nulla. Mauris bibendum mi vitae condimentum mollis. Sed sollicitudin enim vehicula, varius sapien id, consectetur posuere sem commodo.</p>
							<p class="our_contacts__info__adress">Real Home INC.
ST STEPHEN'S HOUSE, COLSTON AVE, BRISTOL, BRISTOL BS1 4ST, UK</p>
							<div class="our_contacts__info__contacts">
								<ul>
									<li><a href="tel:+18006036035">Telephone:<strong>+1800 603 6035</strong> </a></li>
									<li><a href="#">FAX:<strong>+1800 899 9898</strong> </a></li>
									<li>E-mail: <a class="line" href="mailto:mail@demolink.org">mail@demolink.org</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-8">
						<div class="our_contacts__comments">
							<div class="our_contacts__comments__title">
								<h3>Leave a Comment</h3>
							</div>
							<comments-form-view></comments-form-view>
						</div>
					</div>
				</div>
			</div>
			
		
	</div>
</template>

<script>
	import CommentsFormView from '../CommentsFormView.vue';
export default {
	components: {
		CommentsFormView
	},
	name: 'OurContactsView'
}
</script>

<style lang="scss">

</style>