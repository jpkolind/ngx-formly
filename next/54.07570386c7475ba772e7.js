(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"+BXD":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  options: FormlyFormOptions = {};\n\n  model = {\n    showErrorState: true,\n  };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'email',\n      type: 'input',\n      templateOptions: {\n        type: 'email',\n        label: 'Email',\n        required: true,\n      },\n      validation: {\n        show: true,\n      },\n      expressionProperties: {\n        'validation.show': 'model.showErrorState',\n      },\n    },\n    {\n      key: 'showErrorState',\n      type: 'checkbox',\n      templateOptions: {\n        label: 'Force show error state',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},"1SC5":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},bUVO:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  options: FormlyFormOptions = {};\n\n  model = {\n    showErrorState: <span class="hljs-literal">true</span>,\n  };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'email\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'email\'</span>,\n        label: <span class="hljs-string">\'Email\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      validation: {\n        show: <span class="hljs-literal">true</span>,\n      },\n      expressionProperties: {\n        <span class="hljs-string">\'validation.show\'</span>: <span class="hljs-string">\'model.showErrorState\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'showErrorState\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'checkbox\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Force show error state\'</span>,\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},cvLG:function(n,s,a){"use strict";a.r(s);var o=a("CcnG"),l=a("gIcY"),e=function(){function n(){this.form=new l.FormGroup({}),this.options={},this.model={showErrorState:!0},this.fields=[{key:"email",type:"input",templateOptions:{type:"email",label:"Email",required:!0},validation:{show:!0},expressionProperties:{"validation.show":"model.showErrorState"}},{key:"showErrorState",type:"checkbox",templateOptions:{label:"Force show error state"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),r={examples:[{title:"Force showing error state",description:"\n              Using <code>validation.show = true</code> you can force the validation state to be set to true.\n            ",component:e,files:[{file:"app.component.html",content:a("jmbL"),filecontent:a("qL6N")},{file:"app.component.ts",content:a("bUVO"),filecontent:a("+BXD")},{file:"app.module.ts",content:a("1SC5"),filecontent:a("ipBd")}]}]},t=function(){return function(){}}(),p=a("NcP4"),m=a("AcC/"),i=a("htty"),c=a("LgGJ"),d=a("MT1c"),u=a("1Q/V"),f=a("9+aI"),h=a("haId"),g=a("LJsP"),y=a("yR2A"),j=a("UFMs"),b=a("pMnS"),w=a("4o01"),F=a("Dl9q"),v=a("UcnZ"),k=a("DAbo"),C=a("9Glx"),M=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var l=!0,e=n.component;return"submit"===s&&(l=!1!==o["\u0275nov"](n,2).onSubmit(a)&&l),"reset"===s&&(l=!1!==o["\u0275nov"](n,2).onReset()&&l),"ngSubmit"===s&&(l=!1!==e.submit()&&l),l},null,null)),o["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_bh"],[],null,null),o["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),o["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),o["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,F.b,F.a)),o["\u0275prd"](512,null,v.a,v.a,[k.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275did"](7,966656,null,0,C.a,[v.a,k.b,[8,null],[2,l.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),o["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)},function(n,s){n(s,0,0,o["\u0275nov"](s,4).ngClassUntouched,o["\u0275nov"](s,4).ngClassTouched,o["\u0275nov"](s,4).ngClassPristine,o["\u0275nov"](s,4).ngClassDirty,o["\u0275nov"](s,4).ngClassValid,o["\u0275nov"](s,4).ngClassInvalid,o["\u0275nov"](s,4).ngClassPending)})}function S(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,x,M)),o["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)}var _=o["\u0275ccf"]("formly-app-example",e,S,{},{},[]),R=a("Ip0R"),E=a("M2Lx"),G=a("eDkP"),N=a("Fzqc"),O=a("v9Dh"),A=a("ZYjt"),L=a("Wf4p"),q=a("6LlJ"),D=a("F6kA"),I=a("dWZg"),B=a("lLAP"),P=a("4c35"),U=a("qAlS"),J=a("La40"),T=a("SMsm"),Z=a("UodH"),V=a("5QwG"),Y=a("qkla"),W=a("iZhS"),z=a("me7w"),H=a("N3PW"),Q=a("l4pn"),X=a("Fv2i"),K=a("wBYW"),$=a("IE48"),nn=a("Q4Tx"),sn=a("XR12"),an=a("Nsh5"),on=a("8mMr"),ln=a("mqvi"),en=a("lYui"),rn=a("VGFS"),tn=a("1ey0"),pn=function(){return function(){}}(),mn=a("ZYCi"),cn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return dn});var dn=o["\u0275cmf"](t,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[p.a,m.a,i.a,c.a,d.a,u.a,f.a,h.a,g.a,y.a,j.a,b.a,w.a,_]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[o.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,E.c,E.c,[]),o["\u0275mpd"](4608,G.c,G.c,[G.i,G.e,o.ComponentFactoryResolver,G.h,G.f,o.Injector,o.NgZone,R.DOCUMENT,N.b,[2,R.Location]]),o["\u0275mpd"](5120,G.j,G.k,[G.c]),o["\u0275mpd"](5120,O.b,O.c,[G.c]),o["\u0275mpd"](4608,A.HAMMER_GESTURE_CONFIG,L.c,[[2,L.g],[2,L.l]]),o["\u0275mpd"](4608,q.a,q.a,[]),o["\u0275mpd"](4608,D.a,D.a,[]),o["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),o["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_j"],l["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,v.a,v.a,[k.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),o["\u0275mpd"](1073742336,I.b,I.b,[]),o["\u0275mpd"](1073742336,E.d,E.d,[]),o["\u0275mpd"](1073742336,B.a,B.a,[]),o["\u0275mpd"](1073742336,N.a,N.a,[]),o["\u0275mpd"](1073742336,P.g,P.g,[]),o["\u0275mpd"](1073742336,U.c,U.c,[]),o["\u0275mpd"](1073742336,G.g,G.g,[]),o["\u0275mpd"](1073742336,L.l,L.l,[[2,L.d],[2,A.HAMMER_LOADER]]),o["\u0275mpd"](1073742336,O.e,O.e,[]),o["\u0275mpd"](1073742336,L.v,L.v,[]),o["\u0275mpd"](1073742336,J.j,J.j,[]),o["\u0275mpd"](1073742336,T.c,T.c,[]),o["\u0275mpd"](1073742336,Z.c,Z.c,[]),o["\u0275mpd"](1073742336,V.b,V.b,[]),o["\u0275mpd"](512,k.b,k.b,[]),o["\u0275mpd"](1024,k.a,function(n){return[{wrappers:[{name:"addons",component:Y.a}],extensions:[{name:"addons",extension:{postPopulate:W.a}}]},{types:[{name:"input",component:z.a,wrappers:["form-field"]},{name:"checkbox",component:H.a,wrappers:["form-field"]},{name:"radio",component:Q.a,wrappers:["form-field"]},{name:"select",component:X.a,wrappers:["form-field"]},{name:"textarea",component:K.a,wrappers:["form-field"]},{name:"multicheckbox",component:$.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:nn.a}]},sn.b(n),{validationMessages:[{name:"required",message:"This field is required"}]}]},[k.b]),o["\u0275mpd"](1073742336,sn.a,sn.a,[k.b,[2,k.a]]),o["\u0275mpd"](1073742336,an.h,an.h,[]),o["\u0275mpd"](1073742336,on.b,on.b,[]),o["\u0275mpd"](1073742336,ln.a,ln.a,[]),o["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_bc"],l["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,en.a,en.a,[]),o["\u0275mpd"](1073742336,rn.a,rn.a,[]),o["\u0275mpd"](1073742336,tn.a,tn.a,[]),o["\u0275mpd"](1073742336,pn,pn,[]),o["\u0275mpd"](1073742336,mn.s,mn.s,[[2,mn.y],[2,mn.p]]),o["\u0275mpd"](1073742336,t,t,[]),o["\u0275mpd"](1024,mn.n,function(){return[[{path:"",component:cn.a,data:r}]]},[])])})},ipBd:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},jmbL:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},qL6N:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'}}]);