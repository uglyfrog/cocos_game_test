cc.Class({
    extends: cc.Component,

    properties: {
        bgm:{
            default: null,
            type: cc.AudioClip,
        },

        audioClick: {
            default: null,
            type: cc.AudioClip
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    playBgm: function(){
        cc.audioEngine.playMusic(this.bgm,true);
    },

    playClick: function(){
        cc.audioEngine.playEffect(this.audioClick);
    }
    // update (dt) {},
});
