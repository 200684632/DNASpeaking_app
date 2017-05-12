/**
 * Created by leipu on 2017/5/9.
 */

document.addEventListener("deviceready", onDeviceReady, false);


// 设备API可以使用了
//
function onDeviceReady() {
    // alert('欢迎来到DNASpeaking!');
    home();
}

function onPause() {
    //处理暂停事件
    alert('huanle');
}

function onResume() {
    //处理恢复事件
    setTimeout(function () {
        alert('huilaile');
    }, 0);

}

function onMenuKeyDown() {
    //处理"菜单"按钮事件
}
function onVolumeUpKeyDown() {
    // 增加声音按钮事件的事件处理函数
    alert('nizengqiangshengyinle');
}
var page = -1;
function home() {
    page++;
    $.ajax({
        url: 'http://localhost:8083/mo_index',
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
                        str += '<li><a href="../index.html" class="ui-btn-active" data-ajax="false">' + data.channel[i].title + '</a></li>';
                    } else {
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
                data_str += '<li><a href="index_details.html?id='+data.data[data_i].id+'">';
                data_str += '<img src="/i/firefox.png">';
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
