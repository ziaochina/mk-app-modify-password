webpackJsonp([0],{1640:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,a,o=n(2),i=r(o),c=n(58),d=r(c),f=n(4),s=r(f),l=n(10),p=r(l),m=n(7),h=r(m),v=n(8),_=r(v),w=n(0),y=(r(w),n(286)),g=n(631),k=r(g),x=(u=(0,y.wrapper)(k.default))(a=function(t){function e(){return(0,s.default)(this,e),(0,h.default)(this,(e.__proto__||(0,d.default)(e)).apply(this,arguments))}return(0,_.default)(e,t),(0,p.default)(e,[{key:"render",value:function(){return this.props.monkeyKing((0,i.default)({},this.props,{path:"root"}))}}]),e}(w.Component))||a;e.default=x,t.exports=e.default},1641:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function u(t){var e=new m.action(t),n=new _((0,o.default)({},t,{metaAction:e})),r=(0,o.default)({},e,n);return e.config({metaHandlers:r}),r}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=r(a),i=n(627),c=r(i),d=n(628),f=r(d),s=n(4),l=r(s);e.default=u;var p=n(0),m=(r(p),n(286)),h=n(629),v=r(h),_=function t(e){var n=this;(0,l.default)(this,t),this.onInit=function(t){var e=t.component,r=t.injections;n.component=e,n.injections=r,r.reduce("init")},this.btnClick=(0,f.default)(c.default.mark(function t(){var e;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.metaAction.modal("show",{title:"修改密码",okText:"确认修改",children:n.metaAction.loadApp("mk-app-modify-password",{store:n.component.props.store})});case 2:e=t.sent,console.log(e);case 4:case"end":return t.stop()}},t,n)})),this.metaAction=e.metaAction,this.config=v.default.current};t.exports=e.default},1642:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function u(t){var e=new d.reducer(t),n=new p((0,o.default)({},t,{metaReducer:e}));return(0,o.default)({},e,n)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=r(a),i=n(4),c=r(i);e.default=u;var d=(n(187),n(286)),f=n(629),s=r(f),l=n(632),p=function t(e){var n=this;(0,c.default)(this,t),this.init=function(t,e){var r=(0,l.getInitState)();return n.metaReducer.init(t,r)},this.modifyContent=function(t){var e=n.metaReducer.gf(t,"data.content");return n.metaReducer.sf(t,"data.content",e+"!")},this.metaReducer=e.metaReducer,this.config=s.default.current};t.exports=e.default}});