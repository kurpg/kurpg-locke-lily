(self.webpackChunkudonarium_lily=self.webpackChunkudonarium_lily||[]).push([[5302],{5302:function(ie,ue,te){var e,I,N,s,R,u,T,G,K,E,q,z,H,A;te(4656),Opal.modules["bcdice/arithmetic_evaluator"]=function(e){var I,N,l,u,s,D,G,K,E=[],k=e.nil,o=e.$$$,q=e.$$,z=e.module,H=e.hash2,A=e.truthy;return I=E,N=K=[z(E[0],"BCDice")].concat(I),G=[D=z(K[0],"ArithmeticEvaluator")].concat(N),l=e.get_singleton_class(D),s=[l].concat(G),void e.def(l,"$eval",u=function(R,M){var S,P=k;if(null==M)M=H([],{});else if(!M.$$is_hash)throw e.ArgumentError.$new("expected kwargs");return null==(S=M.$$smap.round_type)&&(S=o(q(s,"RoundType"),"FLOOR")),A(R)&&A(P=q(s,"Arithmetic").$eval(R,S))?P:0},u.$$arity=-2)},Opal.modules["bcdice/game_system/Cthulhu"]=function(e){function w(s,u){return"number"==typeof s&&"number"==typeof u?s<=u:s["$<="](u)}function E(s,u){return"number"==typeof s&&"number"==typeof u?s>u:s["$>"](u)}function k(s,u){return"number"==typeof s&&"number"==typeof u?s+u:s["$+"](u)}function o(s,u){return"number"==typeof s&&"number"==typeof u?s-u:s["$-"](u)}function z(s,u){return"number"==typeof s&&"number"==typeof u?s*u:s["$*"](u)}function H(s,u){return"number"==typeof s&&"number"==typeof u?s<u:s["$<"](u)}function A(s,u){return"number"==typeof s&&"number"==typeof u?s>=u:s["$>="](u)}var u,S,re,J,Q,U,V,W,X,r,a,C,h,$,f,y,v,P,R,I=[],t=e.nil,p=e.$$,N=e.module,D=e.klass,G=e.send2,l=e.truthy,c=e.send;return e.top.$require("bcdice/arithmetic_evaluator"),u=I,S=R=[N(I[0],"BCDice")].concat(u),re=P=[N(R[0],"GameSystem")].concat(S),y=D(P[0],p(P,"Base"),"Cthulhu"),v=[y].concat(re),y.$$prototype.randomizer=y.$$prototype.locale=y.$$prototype.special_percentage=y.$$prototype.critical_percentage=y.$$prototype.fumble_percentage=t,e.const_set(v[0],"ID","Cthulhu"),e.const_set(v[0],"NAME","\u30af\u30c8\u30a5\u30eb\u30d5\u795e\u8a71TRPG"),e.const_set(v[0],"SORT_KEY","\u304f\u3068\u3046\u308b\u3075\u3057\u3093\u308fTRPG"),e.const_set(v[0],"HELP_MESSAGE","c=\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024 \uff0f f=\u30d5\u30a1\u30f3\u30d6\u30eb\u5024 \uff0f s=\u30b9\u30da\u30b7\u30e3\u30eb\n\n1d100<=n    c\u30fbf\u30fbs\u3059\u3079\u3066\u30aa\u30d5\uff08\u5358\u7d14\u306a\u6570\u5024\u6bd4\u8f03\u5224\u5b9a\u306e\u307f\u884c\u3044\u307e\u3059\uff09\n\n\u30fbcfs\u5224\u5b9a\u4ed8\u304d\u5224\u5b9a\u30b3\u30de\u30f3\u30c9\n\nCC\t 1d100\u30ed\u30fc\u30eb\u3092\u884c\u3046 c=1\u3001f=100\nCCB  \u540c\u4e0a\u3001c=5\u3001f=96\n\n\u4f8b\uff1aCC<=80  \uff08\u6280\u80fd\u502480\u3067\u884c\u70ba\u5224\u5b9a\u30021%\u30eb\u30fc\u30eb\u3067cf\u9069\u7528\uff09\n\u4f8b\uff1aCCB<=55 \uff08\u6280\u80fd\u502455\u3067\u884c\u70ba\u5224\u5b9a\u30025%\u30eb\u30fc\u30eb\u3067cf\u9069\u7528\uff09\n\n\u30fb\u7d44\u307f\u5408\u308f\u305b\u30ed\u30fc\u30eb\u306b\u3064\u3044\u3066\n\nCBR(x,y)\tc=1\u3001f=100\nCBRB(x,y)\tc=5\u3001f=96\n\n\u30fb\u62b5\u6297\u8868\u30ed\u30fc\u30eb\u306b\u3064\u3044\u3066\nRES(x-y)\tc=1\u3001f=100\nRESB(x-y)\tc=5\u3001f=96\n\n\u203b\u6545\u969c\u30ca\u30f3\u30d0\u30fc\u5224\u5b9a\n\n\u30fbCC(x) c=1\u3001f=100\nx=\u6545\u969c\u30ca\u30f3\u30d0\u30fc\u3002\u51fa\u76eex\u4ee5\u4e0a\u304c\u51fa\u305f\u4e0a\u3067\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u304c\u540c\u6642\u306b\u767a\u751f\u3057\u305f\u5834\u5408\u3001\u5171\u306b\u51fa\u529b\u3059\u308b\uff08\u30c6\u30ad\u30b9\u30c8\u300c\u30d5\u30a1\u30f3\u30d6\u30eb\uff06\u6545\u969c\u300d\uff09\n\u30d5\u30a1\u30f3\u30d6\u30eb\u3067\u306a\u3044\u5834\u5408\u3001\u6210\u529f\u30fb\u5931\u6557\u306b\u95a2\u308f\u3089\u305a\u30c6\u30ad\u30b9\u30c8\u300c\u6545\u969c\u300d\u306e\u307f\u3092\u51fa\u529b\u3059\u308b\uff08\u6210\u529f\u30fb\u5931\u6557\u3092\u51fa\u529b\u305b\u305a\u3001\u4e0a\u66f8\u304d\u3057\u305f\u3082\u306e\u3092\u51fa\u529b\u3059\u308b\u5f62\uff09\n\n\u30fbCCB(x) c=5\u3001f=96\n\u540c\u4e0a\n\n"),y.$register_prefix("CCB?","RESB?","CBRB?"),e.def(y,"$initialize",J=function(_){var f=this;return J.$$p&&(J.$$p=null),G(f,e.find_super_dispatcher(f,"initialize",J,!1,!0),"initialize",[_],null),f.special_percentage=20,f.critical_percentage=1,f.fumble_percentage=1},J.$$arity=1),e.def(y,"$eval_game_system_specific_command",Q=function(_){var $,r=this;return/CCB/i["$==="]($=_)?(r.critical_percentage=5,r.fumble_percentage=5,r.$getCheckResult(_)):/CC/i["$==="]($)?(r.critical_percentage=1,r.fumble_percentage=1,r.$getCheckResult(_)):/RESB/i["$==="]($)?(r.critical_percentage=5,r.fumble_percentage=5,r.$getRegistResult(_)):/CBRB/i["$==="]($)?(r.critical_percentage=5,r.fumble_percentage=5,r.$getCombineRoll(_)):/RES/i["$==="]($)?(r.critical_percentage=1,r.fumble_percentage=1,r.$getRegistResult(_)):/CBR/i["$==="]($)?(r.critical_percentage=1,r.fumble_percentage=1,r.$getCombineRoll(_)):t},Q.$$arity=1),y.$private(),e.def(y,"$getCheckResult",U=function(_){var r,$=this,f=t,a=t,C=t,h=t,n=t,i=t;return f=/^CCB?(\d+)?(?:<=([+-\/*\d]+))?$/i.$match(_),l(f)?(a=f["$[]"](1).$to_i(),C=p(v,"ArithmeticEvaluator").$eval(f["$[]"](2)),l(w(C,0))?(h=$.randomizer.$roll_once(100),p(v,"Result").$new("(1D100) \uff1e "+h)):(n="(1D100<="+C+")",l(E(a,0))&&(n=k(n," "+$.$translate("Cthulhu.broken_number")+"["+a+"]")),h=$.randomizer.$roll_once(100),i=$.$compare(h,C,a),c(i.$to_result(),"tap",[],((r=function(B){var x;return null==B&&(B=t),x=[n+" \uff1e "+h+" \uff1e "+i.$text()],c(B,"text=",e.to_a(x)),x[o(x.length,1)]}).$$s=$,r.$$arity=1,r)))):t},U.$$arity=1),r=v,$=D(v[0],null,"CompareResult"),f=[$].concat(r),$.$include(p(f,"Translate")),$.$attr_accessor("success","failure","critical","fumble","special","broken"),e.def($,"$initialize",a=function(i){var g=this;return g.locale=i,g.success=!1,g.failure=!1,g.critical=!1,g.fumble=!1,g.special=!1,g.broke=!1},a.$$arity=1),e.def($,"$text",C=function(){var g,i=this,B=t;return l(l(g=i.$critical())?i.$special():g)?i.$translate("Cthulhu.critical_special"):l(i.$critical())?i.$translate("Cthulhu.critical"):l(i.$special())?i.$translate("Cthulhu.special"):l(i.$success())?i.$translate("success"):l(l(B=i.$broken())?i.$fumble():B)?i.$translate("Cthulhu.fumble")+"/"+i.$translate("Cthulhu.broken"):l(i.$broken())?i.$translate("Cthulhu.broken"):l(i.$fumble())?i.$translate("Cthulhu.fumble"):l(i.$failure())?i.$translate("failure"):t},C.$$arity=0),e.def($,"$to_result",h=function(){var i;return c(p(f,"Result").$new(),"tap",[],((i=function(b){var x=null==i.$$s?this:i.$$s,m=t;return null==b&&(b=t),m=[x.$success()],c(b,"success=",e.to_a(m)),o(m.length,1),m=[x.$failure()],c(b,"failure=",e.to_a(m)),o(m.length,1),m=[x.$critical()],c(b,"critical=",e.to_a(m)),o(m.length,1),m=[x.$fumble()],c(b,"fumble=",e.to_a(m)),m[o(m.length,1)]}).$$s=this,i.$$arity=1,i))},h.$$arity=0),e.def(y,"$compare",V=function(_,r,$){var a,C,h,i,f=this,n=t;return null==$&&($=0),a=p(v,"CompareResult").$new(f.locale),C=function(s,u){return"number"==typeof s?s/100:s["$/"](100)}(z(r,f.special_percentage)).$to_i().$clamp(1,100),l(l(h=w(_,r))?H(_,100):h)?(c(a,"success=",e.to_a(n=[!0])),o(n.length,1),n=[w(_,C)],c(a,"special=",e.to_a(n)),o(n.length,1),n=[w(_,f.critical_percentage)],c(a,"critical=",e.to_a(n)),o(n.length,1)):(c(a,"failure=",e.to_a(n=[!0])),o(n.length,1),n=[A(_,o(101,f.fumble_percentage))],c(a,"fumble=",e.to_a(n)),o(n.length,1)),l(l(i=E($,0))?A(_,$):i)&&(c(a,"broken=",e.to_a(n=[!0])),o(n.length,1),c(a,"failure=",e.to_a(n=[!0])),o(n.length,1),c(a,"success=",e.to_a(n=[!1])),o(n.length,1),c(a,"special=",e.to_a(n=[!1])),o(n.length,1),c(a,"critical=",e.to_a(n=[!1])),o(n.length,1)),a},V.$$arity=-3),e.def(y,"$getRegistResult",W=function(_){var r,$=this,f=t,a=t,C=t,h=t,n=t;return f=/^RESB?(-?\d+)$/i.$match(_),l(f)?(a=f["$[]"](1).$to_i(),C=k(z(a,5),50),l(H(C,5))?p(v,"Result").$failure("(1d100<="+C+") \uff1e "+$.$translate("Cthulhu.automatic_failure")):l(E(C,95))?p(v,"Result").$success("(1d100<="+C+") \uff1e "+$.$translate("Cthulhu.automatic_success")):(h=$.randomizer.$roll_once(100),n=$.$compare(h,C),c(n.$to_result(),"tap",[],((r=function(g){var b;return null==g&&(g=t),b=["(1d100<="+C+") \uff1e "+h+" \uff1e "+n.$text()],c(g,"text=",e.to_a(b)),b[o(b.length,1)]}).$$s=$,r.$$arity=1,r)))):t},W.$$arity=1),void e.def(y,"$getCombineRoll",X=function(_){var r,$=this,f=t,a=t,C=t,h=t,n=t,i=t,g=t,B=t,b=t;return f=/^CBR(B)?\((\d+),(\d+)\)$/i.$match(_),l(f)?(a=f["$[]"](2).$to_i(),C=f["$[]"](3).$to_i(),h=$.randomizer.$roll_once(100),n=$.$compare(h,a),i=$.$compare(h,C),g=l(l(B=n.$success())?i.$success():B)?$.$translate("success"):l(l(b=n.$success())?b:i.$success())?$.$translate("Cthulhu.partial_success"):$.$translate("failure"),c(p(v,"Result").$new(),"tap",[],((r=function(m){var Z,O,ee,d=t;return null==m&&(m=t),d=["(1d100<="+a+","+C+") \uff1e "+h+"["+n.$text()+","+i.$text()+"] \uff1e "+g],c(m,"text=",e.to_a(d)),o(d.length,1),d=[l(Z=n.$critical())?Z:i.$critical()],c(m,"critical=",e.to_a(d)),o(d.length,1),d=[l(O=n.$fumble())?O:i.$fumble()],c(m,"fumble=",e.to_a(d)),o(d.length,1),d=[l(ee=n.$success())?ee:i.$success()],c(m,"condition=",e.to_a(d)),d[o(d.length,1)]}).$$s=$,r.$$arity=1,r))):t},X.$$arity=1)},E=[],q=(e=Opal).$$,z=e.module,H=e.klass,A=e.send2,e.top.$require("bcdice/game_system/Cthulhu"),I=E,N=K=[z(E[0],"BCDice")].concat(I),s=G=[z(K[0],"GameSystem")].concat(N),T=[u=H(G[0],q(G,"Cthulhu"),"Cthulhu_SimplifiedChinese")].concat(s),e.const_set(T[0],"ID","Cthulhu:SimplifiedChinese"),e.const_set(T[0],"NAME","\u514b\u82cf\u9c81\u7684\u547c\u5524 \u7b2c\u516d\u7248"),e.const_set(T[0],"SORT_KEY","\u56fd\u969b\u5316:Simplified Chinese:\u514b\u82cf\u9c81\u7684\u547c\u5524 \u7b2c\u516d\u7248"),e.const_set(T[0],"HELP_MESSAGE","c=\u5927\u6210\u529f\u503c \uff0f f=\u5927\u5931\u8d25\u503c \uff0f s=\u6781\u96be\u6210\u529f\n\n1d100<=n    c\u30fbf\u30fbs\u5168\u90e8\u5173\u95ed\uff08\u53ea\u8fdb\u884c\u6570\u503c\u6bd4\u8f83\u5224\u5b9a\uff09\n\n\u30fb\u5e26cfs\u5224\u5b9a\u7684\u5224\u5b9a\u6307\u4ee4\n\nCC\t \u63b71d100\u9ab0 c=1\u3001f=100\nCCB  \u540c\u4e0a\uff0cc=5\u3001f=96\n\n\u4f8b\uff1aCC<=80  \uff08\u4ee580\u6280\u80fd\u5024\u8fdb\u884c\u884c\u4e3a\u5224\u5b9a\u3002\u5e76\u4ee51%\u7684\u6807\u51c6\u4f7f\u7528cf\u7684\u503c\uff09\n\u4f8b\uff1aCCB<=55 \uff08\u4ee555\u6280\u80fd\u5024\u8fdb\u884c\u884c\u4e3a\u5224\u5b9a\u3002\u5e76\u4ee55%\u7684\u6807\u51c6\u4f7f\u7528cf\u7684\u503c\uff09\n\n\u30fb\u5173\u4e8e\u7ec4\u5408\u9ab0\n\nCBR(x,y)\tc=1\u3001f=100\nCBRB(x,y)\tc=5\u3001f=96\n\n\u30fb\u5173\u4e8e\u5bf9\u6297\u9ab0\nRES(x-y)\tc=1\u3001f=100\nRESB(x-y)\tc=5\u3001f=96\n\n\u203b\u6545\u969c\u503c\u5224\u5b9a\n\n\u30fbCC(x) c=1\u3001f=100\nx=\u6545\u969c\u503c\u3002\u9ab0\u70b9\u5728x\u4ee5\u4e0a\u5e76\u4e14\u53d1\u751f\u5927\u5931\u8d25\u65f6\uff0c\u4f1a\u548c\u5927\u5931\u8d25\u4e00\u8d77\u663e\u793a\uff08\u6587\u672c\u4e3a\u300c\u5927\u5931\u8d25\uff06\u6545\u969c\u300d\uff09\n\u6ca1\u6709\u53d1\u751f\u5927\u5931\u8d25\u65f6\uff0c\u4e0e\u6210\u529f\u6216\u5931\u8d25\u65e0\u5173\uff0c\u6587\u6597\u90fd\u4f1a\u663e\u793a\u4e3a\u300c\u6545\u969c\u300d\uff08\u4e0d\u663e\u793a\u6210\u529f\u6216\u5931\u8d25\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u8986\u76d6\u663e\u793a\uff09\n\n\u30fbCCB(x) c=5\u3001f=96\n\u540c\u4e0a\n\n"),u.$register_prefix_from_super_class(),e.def(u,"$initialize",R=function(S){var j=this;return R.$$p&&(R.$$p=null),A(j,e.find_super_dispatcher(j,"initialize",R,!1,!0),"initialize",[S],null),j.locale="zh_hans"},R.$$arity=1)}}]);