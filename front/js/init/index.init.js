/**
 * @author: jikey
 * @see: <a href="mailto:jikeytang@gmail.com">zyh</a>
 * @time: 2013-1-21 上午11:13
 * @info:
 */
Modernizr.load([
    {
        load: ['front/js/libs/jquery-1.3.2.min.js', 'front/js/ui.common.js'],
        complete: function(){
            indexInit();
            listHover();
        }
    }
]);

function indexInit(){
    $('#homeContainer').utilTab({
        tag: '#nav li',
        subName: '.content'
    });
}

function listHover(){
    $('.content').tabEffect({
        tag: '.list'
    });
}