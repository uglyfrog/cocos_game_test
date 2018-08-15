cc.Class({
    extends: cc.Component,

    properties: {
        _name: "frog",
        clickNotify: true,
        lblTitle:{
            default: null,
            tooltip: "界面标题",
            type: cc.Label,
        },
        lblTime:{
            default: null,
            type: cc.Label,
        },
        _maxTime: 0,
        maxTime: {
            get: function () {
                return this._maxTime;
            },
            set: function (value) {
                this._maxTime = value;
            },
            type: cc.Integer,
            tooltip: "The max time"
        },
        graph: {
            default: null,
            type: cc.Graphics,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {
        this.curTime = this._maxTime
        let lblTitle = this.lblTitle
        let clickNotify = this.clickNotify
        let graph = this.graph
        this.node.on('mousedown',function(event){
            cc.log("=========cc.log click activated==========");
            console.log("=========console click activated=======");
            clickNotify = !clickNotify;
            lblTitle.enabled = !clickNotify;
            graph.clear()
            // cc.director.loadScene("Entry");
        });
    },

    start: function () {


        
      },


    update (dt) {
        this.curTime -= dt
        if(this.curTime < 0){
            this.lblTime.enabled = false;
            // this.lblTitle.enabled = false;
            return
        }
        this.lblTime.string = Math.floor(this.curTime)
    },

    graphDraw: function() {
        let graph = this.graph
        graph.circle(200,200, 200);
        graph.ellipse (0, 160, 140, 50);
        graph.fillColor = cc.Color.GREEN;
        graph.fill();
        graph.stroke();
    },

    onClick: function() {
        this.graphDraw();
    },

});
