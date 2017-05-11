/**
 * Created by leipu on 2017/5/9.
 */

document.addEventListener("deviceready", onDeviceReady, false);


// 设备API可以使用了
//
function onDeviceReady() {
    $.ajax({
        url:'http://localhost:8083',
        type:'get',
        dataType:'json',
        success:function (data) {
            $('#content').html('这是我的测试数据');
            alert(data);
        },
        error:function (err) {
            alert(JSON.stringify(err));
        }
    });
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

