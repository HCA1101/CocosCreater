cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        jumpHeight:0,
        jumpDuration:0,
        maxMoveSpeed:0,
        accel:0,
    },
    
    setJumpAction:function(){
        var jumpUp=cc.moveBy(this.jumpDuration,cc.p(0,this.jumpHeight)).easing(cc.easeCubicActionOut());
        var jumpDown=cc.moveBy(this.jumpDuration,cc.p(0,-this.jumpHeight)).easing(cc.easeCubicActionIn());
        return cc.repeatForever(cc.sequence(jumpUp,jumpDown));
        
    },
    
    // use this for initialization
    onLoad: function () {
        this.jumpAction=this.setJumpAction();
        this.node.runAction(this.setJumpAction);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
