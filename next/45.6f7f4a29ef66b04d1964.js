(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"64vR":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'text\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      modelOptions: {\n        debounce: {\n          <span class="hljs-keyword">default</span>: <span class="hljs-number">2000</span>,\n        },\n      },\n      templateOptions: {\n        label: <span class="hljs-string">\'Debounce\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'updateOnBlur\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      modelOptions: {\n        updateOn: <span class="hljs-string">\'blur\'</span>,\n      },\n      templateOptions: {\n        label: <span class="hljs-string">\'`updateOn` on Blur\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'updateOnSubmit\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      modelOptions: {\n        updateOn: <span class="hljs-string">\'submit\'</span>,\n      },\n      templateOptions: {\n        label: <span class="hljs-string">\'`updateOn` on Submit\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},"8TTP":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},JjtM:function(n,s,a){"use strict";a.r(s);var l=a("CcnG"),o=a("gIcY"),e=function(){function n(){this.form=new o.FormGroup({}),this.model={},this.options={},this.fields=[{key:"text",type:"input",modelOptions:{debounce:{default:2e3}},templateOptions:{label:"Debounce"}},{key:"updateOnBlur",type:"input",modelOptions:{updateOn:"blur"},templateOptions:{label:"`updateOn` on Blur",required:!0}},{key:"updateOnSubmit",type:"input",modelOptions:{updateOn:"submit"},templateOptions:{label:"`updateOn` on Submit",required:!0}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),p={examples:[{title:"modelOptions",description:"",component:e,files:[{file:"app.component.html",content:a("hSku"),filecontent:a("8TTP")},{file:"app.component.ts",content:a("64vR"),filecontent:a("WGm1")},{file:"app.module.ts",content:a("x46d"),filecontent:a("Ymqy")}]}]},t=function(){return function(){}}(),r=a("NcP4"),m=a("AcC/"),i=a("htty"),u=a("LgGJ"),d=a("MT1c"),c=a("1Q/V"),f=a("9+aI"),g=a("haId"),h=a("LJsP"),y=a("yR2A"),j=a("UFMs"),b=a("pMnS"),F=a("4o01"),k=a("Dl9q"),w=a("UcnZ"),C=a("DAbo"),v=a("9Glx"),O=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function M(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var o=!0,e=n.component;return"submit"===s&&(o=!1!==l["\u0275nov"](n,2).onSubmit(a)&&o),"reset"===s&&(o=!1!==l["\u0275nov"](n,2).onReset()&&o),"ngSubmit"===s&&(o=!1!==e.submit()&&o),o},null,null)),l["\u0275did"](1,16384,null,0,o["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),l["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,k.b,k.a)),l["\u0275prd"](512,null,w.a,w.a,[C.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,v.a,[w.a,C.b,[8,null],[2,o.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)},function(n,s){n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending)})}function x(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,M,O)),l["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)}var _=l["\u0275ccf"]("formly-app-example",e,x,{},{},[]),R=a("Ip0R"),S=a("M2Lx"),q=a("eDkP"),G=a("Fzqc"),A=a("v9Dh"),N=a("ZYjt"),D=a("Wf4p"),B=a("6LlJ"),L=a("F6kA"),I=a("dWZg"),T=a("lLAP"),P=a("4c35"),J=a("qAlS"),E=a("La40"),U=a("SMsm"),Y=a("UodH"),V=a("5QwG"),W=a("qkla"),Z=a("iZhS"),z=a("me7w"),H=a("N3PW"),Q=a("l4pn"),$=a("Fv2i"),X=a("wBYW"),K=a("IE48"),nn=a("Q4Tx"),sn=a("XR12");function an(n,s){return'"This required field was validated after '+s.formControl.updateOn+'"'}a("HkYz");var ln=function(){return function(){}}(),on=a("Nsh5"),en=a("8mMr"),pn=a("mqvi"),tn=a("lYui"),rn=a("VGFS"),mn=a("1ey0"),un=a("ZYCi"),dn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return cn});var cn=l["\u0275cmf"](t,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,u.a,d.a,c.a,f.a,g.a,h.a,y.a,j.a,b.a,F.a,_]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[l.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,S.c,S.c,[]),l["\u0275mpd"](4608,q.c,q.c,[q.i,q.e,l.ComponentFactoryResolver,q.h,q.f,l.Injector,l.NgZone,R.DOCUMENT,G.b,[2,R.Location]]),l["\u0275mpd"](5120,q.j,q.k,[q.c]),l["\u0275mpd"](5120,A.b,A.c,[q.c]),l["\u0275mpd"](4608,N.HAMMER_GESTURE_CONFIG,D.c,[[2,D.g],[2,D.l]]),l["\u0275mpd"](4608,B.a,B.a,[]),l["\u0275mpd"](4608,L.a,L.a,[]),l["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),l["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_j"],o["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,w.a,w.a,[C.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),l["\u0275mpd"](1073742336,I.b,I.b,[]),l["\u0275mpd"](1073742336,S.d,S.d,[]),l["\u0275mpd"](1073742336,T.a,T.a,[]),l["\u0275mpd"](1073742336,G.a,G.a,[]),l["\u0275mpd"](1073742336,P.g,P.g,[]),l["\u0275mpd"](1073742336,J.c,J.c,[]),l["\u0275mpd"](1073742336,q.g,q.g,[]),l["\u0275mpd"](1073742336,D.l,D.l,[[2,D.d],[2,N.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,A.e,A.e,[]),l["\u0275mpd"](1073742336,D.v,D.v,[]),l["\u0275mpd"](1073742336,E.j,E.j,[]),l["\u0275mpd"](1073742336,U.c,U.c,[]),l["\u0275mpd"](1073742336,Y.c,Y.c,[]),l["\u0275mpd"](1073742336,V.b,V.b,[]),l["\u0275mpd"](512,C.b,C.b,[]),l["\u0275mpd"](1024,C.a,function(n){return[{wrappers:[{name:"addons",component:W.a}],extensions:[{name:"addons",extension:{postPopulate:Z.a}}]},{types:[{name:"input",component:z.a,wrappers:["form-field"]},{name:"checkbox",component:H.a,wrappers:["form-field"]},{name:"radio",component:Q.a,wrappers:["form-field"]},{name:"select",component:$.a,wrappers:["form-field"]},{name:"textarea",component:X.a,wrappers:["form-field"]},{name:"multicheckbox",component:K.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:nn.a}]},sn.b(n),{validationMessages:[{name:"required",message:an}]}]},[C.b]),l["\u0275mpd"](1073742336,sn.a,sn.a,[C.b,[2,C.a]]),l["\u0275mpd"](1073742336,on.h,on.h,[]),l["\u0275mpd"](1073742336,en.b,en.b,[]),l["\u0275mpd"](1073742336,pn.a,pn.a,[]),l["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_bc"],o["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,tn.a,tn.a,[]),l["\u0275mpd"](1073742336,rn.a,rn.a,[]),l["\u0275mpd"](1073742336,mn.a,mn.a,[]),l["\u0275mpd"](1073742336,ln,ln,[]),l["\u0275mpd"](1073742336,un.s,un.s,[[2,un.y],[2,un.p]]),l["\u0275mpd"](1073742336,t,t,[]),l["\u0275mpd"](1024,un.n,function(){return[[{path:"",component:dn.a,data:p}]]},[])])})},WGm1:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'input',\n      modelOptions: {\n        debounce: {\n          default: 2000,\n        },\n      },\n      templateOptions: {\n        label: 'Debounce',\n      },\n    },\n    {\n      key: 'updateOnBlur',\n      type: 'input',\n      modelOptions: {\n        updateOn: 'blur',\n      },\n      templateOptions: {\n        label: '`updateOn` on Blur',\n        required: true,\n      },\n    },\n    {\n      key: 'updateOnSubmit',\n      type: 'input',\n      modelOptions: {\n        updateOn: 'submit',\n      },\n      templateOptions: {\n        label: '`updateOn` on Submit',\n        required: true,\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},Ymqy:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n\nexport function RequiredValidatorMessage(err, field: FormlyFieldConfig) {\n  return `\"This required field was validated after ${field.formControl.updateOn}\"`;\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        {\n          name: 'required',\n          message: RequiredValidatorMessage,\n        },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},hSku:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},x46d:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">RequiredValidatorMessage</span>(<span class="hljs-params">err, field: FormlyFieldConfig</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`"This required field was validated after <span class="hljs-subst">${field.formControl.updateOn}</span>"`</span>;\n}\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        {\n          name: <span class="hljs-string">\'required\'</span>,\n          message: RequiredValidatorMessage,\n        },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'}}]);