(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"7pDl":function(n,t){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},"8vdZ":function(n,t){n.exports='{\n  <span class="hljs-string">"HOME"</span>: {\n    <span class="hljs-string">"TITLE"</span>: <span class="hljs-string">"Bonjour Angular avec ngx-translate !"</span>,\n    <span class="hljs-string">"SELECT"</span>: <span class="hljs-string">"Changer la langue"</span>\n  }\n}\n'},FDcC:function(n,t){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},"R+r5":function(n,t,s){"use strict";s.d(t,"a",function(){return r});var a=s("Qgas");function e(n,t,s){return 0===s?[t]:(n.push(t),n)}function r(){return Object(a.a)(e,[])}},YPwC:function(n,t){n.exports='{\n  <span class="hljs-string">"HOME"</span>: {\n    <span class="hljs-string">"TITLE"</span>: <span class="hljs-string">"Hello Angular with ngx-translate!"</span>,\n    <span class="hljs-string">"SELECT"</span>: <span class="hljs-string">"Change language"</span>\n  }\n}\n'},aay5:function(n,t,s){"use strict";s.r(t);var a=s("CcnG"),e=s("gIcY"),r=function(){function n(n){var t=this;this.translate=n,this.form=new e.FormGroup({}),this.model={},this.options={},this.fields=[{key:"lang",type:"select",templateOptions:{required:!0,change:function(n){return t.translate.use(n.formControl.value)},options:[{label:"fr",value:"fr"},{label:"en",value:"en"}]},expressionProperties:{"templateOptions.label":this.translate.stream("HOME.SELECT")}}],n.addLangs(["en","fr"]),n.setDefaultLang("en");var s=n.getBrowserLang();n.use(s.match(/en|fr/)?s:"en"),this.model.lang=n.currentLang}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),o={examples:[{title:"i18n using ngx-translate",description:"\n              This is an example of using ngx-formly with ngx-translate to internationalize your forms.\n              <div>\n                This example demonstrates dynamic i18n using <code>expressionProperties</code>.\n                If you don't need a dynamic solution (language doesn't change after the app has started up,\n                simply omit the <code>expressionProperties</code> in the example.\n              </div>\n            ",component:r,files:[{file:"app.component.html",content:s("7pDl"),filecontent:s("FDcC")},{file:"app.component.ts",content:s("pkPx"),filecontent:s("vtgh")},{file:"app.module.ts",content:s("z2QG"),filecontent:s("mbSE")},{file:"assets/i18n/en.json",content:s("YPwC"),filecontent:s("h75i")},{file:"assets/i18n/fr.json",content:s("8vdZ"),filecontent:s("rtAZ")}]}]},l=function(){return function(){}}(),i=s("NcP4"),p=s("AcC/"),u=s("htty"),c=s("YBPd"),m=s("zBy/"),d=s("Fcep"),g=s("Pg8L"),f=s("tXyE"),h=s("bv0N"),y=s("JotH"),j=s("YET7"),b=s("pMnS"),v=s("4o01"),w=s("Dl9q"),L=s("UcnZ"),C=s("DAbo"),x=s("9Glx"),T=s("mrSG"),k=s("F/XL"),F=s("p0ib"),O=s("6blF"),_=s("dEwP"),E=s("t9fZ"),M=s("S1nX"),R=s("67Y/"),S=s("R+r5"),D=s("15JJ"),P=function(){return function(){}}(),H=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(T.__extends)(t,n),t.prototype.getTranslation=function(n){return Object(k.a)({})},t}(P),A=function(){return function(){}}(),N=function(){function n(){}return n.prototype.handle=function(n){return n.key},n}(),G=function(){return function(){}}(),I=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(T.__extends)(t,n),t.prototype.compile=function(n,t){return n},t.prototype.compileTranslations=function(n,t){return n},t}(G);function q(n){return null!=n}function B(n){return n&&"object"==typeof n&&!Array.isArray(n)}var J=function(){return function(){}}(),U=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.templateMatcher=/{{\s?([^{}\s]*)\s?}}/g,t}return Object(T.__extends)(t,n),t.prototype.interpolate=function(n,t){return"string"==typeof n?this.interpolateString(n,t):"function"==typeof n?this.interpolateFunction(n,t):n},t.prototype.getValue=function(n,t){var s=t.split(".");t="";do{t+=s.shift(),!q(n)||!q(n[t])||"object"!=typeof n[t]&&s.length?s.length?t+=".":n=void 0:(n=n[t],t="")}while(s.length);return n},t.prototype.interpolateFunction=function(n,t){return n(t)},t.prototype.interpolateString=function(n,t){var s=this;return t?n.replace(this.templateMatcher,function(n,a){var e=s.getValue(t,a);return q(e)?e:n}):n},t}(J),V=function(){return function(){this.currentLang=this.defaultLang,this.translations={},this.langs=[],this.onTranslationChange=new a.EventEmitter,this.onLangChange=new a.EventEmitter,this.onDefaultLangChange=new a.EventEmitter}}(),Z=new a.InjectionToken("USE_STORE"),Y=new a.InjectionToken("USE_DEFAULT_LANG"),z=function(){function n(n,t,s,e,r,o,l){void 0===o&&(o=!0),void 0===l&&(l=!1),this.store=n,this.currentLoader=t,this.compiler=s,this.parser=e,this.missingTranslationHandler=r,this.useDefaultLang=o,this.isolate=l,this.pending=!1,this._onTranslationChange=new a.EventEmitter,this._onLangChange=new a.EventEmitter,this._onDefaultLangChange=new a.EventEmitter,this._langs=[],this._translations={},this._translationRequests={}}return Object.defineProperty(n.prototype,"onTranslationChange",{get:function(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"onLangChange",{get:function(){return this.isolate?this._onLangChange:this.store.onLangChange},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"onDefaultLangChange",{get:function(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"defaultLang",{get:function(){return this.isolate?this._defaultLang:this.store.defaultLang},set:function(n){this.isolate?this._defaultLang=n:this.store.defaultLang=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"currentLang",{get:function(){return this.isolate?this._currentLang:this.store.currentLang},set:function(n){this.isolate?this._currentLang=n:this.store.currentLang=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"langs",{get:function(){return this.isolate?this._langs:this.store.langs},set:function(n){this.isolate?this._langs=n:this.store.langs=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"translations",{get:function(){return this.isolate?this._translations:this.store.translations},set:function(n){this.isolate?this._translations=n:this.store.translations=n},enumerable:!0,configurable:!0}),n.prototype.setDefaultLang=function(n){var t=this;if(n!==this.defaultLang){var s=this.retrieveTranslations(n);void 0!==s?(this.defaultLang||(this.defaultLang=n),s.pipe(Object(E.a)(1)).subscribe(function(s){t.changeDefaultLang(n)})):this.changeDefaultLang(n)}},n.prototype.getDefaultLang=function(){return this.defaultLang},n.prototype.use=function(n){var t=this;if(n===this.currentLang)return Object(k.a)(this.translations[n]);var s=this.retrieveTranslations(n);return void 0!==s?(this.currentLang||(this.currentLang=n),s.pipe(Object(E.a)(1)).subscribe(function(s){t.changeLang(n)}),s):(this.changeLang(n),Object(k.a)(this.translations[n]))},n.prototype.retrieveTranslations=function(n){var t;return void 0===this.translations[n]&&(this._translationRequests[n]=this._translationRequests[n]||this.getTranslation(n),t=this._translationRequests[n]),t},n.prototype.getTranslation=function(n){var t=this;this.pending=!0;var s=this.currentLoader.getTranslation(n).pipe(Object(M.a)());return this.loadingTranslations=s.pipe(Object(E.a)(1),Object(R.a)(function(s){return t.compiler.compileTranslations(s,n)}),Object(M.a)()),this.loadingTranslations.subscribe(function(s){t.translations[n]=s,t.updateLangs(),t.pending=!1},function(n){t.pending=!1}),s},n.prototype.setTranslation=function(n,t,s){void 0===s&&(s=!1),t=this.compiler.compileTranslations(t,n),this.translations[n]=s&&this.translations[n]?function n(t,s){var a=Object.assign({},t);return B(t)&&B(s)&&Object.keys(s).forEach(function(e){var r,o;B(s[e])?e in t?a[e]=n(t[e],s[e]):Object.assign(a,((r={})[e]=s[e],r)):Object.assign(a,((o={})[e]=s[e],o))}),a}(this.translations[n],t):t,this.updateLangs(),this.onTranslationChange.emit({lang:n,translations:this.translations[n]})},n.prototype.getLangs=function(){return this.langs},n.prototype.addLangs=function(n){var t=this;n.forEach(function(n){-1===t.langs.indexOf(n)&&t.langs.push(n)})},n.prototype.updateLangs=function(){this.addLangs(Object.keys(this.translations))},n.prototype.getParsedResult=function(n,t,s){var a,e,r,o,l;if(t instanceof Array){var i={},p=!1;try{for(var u=Object(T.__values)(t),c=u.next();!c.done;c=u.next())i[f=c.value]=this.getParsedResult(n,f,s),"function"==typeof i[f].subscribe&&(p=!0)}catch(j){a={error:j}}finally{try{c&&!c.done&&(e=u.return)&&e.call(u)}finally{if(a)throw a.error}}if(p){var m=void 0;try{for(var d=Object(T.__values)(t),g=d.next();!g.done;g=d.next()){var f,h="function"==typeof i[f=g.value].subscribe?i[f]:Object(k.a)(i[f]);m=void 0===m?h:Object(F.a)(m,h)}}catch(b){r={error:b}}finally{try{g&&!g.done&&(o=d.return)&&o.call(d)}finally{if(r)throw r.error}}return m.pipe(Object(S.a)(),Object(R.a)(function(n){var s={};return n.forEach(function(n,a){s[t[a]]=n}),s}))}return i}if(n&&(l=this.parser.interpolate(this.parser.getValue(n,t),s)),void 0===l&&this.defaultLang&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(l=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],t),s)),void 0===l){var y={key:t,translateService:this};void 0!==s&&(y.interpolateParams=s),l=this.missingTranslationHandler.handle(y)}return void 0!==l?l:t},n.prototype.get=function(n,t){var s=this;if(!q(n)||!n.length)throw new Error('Parameter "key" required');if(this.pending)return O.a.create(function(a){var e=function(n){a.next(n),a.complete()},r=function(n){a.error(n)};s.loadingTranslations.subscribe(function(a){"function"==typeof(a=s.getParsedResult(a,n,t)).subscribe?a.subscribe(e,r):e(a)},r)});var a=this.getParsedResult(this.translations[this.currentLang],n,t);return"function"==typeof a.subscribe?a:Object(k.a)(a)},n.prototype.stream=function(n,t){var s=this;if(!q(n)||!n.length)throw new Error('Parameter "key" required');return Object(_.a)(this.get(n,t),this.onLangChange.pipe(Object(D.a)(function(a){var e=s.getParsedResult(a.translations,n,t);return"function"==typeof e.subscribe?e:Object(k.a)(e)})))},n.prototype.instant=function(n,t){if(!q(n)||!n.length)throw new Error('Parameter "key" required');var s=this.getParsedResult(this.translations[this.currentLang],n,t);if(void 0!==s.subscribe){if(n instanceof Array){var a={};return n.forEach(function(t,s){a[n[s]]=n[s]}),a}return n}return s},n.prototype.set=function(n,t,s){void 0===s&&(s=this.currentLang),this.translations[s][n]=this.compiler.compile(t,s),this.updateLangs(),this.onTranslationChange.emit({lang:s,translations:this.translations[s]})},n.prototype.changeLang=function(n){this.currentLang=n,this.onLangChange.emit({lang:n,translations:this.translations[n]}),this.defaultLang||this.changeDefaultLang(n)},n.prototype.changeDefaultLang=function(n){this.defaultLang=n,this.onDefaultLangChange.emit({lang:n,translations:this.translations[n]})},n.prototype.reloadLang=function(n){return this.resetLang(n),this.getTranslation(n)},n.prototype.resetLang=function(n){this._translationRequests[n]=void 0,this.translations[n]=void 0},n.prototype.getBrowserLang=function(){if("undefined"!=typeof window&&void 0!==window.navigator){var n=window.navigator.languages?window.navigator.languages[0]:null;return-1!==(n=n||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage).indexOf("-")&&(n=n.split("-")[0]),-1!==n.indexOf("_")&&(n=n.split("_")[0]),n}},n.prototype.getBrowserCultureLang=function(){if("undefined"!=typeof window&&void 0!==window.navigator)return(window.navigator.languages?window.navigator.languages[0]:null)||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage},n}(),X=function(){function n(){}return n.forRoot=function(t){return void 0===t&&(t={}),{ngModule:n,providers:[t.loader||{provide:P,useClass:H},t.compiler||{provide:G,useClass:I},t.parser||{provide:J,useClass:U},t.missingTranslationHandler||{provide:A,useClass:N},V,{provide:Z,useValue:t.isolate},{provide:Y,useValue:t.useDefaultLang},z]}},n.forChild=function(t){return void 0===t&&(t={}),{ngModule:n,providers:[t.loader||{provide:P,useClass:H},t.compiler||{provide:G,useClass:I},t.parser||{provide:J,useClass:U},t.missingTranslationHandler||{provide:A,useClass:N},{provide:Z,useValue:t.isolate},{provide:Y,useValue:t.useDefaultLang},z]}},n}(),K=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function Q(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,t,s){var e=!0,r=n.component;return"submit"===t&&(e=!1!==a["\u0275nov"](n,2).onSubmit(s)&&e),"reset"===t&&(e=!1!==a["\u0275nov"](n,2).onReset()&&e),"ngSubmit"===t&&(e=!1!==r.submit()&&e),e},null,null)),a["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_bh"],[],null,null),a["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),a["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),a["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),a["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,w.b,w.a)),a["\u0275prd"](512,null,L.a,L.a,[C.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275did"](7,966656,null,0,x.a,[L.a,C.b,[8,null],[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),a["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),a["\u0275ted"](-1,null,["Submit"]))],function(n,t){var s=t.component;n(t,2,0,s.form),n(t,7,0,s.form,s.model,s.fields,s.options)},function(n,t){var s=t.component;n(t,0,0,a["\u0275nov"](t,4).ngClassUntouched,a["\u0275nov"](t,4).ngClassTouched,a["\u0275nov"](t,4).ngClassPristine,a["\u0275nov"](t,4).ngClassDirty,a["\u0275nov"](t,4).ngClassValid,a["\u0275nov"](t,4).ngClassInvalid,a["\u0275nov"](t,4).ngClassPending),n(t,8,0,!s.form.valid)})}function W(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,Q,K)),a["\u0275did"](1,49152,null,0,r,[z],null,null)],null,null)}var $=a["\u0275ccf"]("formly-app-example",r,W,{},{},[]),nn=s("Ip0R"),tn=s("M2Lx"),sn=s("eDkP"),an=s("Fzqc"),en=s("v9Dh"),rn=s("ZYjt"),on=s("Wf4p"),ln=s("6LlJ"),pn=s("F6kA"),un=s("t/Na"),cn=function(){function n(n,t,s){void 0===t&&(t="/assets/i18n/"),void 0===s&&(s=".json"),this.http=n,this.prefix=t,this.suffix=s}return n.prototype.getTranslation=function(n){return this.http.get(""+this.prefix+n+this.suffix)},n}();function mn(n){return new cn(n,"assets/i18n/")}var dn=function(){return function(){}}(),gn=s("dWZg"),fn=s("lLAP"),hn=s("4c35"),yn=s("qAlS"),jn=s("La40"),bn=s("SMsm"),vn=s("UodH"),wn=s("5QwG"),Ln=s("owZ6"),Cn=s("DwvE"),xn=s("DWV+"),Tn=s("3Jkj"),kn=s("dMcW"),Fn=s("5m6/"),On=s("Y9SJ"),_n=s("5Knt"),En=s("EvEK"),Mn=s("XR12"),Rn=s("Nsh5"),Sn=s("8mMr"),Dn=s("mqvi"),Pn=s("lYui"),Hn=s("nyVy"),An=s("7BuT"),Nn=s("ZYCi"),Gn=s("cIcG");s.d(t,"ConfigModuleNgFactory",function(){return In});var In=a["\u0275cmf"](l,[],function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,p.a,u.a,c.a,m.a,d.a,g.a,f.a,h.a,y.a,j.a,b.a,v.a,$]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,nn.NgLocalization,nn.NgLocaleLocalization,[a.LOCALE_ID,[2,nn["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,tn.c,tn.c,[]),a["\u0275mpd"](4608,sn.c,sn.c,[sn.i,sn.e,a.ComponentFactoryResolver,sn.h,sn.f,a.Injector,a.NgZone,nn.DOCUMENT,an.b,[2,nn.Location]]),a["\u0275mpd"](5120,sn.j,sn.k,[sn.c]),a["\u0275mpd"](5120,en.b,en.c,[sn.c]),a["\u0275mpd"](4608,rn.HAMMER_GESTURE_CONFIG,on.c,[[2,on.g],[2,on.l]]),a["\u0275mpd"](4608,ln.a,ln.a,[]),a["\u0275mpd"](4608,pn.a,pn.a,[]),a["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),a["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_j"],e["\u0275angular_packages_forms_forms_j"],[]),a["\u0275mpd"](4608,L.a,L.a,[C.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275mpd"](4608,un.h,un.n,[nn.DOCUMENT,a.PLATFORM_ID,un.l]),a["\u0275mpd"](4608,un.o,un.o,[un.h,un.m]),a["\u0275mpd"](5120,un.a,function(n){return[n]},[un.o]),a["\u0275mpd"](4608,un.k,un.k,[]),a["\u0275mpd"](6144,un.i,null,[un.k]),a["\u0275mpd"](4608,un.g,un.g,[un.i]),a["\u0275mpd"](6144,un.b,null,[un.g]),a["\u0275mpd"](4608,un.f,un.j,[un.b,a.Injector]),a["\u0275mpd"](4608,un.c,un.c,[un.f]),a["\u0275mpd"](5120,P,mn,[un.c]),a["\u0275mpd"](4608,G,I,[]),a["\u0275mpd"](4608,J,U,[]),a["\u0275mpd"](4608,A,N,[]),a["\u0275mpd"](4608,V,V,[]),a["\u0275mpd"](4608,z,z,[V,P,G,J,A,Y,Z]),a["\u0275mpd"](1073742336,nn.CommonModule,nn.CommonModule,[]),a["\u0275mpd"](1073742336,gn.b,gn.b,[]),a["\u0275mpd"](1073742336,tn.d,tn.d,[]),a["\u0275mpd"](1073742336,fn.a,fn.a,[]),a["\u0275mpd"](1073742336,an.a,an.a,[]),a["\u0275mpd"](1073742336,hn.g,hn.g,[]),a["\u0275mpd"](1073742336,yn.c,yn.c,[]),a["\u0275mpd"](1073742336,sn.g,sn.g,[]),a["\u0275mpd"](1073742336,on.l,on.l,[[2,on.d],[2,rn.HAMMER_LOADER]]),a["\u0275mpd"](1073742336,en.e,en.e,[]),a["\u0275mpd"](1073742336,on.v,on.v,[]),a["\u0275mpd"](1073742336,jn.j,jn.j,[]),a["\u0275mpd"](1073742336,bn.c,bn.c,[]),a["\u0275mpd"](1073742336,vn.c,vn.c,[]),a["\u0275mpd"](1073742336,wn.b,wn.b,[]),a["\u0275mpd"](512,C.b,C.b,[]),a["\u0275mpd"](1024,C.a,function(n){return[{wrappers:[{name:"addons",component:Ln.a}],extensions:[{name:"addons",extension:{postPopulate:Cn.a}}]},{types:[{name:"input",component:xn.a,wrappers:["form-field"]},{name:"checkbox",component:Tn.a,wrappers:["form-field"]},{name:"radio",component:kn.a,wrappers:["form-field"]},{name:"select",component:Fn.a,wrappers:["form-field"]},{name:"textarea",component:On.a,wrappers:["form-field"]},{name:"multicheckbox",component:_n.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:En.a}]},Mn.b(n),{}]},[C.b]),a["\u0275mpd"](1073742336,Mn.a,Mn.a,[C.b,[2,C.a]]),a["\u0275mpd"](1073742336,Rn.h,Rn.h,[]),a["\u0275mpd"](1073742336,Sn.b,Sn.b,[]),a["\u0275mpd"](1073742336,Dn.a,Dn.a,[]),a["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_bc"],e["\u0275angular_packages_forms_forms_bc"],[]),a["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),a["\u0275mpd"](1073742336,Pn.a,Pn.a,[]),a["\u0275mpd"](1073742336,Hn.a,Hn.a,[]),a["\u0275mpd"](1073742336,An.a,An.a,[]),a["\u0275mpd"](1073742336,un.e,un.e,[]),a["\u0275mpd"](1073742336,un.d,un.d,[]),a["\u0275mpd"](1073742336,X,X,[]),a["\u0275mpd"](1073742336,dn,dn,[]),a["\u0275mpd"](1073742336,Nn.s,Nn.s,[[2,Nn.y],[2,Nn.p]]),a["\u0275mpd"](1073742336,l,l,[]),a["\u0275mpd"](256,un.l,"XSRF-TOKEN",[]),a["\u0275mpd"](256,un.m,"X-XSRF-TOKEN",[]),a["\u0275mpd"](256,Z,void 0,[]),a["\u0275mpd"](256,Y,void 0,[]),a["\u0275mpd"](1024,Nn.n,function(){return[[{path:"",component:Gn.a,data:o}]]},[])])})},h75i:function(n,t){n.exports='{\n  "HOME": {\n    "TITLE": "Hello Angular with ngx-translate!",\n    "SELECT": "Change language"\n  }\n}\n'},mbSE:function(n,t){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { HttpClient, HttpClientModule } from '@angular/common/http';\nimport { TranslateModule, TranslateLoader } from '@ngx-translate/core';\nimport { TranslateHttpLoader } from '@ngx-translate/http-loader';\n\n// AoT requires an exported function for factories\nexport function HttpLoaderFactory(httpClient: HttpClient) {\n  return new TranslateHttpLoader(httpClient, 'assets/i18n/');\n}\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n\n    HttpClientModule,\n    TranslateModule.forRoot({\n      loader: {\n        provide: TranslateLoader,\n        useFactory: HttpLoaderFactory,\n        deps: [HttpClient],\n      },\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},pkPx:function(n,t){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { TranslateService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-translate/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'lang\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        required: <span class="hljs-literal">true</span>,\n        change: <span class="hljs-function">(<span class="hljs-params">field</span>) =&gt;</span> <span class="hljs-keyword">this</span>.translate.use(field.formControl.value),\n        options: [\n          { label: <span class="hljs-string">\'fr\'</span>, value: <span class="hljs-string">\'fr\'</span> },\n          { label: <span class="hljs-string">\'en\'</span>, value: <span class="hljs-string">\'en\'</span> },\n        ],\n      },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.label\'</span>: <span class="hljs-keyword">this</span>.translate.stream(<span class="hljs-string">\'HOME.SELECT\'</span>),\n      },\n    },\n  ];\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">public</span> translate: TranslateService</span>) {\n    translate.addLangs([<span class="hljs-string">\'en\'</span>, <span class="hljs-string">\'fr\'</span>]);\n    translate.setDefaultLang(<span class="hljs-string">\'en\'</span>);\n\n    <span class="hljs-keyword">const</span> browserLang = translate.getBrowserLang();\n\n    translate.use(browserLang.match(<span class="hljs-regexp">/en|fr/</span>) ? browserLang : <span class="hljs-string">\'en\'</span>);\n    <span class="hljs-keyword">this</span>.model.lang = translate.currentLang;\n  }\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},rtAZ:function(n,t){n.exports='{\n  "HOME": {\n    "TITLE": "Bonjour Angular avec ngx-translate !",\n    "SELECT": "Changer la langue"\n  }\n}\n'},vtgh:function(n,t){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\nimport { TranslateService } from '@ngx-translate/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'lang',\n      type: 'select',\n      templateOptions: {\n        required: true,\n        change: (field) => this.translate.use(field.formControl.value),\n        options: [\n          { label: 'fr', value: 'fr' },\n          { label: 'en', value: 'en' },\n        ],\n      },\n      expressionProperties: {\n        'templateOptions.label': this.translate.stream('HOME.SELECT'),\n      },\n    },\n  ];\n\n  constructor(public translate: TranslateService) {\n    translate.addLangs(['en', 'fr']);\n    translate.setDefaultLang('en');\n\n    const browserLang = translate.getBrowserLang();\n\n    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');\n    this.model.lang = translate.currentLang;\n  }\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},z2QG:function(n,t){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { HttpClient, HttpClientModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common/http\'</span>;\n<span class="hljs-keyword">import</span> { TranslateModule, TranslateLoader } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-translate/core\'</span>;\n<span class="hljs-keyword">import</span> { TranslateHttpLoader } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-translate/http-loader\'</span>;\n\n<span class="hljs-comment">// AoT requires an exported function for factories</span>\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">HttpLoaderFactory</span>(<span class="hljs-params">httpClient: HttpClient</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> TranslateHttpLoader(httpClient, <span class="hljs-string">\'assets/i18n/\'</span>);\n}\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n\n    HttpClientModule,\n    TranslateModule.forRoot({\n      loader: {\n        provide: TranslateLoader,\n        useFactory: HttpLoaderFactory,\n        deps: [HttpClient],\n      },\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'}}]);