cc.Class({
    extends: cc.Component,

    properties: {
        audioMng:{
            default: null,
            type: cc.Node,
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.audioMng = this.audioMng.getComponent("audioMng");
        this.audioMng.playBgm();
        cc.director.preloadScene("WorldScene",function(){
            cc.log("========scene pre loading==========");
        });
    },

    start () {

    },

    clickAction(){
        cc.director.loadScene("WorldScene");
    }
    // update (dt) {},
});
