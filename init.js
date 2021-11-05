const gamespeed = 10, fps = 60;

const client = new Client('http://localhost:3000');

(function () {
    let list = ['classes/attack-box', 'classes/Player', 'classes/Enemy', 'classes/OtherPlayer', 'scenes/Field1', 'scenes/Main'];

    LoadScripts(list).then(e => {
        client.game = new Game(null, gamespeed, fps);
        MainScene();
        //Field1();
    }).catch(e => {
        console.error(e);
    });
})();