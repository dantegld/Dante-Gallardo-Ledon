document.addEventListener('DOMContentLoaded', function() {

    function ScreenChange(){

    let sitewidth = window.innerWidth;
    let siteheight = window.innerHeight;


    document.getElementById('width').innerHTML = sitewidth;
    document.getElementById('height').innerHTML = siteheight;


    if(siteheight > sitewidth){
        document.getElementById('orientation').innerHTML = "Portrait";
    }else{
        document.getElementById('orientation').innerHTML = "Landscape";
    }
}
    document.getElementById("dropdown").classList.add("hidden");

    window.addEventListener('resize', ScreenChange);
    ScreenChange();
});