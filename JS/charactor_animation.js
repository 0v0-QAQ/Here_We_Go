var word_frames = [
        '(&nbsp&nbsp&nbsp´･ω･)',
        '(&nbsp&nbsp&nbsp&nbsp&nbsp´･ω)',
        '(&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp´･)',
        '(&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp´)',
        '(&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp)',
        '(`&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp)',
        '(･`&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp)',
        '(ω･`&nbsp&nbsp&nbsp&nbsp&nbsp)',
        '(･ω･`&nbsp&nbsp&nbsp)',
        '(´･ω･`&nbsp&nbsp)',
        '(&nbsp´･ω･`&nbsp)',
        '(&nbsp&nbsp´･ω･`)'
]

var character_Animation = function (id) {
    var chartDom = document.getElementById(id);
    var idx = 0
    chartDom.innerHTML = word_frames[idx];

    chartDom.style.cssText =  "hegith:45px; width:150px; position:absolute; left:5%; color:black; font-size:20px;";

    setInterval(function() {
        idx = (idx + 1) % 12;
        chartDom.innerHTML = word_frames[idx];
    },170)

    return chartDom
}

var emo = character_Animation('emo');
//emo.style.cssText =  "height:100%; color:red; font-size:13px;";

window.addEventListener("resize",function (){
//    emo.resize();
    console.log("emo need resize() (Q^Q)")
});