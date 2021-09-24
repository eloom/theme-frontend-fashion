define([
	'jquery',
	'uiComponent',
	'domReady!'
], function ($, Component) {
	'use strict';

	return Component.extend({
		defaults: {},

		initialize: function () {
			this._super();

			$('#back-top').hide();
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});
			$('#back-top').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);

				return false;
			});
		}
	});
});