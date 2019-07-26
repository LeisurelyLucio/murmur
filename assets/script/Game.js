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
    score: {
      default: 0,
      displayName: 'Score (player)',
      tooltip: 'The score of player'
    },
    BGMAudio: {
      default: [],
      type: cc.AudioClip
    },
    hitTime: {
      default: 0
    },
    bkgNode: {
      default: [],
      type: cc.Node
    },
    UIPrefab: {
      default: null,
      type: cc.Prefab
    },
    current: {
      default: 0
    }
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    if (this.BGMAudio != null) cc.audioEngine.playMusic(this.BGMAudio[0], true)
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
  },

  onTouchStart (t) {
    this.hitTime++
    if ((this.hitTime % 10) == 0) {
      const index = Math.floor((Math.random() * 3))
      if (this.bkgNode.length > index) {
        this.bkgNode[index].getComponent('bkgAnim').playAnim()
      }
    }
    const ui = cc.find('Canvas/MainUI')
    if (ui != null) ui.destroy()
    this.unscheduleAllCallbacks(this)
    this.scheduleOnce(function () {
      var newUI = cc.instantiate(this.UIPrefab)
      this.node.addChild(newUI)
    }, 5)
  },

  start () {

  },

  onDestroy () {

  }

  // update (dt) {},
})
