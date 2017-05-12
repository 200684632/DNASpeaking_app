/**
 * Created by leipu on 2017/5/12.
 */
window.onload = home
var page = -1;
function home() {
    page++;
    $.ajax({
        url: 'http://localhost:8083/mo_topic',
        data: {
            'page': page
        },
        type: 'get',
        dataType: 'json',
        success: function (data) {
            if (page == 0) {
                var str = '<ul id="mylist" data-role="listview" data-inset="true">';
                var i;
                var len = data.channel.length;

                for (i = 0; i < len; i++) {//'+data.channel[i].route_name+'.html
                    if (data.channel[i].route_name == 'articles') {
                        str += '<li><a href="index.html"  data-ajax="false">' + data.channel[i].title + '</a></li>';
                    } else if (data.channel[i].route_name == 'topics' ){
                        str += '<li><a href='+data.channel[i].route_name+'.html" class="ui-btn-active" data-ajax="false">' + data.channel[i].title + '</a></li>';
                    }else{
                        str += '<li><a href="'+data.channel[i].route_name+'.html" data-ajax="false">' + data.channel[i].title + '</a></li>';
                    }
                }
                str += '</ul>';
                $("#content").html(str);
                $('#content').navbar('refresh');
            }
            var data_str = '';
            var data_len = data.data.length;
            var data_i;
            for (data_i = 0; data_i < data_len; data_i++) {
                data_str += '<li><a href="#">';
                data_str += '<img src="http://localhost:8083/storage'+data.data[data_i].cover+'">';
                data_str += '<h2>' + data.data[data_i].title + '</h2>';
                data_str += '<p>' + data.data[data_i].abstract + '</p></a></li>';
            }

            $("#content_ul").append(data_str);
            $('#content_ul').listview('refresh');
        },
        error: function (err) {
            alert('数据加载异常');
        }
    });
};
