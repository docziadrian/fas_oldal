$(window).on('load', function() {
        setTimeout(function(){
            $('#myModal').modal('show');
        }, 2000);
    });

document.getElementById("myvideo").onclick = function() {
    setTimeout(function(){
        $('#myVideo').modal('show');
        let vid = document.getElementById("hir_video");
        vid.autoplay = true;
        vid.load();
    }, 1000);
};

document.getElementById("close").onclick = function() {
    let vid = document.getElementById("hir_video");
    vid.autoplay = false;
    vid.pause();
}