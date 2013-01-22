/**
 * @author: jikey
 * @see: <a href="mailto:jikeytang@gmail.com">zyh</a>
 * @time: 2013-1-21 上午11:13
 * @info:
 */
function addHead(){
    var head = document.createElement('div'),
        footer = document.createElement('div'),
        container = $('.container');

    head.id = 'header';
    footer.id = 'footer';
    container.before(head);
    container.after(footer);

    $('#header').load('../../inc/head.html');
    $('#footer').load('../../inc/footer.html');
}

