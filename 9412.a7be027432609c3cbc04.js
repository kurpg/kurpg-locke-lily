(self.webpackChunkudonarium_lily=self.webpackChunkudonarium_lily||[]).push([[9412],{9412:function(se,$e,te){te(4656),Opal.modules["bcdice/arithmetic_evaluator"]=function(r){var b,m,u,P,M,C,f,S,G=[],D=r.nil,z=r.$$$,x=r.$$,U=r.module,e=r.hash2,y=r.truthy;return b=G,m=S=[U(G[0],"BCDice")].concat(b),f=[C=U(S[0],"ArithmeticEvaluator")].concat(m),u=r.get_singleton_class(C),M=[u].concat(f),void r.def(u,"$eval",P=function(I,A){var w,V=D;if(null==A)A=e([],{});else if(!A.$$is_hash)throw r.ArgumentError.$new("expected kwargs");return null==(w=A.$$smap.round_type)&&(w=z(x(M,"RoundType"),"FLOOR")),y(I)&&y(V=x(M,"Arithmetic").$eval(I,w))?V:0},P.$$arity=-2)},function(r){function D(f,u){return"number"==typeof f&&"number"==typeof u?f>=u:f["$>="](u)}var u,q,V,H,Y,T,J,Q,X,Z,O,ee,re,_e,a,i,n,o,h,t,$,c,_,A,M,U=[],e=r.nil,y=r.$$$,s=r.$$,b=r.module,B=r.klass,S=r.send,k=r.send2,m=r.truthy,C=r.hash2;r.top.$require("bcdice/arithmetic_evaluator"),u=U,q=M=[b(U[0],"BCDice")].concat(u),V=A=[b(M[0],"GameSystem")].concat(q),c=B(A[0],s(A,"Base"),"SRS"),_=[c].concat(V),c.$$prototype.round_type=c.$$prototype.randomizer=c.$$prototype.sort_add_dice=e,r.const_set(_[0],"ID","SRS"),r.const_set(_[0],"NAME","\u30b9\u30bf\u30f3\u30c0\u30fc\u30c9RPG\u30b7\u30b9\u30c6\u30e0"),r.const_set(_[0],"SORT_KEY","\u3059\u305f\u3093\u305f\u3042\u3068RPG\u3057\u3059\u3066\u3080"),r.const_set(_[0],"HELP_MESSAGE_1","\u30fb\u5224\u5b9a\n\u3000\u30fb\u901a\u5e38\u5224\u5b9a\uff1a2D6+m>=t[c,f]\n\u3000\u3000\u4fee\u6b63\u5024m\u3001\u76ee\u6a19\u5024t\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024c\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u5024f\u3067\u5224\u5b9a\u30ed\u30fc\u30eb\u3092\u884c\u3044\u307e\u3059\u3002\n\u3000\u3000\u4fee\u6b63\u5024\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u5024\u306f\u7701\u7565\u53ef\u80fd\u3067\u3059\uff08[]\u3054\u3068\u7701\u7565\u53ef\uff09\u3002\n\u3000\u3000\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u5024\u306e\u65e2\u5b9a\u5024\u306f\u3001\u305d\u308c\u305e\u308c12\u30012\u3067\u3059\u3002\n\u3000\u3000\u81ea\u52d5\u6210\u529f\u3001\u81ea\u52d5\u5931\u6557\u3001\u6210\u529f\u3001\u5931\u6557\u3092\u81ea\u52d5\u8868\u793a\u3057\u307e\u3059\u3002\n\n\u3000\u3000\u4f8b) 2d6>=10\u3000\u3000\u3000\u3000\u3000\u4fee\u6b63\u50240\u3001\u76ee\u6a19\u502410\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2>=10\u3000\u3000\u3000\u3000\u4fee\u6b63\u5024+2\u3001\u76ee\u6a19\u502410\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2>=10[11]\u3000\u3000\u2191\u3092\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502411\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2>=10[12,4]\u3000\u2191\u3092\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502412\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u50244\u3067\u5224\u5b9a\n"),r.const_set(_[0],"HELP_MESSAGE_2","\u3000\u30fb\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u304a\u3088\u3073\u30d5\u30a1\u30f3\u30d6\u30eb\u306e\u307f\u306e\u5224\u5b9a\uff1a2D6+m[c,f]\n\u3000\u3000\u76ee\u6a19\u5024\u3092\u6307\u5b9a\u305b\u305a\u3001\u4fee\u6b63\u5024m\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024c\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u5024f\u3067\u5224\u5b9a\u30ed\u30fc\u30eb\u3092\u884c\u3044\u307e\u3059\u3002\n\u3000\u3000\u4fee\u6b63\u5024\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u5024\u306f\u7701\u7565\u53ef\u80fd\u3067\u3059\uff08[]\u306f\u7701\u7565\u4e0d\u53ef\uff09\u3002\n\u3000\u3000\u81ea\u52d5\u6210\u529f\u3001\u81ea\u52d5\u5931\u6557\u3092\u81ea\u52d5\u8868\u793a\u3057\u307e\u3059\u3002\n\n\u3000\u3000\u4f8b) 2d6[]\u3000\u3000\u3000\u3000\u4fee\u6b63\u50240\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502412\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u50242\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2[11]\u3000\u3000\u4fee\u6b63\u5024+2\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502411\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u50242\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2[12,4]\u3000\u4fee\u6b63\u5024+2\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502412\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u50244\u3067\u5224\u5b9a\n"),r.const_set(_[0],"HELP_MESSAGE_3","\u30fbD66\u30c0\u30a4\u30b9\u3042\u308a\uff08\u5165\u308c\u66ff\u3048\u306a\u3057)\n"),r.const_set(_[0],"DEFAULT_HELP_MESSAGE",s(_,"HELP_MESSAGE_1")+"\n"+s(_,"HELP_MESSAGE_2")+"\n"+s(_,"HELP_MESSAGE_3")),r.const_set(_[0],"HELP_MESSAGE",s(_,"DEFAULT_HELP_MESSAGE")),a=_,t=b(_[0],"ClassMethods"),$=[t].concat(a),t.$attr_reader("help_message"),t.$attr_reader("aliases_re_for_srs_roll_with_target_value"),t.$attr_reader("aliases_re_for_srs_roll_without_target_value"),r.def(t,"$set_aliases_for_srs_roll",i=function(l){var E,R,L=this,g=e,F=e;return E=r.slice.call(arguments,0,arguments.length),g=S(E,"map",[],"upcase".$to_proc()),F=S(g,"map",[],(R=function(N){return null==N&&(N=e),s($,"Regexp").$escape(N)},R.$$s=L,R.$$arity=1,R)).$join("|"),L.aliases_re_for_srs_roll_with_target_value=s($,"Regexp").$new("^(?:"+F+")((?:[-+][-+\\d]+)?>=\\d+(?:\\[\\d*(?:,\\d+)?\\])?)$"),L.aliases_re_for_srs_roll_without_target_value=s($,"Regexp").$new("^(?:"+F+")([-+][-+\\d]+)?(\\[\\d*(?:,\\d+)?\\])?$"),L.$prepare_help_msg_for_aliases_for_srs_roll(g),L.help_message=L.$concatenate_help_messages(),L},i.$$arity=-1),r.def(t,"$clear_aliases_for_srs_roll",n=function(){var l=this;return l.aliases_re_for_srs_roll_with_target_value=e,l.aliases_re_for_srs_roll_without_target_value=e,l.help_message=y(s($,"SRS"),"DEFAULT_HELP_MESSAGE"),l},n.$$arity=0),t.$private(),r.def(t,"$prepare_help_msg_for_aliases_for_srs_roll",o=function(l){var E,p,R=this;return R.help_msg_for_aliases_for_srs_roll_with_target_value=S(l,"map",[],(E=function(g){return null==g&&(g=e),"\u3000\u3000\u4f8b) "+g+"+2>=10\u3000\u3000\u3000\u3000 2d6+2>=10\u3068\u540c\u3058\uff08"+g+"\u304c2D6\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u30b3\u30de\u30f3\u30c9\uff09\n"},E.$$s=R,E.$$arity=1,E)).$join(),R.help_msg_for_aliases_for_srs_roll_without_target_value=S(l,"map",[],(p=function(g){return null==g&&(g=e),"\u3000\u3000\u4f8b) "+g+"\u3000\u3000\u3000\u3000\u3000 2d6[]\u3068\u540c\u3058\uff08"+g+"\u304c2D6\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u30b3\u30de\u30f3\u30c9\uff09\n\u3000\u3000\u4f8b) "+g+"+2[12,4]\u3000 2d6+2[12,4]\u3068\u540c\u3058\uff08"+g+"\u304c2D6\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u30b3\u30de\u30f3\u30c9\uff09\n"},p.$$s=R,p.$$arity=1,p)).$join(),R},o.$$arity=1),r.def(t,"$concatenate_help_messages",h=function(){var l=this;return null==l.help_msg_for_aliases_for_srs_roll_with_target_value&&(l.help_msg_for_aliases_for_srs_roll_with_target_value=e),null==l.help_msg_for_aliases_for_srs_roll_without_target_value&&(l.help_msg_for_aliases_for_srs_roll_without_target_value=e),y(s($,"SRS"),"HELP_MESSAGE_1")+(l.help_msg_for_aliases_for_srs_roll_with_target_value+"\n")+y(s($,"SRS"),"HELP_MESSAGE_2")+l.help_msg_for_aliases_for_srs_roll_without_target_value+"\n"+y(s($,"SRS"),"HELP_MESSAGE_3")},h.$$arity=0),function(d,a){var $,i,n,o,t=[d].concat(a);r.def(d,"$inherited",$=function(v){return v.$extend(s(t,"ClassMethods")).$clear_aliases_for_srs_roll()},$.$$arity=1),r.def(d,"$help_message",i=function(){return s(t,"DEFAULT_HELP_MESSAGE")},i.$$arity=0),r.def(d,"$aliases_re_for_srs_roll_with_target_value",n=function(){return e},n.$$arity=0),r.def(d,"$aliases_re_for_srs_roll_without_target_value",o=function(){return e},o.$$arity=0)}(r.get_singleton_class(c),_),c.$register_prefix("2D6"),r.def(c,"$initialize",H=function(a){var i=this;return H.$$p&&(H.$$p=null),k(i,r.find_super_dispatcher(i,"initialize",H,!1,!0),"initialize",[a],null),i.sort_add_dice=!0,i.d66_sort_type=y(s(_,"D66SortType"),"NO_SORT")},H.$$arity=1),r.def(c,"$help_message",Y=function(){return this.$class().$help_message()},Y.$$arity=0),r.const_set(_[0],"DEFAULT_CRITICAL_VALUE",12),r.const_set(_[0],"DEFAULT_FUMBLE_VALUE",2),r.const_set(_[0],"SRS_ROLL_WITH_TARGET_VALUE_RE",/^2D6([-+][-+\d]+)?>=(\d+)(?:\[(\d+)?(?:,(\d+))?\])?$/.$freeze()),r.const_set(_[0],"SRS_ROLL_WITHOUT_TARGET_VALUE_RE",/^2D6([-+][-+\d]+)?\[(\d+)?(?:,(\d+))?\]$/.$freeze()),r.const_set(_[0],"SRS_ROLL_DEFAULT_THRESHOLDS","["+s(_,"DEFAULT_CRITICAL_VALUE")+","+s(_,"DEFAULT_FUMBLE_VALUE")+"]"),r.const_set(_[0],"SRSRollNode",S(s(_,"Struct"),"new",["modifier","critical_value","fumble_value","target_value"],((T=function(){var t;return r.def(null==T.$$s?this:T.$$s,"$to_s",t=function(){var n,i=this;return n="2D6"+s(_,"Format").$modifier(i.$modifier()),(m(i.$target_value())?n+">="+i.$target_value():n)+"["+i.$critical_value()+","+i.$fumble_value()+"]"},t.$$arity=0),e&&"to_s"}).$$s=c,T.$$arity=0,T))),r.def(c,"$eval_game_system_specific_command",J=function(a){var $,i,t=this;return $=t.$replace_alias_for_srs_roll_with_2d6(a),m(i=t.$parse($))?t.$execute_srs_roll(i):e},J.$$arity=1),c.$private(),r.def(c,"$replace_alias_for_srs_roll_with_2d6",Q=function(a){var $,o=e;return $=a,this.$class().$aliases_re_for_srs_roll_with_target_value()["$==="]($)?"2D6"+s(_,"Regexp").$last_match(1):this.$class().$aliases_re_for_srs_roll_without_target_value()["$==="]($)?"2D6"+s(_,"Regexp").$last_match(1)+(m(o=s(_,"Regexp").$last_match(2))?o:s(_,"SRS_ROLL_DEFAULT_THRESHOLDS")):a},Q.$$arity=1),r.def(c,"$parse",X=function(a){var $;return $=a,s(_,"SRS_ROLL_WITH_TARGET_VALUE_RE")["$==="]($)?this.$parse_srs_roll_with_target_value(s(_,"Regexp").$last_match()):s(_,"SRS_ROLL_WITHOUT_TARGET_VALUE_RE")["$==="]($)?this.$parse_srs_roll_without_target_value(s(_,"Regexp").$last_match()):e},X.$$arity=1),r.def(c,"$eval_modifier",Z=function(a){return m(a)?s(_,"ArithmeticEvaluator").$eval(a,C(["round_type"],{round_type:this.round_type})):0},Z.$$arity=1),r.def(c,"$parse_srs_roll_with_target_value",O=function(a){var t,$,n,o,h,l,v,E;return n=this.$eval_modifier(a["$[]"](1)),o=a["$[]"](2).$to_i(),h=m(v=(t=a["$[]"](3))===e||null==t?e:S(t,"to_i",[]))?v:s(_,"DEFAULT_CRITICAL_VALUE"),l=m(E=($=a["$[]"](4))===e||null==$?e:S($,"to_i",[]))?E:s(_,"DEFAULT_FUMBLE_VALUE"),s(_,"SRSRollNode").$new(n,h,l,o)},O.$$arity=1),r.def(c,"$parse_srs_roll_without_target_value",ee=function(a){var t,$,n,o,v,h,l;return n=this.$eval_modifier(a["$[]"](1)),o=m(h=(t=a["$[]"](2))===e||null==t?e:S(t,"to_i",[]))?h:s(_,"DEFAULT_CRITICAL_VALUE"),v=m(l=($=a["$[]"](3))===e||null==$?e:S($,"to_i",[]))?l:s(_,"DEFAULT_FUMBLE_VALUE"),s(_,"SRSRollNode").$new(n,o,v,e)},ee.$$arity=1),r.def(c,"$execute_srs_roll",re=function(a){var i,n,o,l,f,t=this,$=e,h=e;return $=t.randomizer.$roll_barabara(2,6),m(t.sort_add_dice)&&$["$sort!"](),i=$.$sum(),n=$.$join(","),o=function(f,u){return"number"==typeof f&&"number"==typeof u?f+u:f["$+"](u)}(i,a.$modifier()),h=t.$compare_result(a,i,o),l=[["("+a+")",i+"["+n+"]"+s(_,"Format").$modifier(a.$modifier()),o,h.$text()].$compact().$join(" \uff1e ")],S(h,"text=",r.to_a(l)),"number"==typeof(f=l.length)||f["$-"](1),h},re.$$arity=1),r.def(c,"$compare_result",_e=function(a,t,$){return m(D(t,a.$critical_value()))?s(_,"Result").$critical("\u81ea\u52d5\u6210\u529f"):m(function(f,u){return"number"==typeof f&&"number"==typeof u?f<=u:f["$<="](u)}(t,a.$fumble_value()))?s(_,"Result").$fumble("\u81ea\u52d5\u5931\u6557"):m(a.$target_value()["$nil?"]())?s(_,"Result").$new():m(D($,a.$target_value()))?s(_,"Result").$success("\u6210\u529f"):s(_,"Result").$failure("\u5931\u6557")},_e.$$arity=3)}(Opal)}}]);