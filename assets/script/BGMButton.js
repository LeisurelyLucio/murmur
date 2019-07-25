// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        BGMID: {
            default:0,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this);
    },

    onTouchEnd(t) {
        console.log('ok');
        if (this.BGMID>=0) {
            cc.audioEngine.playMusic(cc.find('Canvas').getComponent('Game').BGMAudio[this.BGMID], true);
        } else {
            cc.audioEngine.stop();
            if (this.BGMID==-2) cc.director.end();
        }
        let ui = cc.find('Canvas/MainUI');
        if (ui!=null) ui.destroy();
    },

    start () {

    },

    // update (dt) {},
});