let game;
const gamespeed = 10, fps = 60;

function JoinPath(root, srcs) {
    return srcs.map(e => root + e);
}

(function () {
    ChangeResolution(1280, 720);

    // 반드시 클래스 부터 로드 하기
    // let list = ['js/scenes/main.js', 'js/scenes/sonagi.js'];

    // LoadScripts(list).then(e => {
    //     game = new Game(null, gamespeed, fps);
    //     Main();
    // }).catch(e => {
    //     console.error(e);
    // });
})();
