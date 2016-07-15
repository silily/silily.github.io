;$(function()
{
	'use strict';

	var sidebar = $('#sidebar'),
	    mask = $('.mask'),
	    backButton = $('.back-to-top'),
	    sidebar_trigger = $('#sidebar_trigger');

    function showSidebar()
	{
	    mask.fadeIn();
	    // sidebar.animate({'right': 0})
	    sidebar.css('right', 0);
	}

	function hideSidebar()
	{
		mask.fadeOut();
		sidebar.css('right', -sidebar.width())    //移动sidebar的宽度的负值
	}

	sidebar_trigger.on('click', showSidebar)
	mask.on('click', hideSidebar)
	backButton.on('click', function()
	{
		$('html, body').animate({
			scrollTop: 0
		},800)
	})

	$(window).on('scroll', function()
	{
		if($(window).scrollTop() > $(window).height())
		{
			backButton.fadeIn();
		}
		else
		{
			backButton.fadeOut();
		}
	})

	$(window).trigger('scroll');  //加载页面自动触发滚动事件，使返回顶部消失


})