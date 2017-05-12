/**
 * Created by leipu on 2017/5/12.
 */
window.onload = hot_ajax;
var page = -1;
function hot_ajax(){
    page++;
    $.ajax({
        url:'http://localhost:8083/mo_hot',
        data:{
            'page':page
        },
        type:'get',
        dataType:'json',
        success:function (data) {
            var data_str = '';
            var data_len = data.content.length;
            var data_i;
            for (data_i = 0;data_i<data_len;data_i++){
                data_str += '<li><a href="#">';
                data_str += '<img src="http://localhost:8083/storage'+data.content[data_i].cover+'">';
                data_str += '<h2>'+data.content[data_i].title+'</h2>';
                data_str += '<p>'+data.content[data_i].abstract+'</p></a></li>';
            }
            $("#content_ul").append(data_str);
            $('#content_ul').listview('refresh');
        },
        error:function (err) {
            alert('数据加载异常');
        }
    });
};