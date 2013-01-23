/**
 * @author: jikey
 * @see: <a href="mailto:jikeytang@gmail.com">zyh</a>
 * @time: 2013-1-21 上午11:13
 * @info:
 */
(function($){
    /**
     * common tab
     * @param options
     */
    $.fn.utilTab = function(options){
        var defaults = {
                tag       : 'li',    // tab name
                subName   : '.utilTabSub', // sub class name
                current   : 'cur',    // current class name
                eventType : 'hover', // event type
                showType  : 'show'   // show effect type
            },
            opts = $.extend({}, defaults, options),
            that = $(this);

        that[opts.eventType](function() {
            var idx = $(this).index();
            $(this).addClass(opts.current).siblings().removeClass(opts.current);
            that.find(opts.subName).eq(idx)[opts.showType]().siblings(opts.subName).hide();
        });
        /*
        that.find(opts.tag)[opts.eventType](function() {
            var idx = $(this).index();
            $(this).addClass(opts.current).siblings().removeClass(opts.current);
            that.find(opts.subName).eq(idx)[opts.showType]().siblings(opts.subName).hide();
        });
        */
    };
    $.fn.tabEffect = function(options){
        var defaults = {
                tag       : 'tr',       // tab name
                current   : 'hover',    // current class name
                eventType : 'hover'     // event type
            },
            opts = $.extend({}, defaults, options),
            that = $(this);

        that.find(opts.tag + ':even').addClass('even');
        that.find(opts.tag).hover(function() {
            $(this).addClass(opts.current).siblings().removeClass(opts.current);
        }, function(){
            $(this).removeClass(opts.current);
        });
    };
}(jQuery));
