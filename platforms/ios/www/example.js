/**
 * Created by leipu on 2017/5/9.
 */

document.addEventListener("deviceready", onDeviceReady, false);


// 设备API可以使用了
//
function onDeviceReady() {
    // alert('设备可以正常使用了');
    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("menubutton", onMenuKeyDown, false);
    //给其他事件添加类似的监听
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


$('#button').tap(function (){

});