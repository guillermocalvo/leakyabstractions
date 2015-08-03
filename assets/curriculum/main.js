jQuery(document).ready(function($) {


    /*======= Skillset *=======*/

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
	var rss_feeds = $("#rss-feeds");
    rss_feeds.rss(
		rss_feeds.attr('feed-url'),
        {
			limit: rss_feeds.attr('feed-limit'),
			effect: rss_feeds.attr('feed-effect'), /* show, slide, slideFast, slideSynced, slideFastSynced */
			layoutTemplate: "<div class='item'>{entries}</div>",
			entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>' + rss_feeds.attr('feed-more') + '</a></div>'
        }
    );
});
