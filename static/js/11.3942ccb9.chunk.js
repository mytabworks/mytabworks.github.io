(this["webpackJsonpbitter-code"]=this["webpackJsonpbitter-code"]||[]).push([[11,16],{565:function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var t=a(7),l=a(2),c=a(0),r=a.n(c),o=a(25),s=a(19),i=function(e){var n=e.settingsAllowed,a=e.localkey,c=e.allowConvex,i=e.allowEngrave,m=e.allowEngraveWithConcave,p=e.allowFloat,u=e.max,d=e.min,f=Object(o.b)(a),E=f.getLocal,v=f.setLocal,b=E();return u=Object(l.a)({distance:10,blur:20,intensity:100,radius:50,border:10},u),d=Object(l.a)({distance:1,blur:2,intensity:10,radius:0,border:1},d),r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("li",null,r.a.createElement("div",{className:"px-3 py-2"},r.a.createElement("div",{className:"n-switch"},r.a.createElement("input",{id:"switch-convex",type:"checkbox",checked:b.convex,onChange:function(e){v((function(e){return Object(l.a)({},e,{convex:!e.convex,distance:2,blur:4})}))}}),r.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-convex"},"convex")))),i&&r.a.createElement("li",null,r.a.createElement("div",{className:"px-3 py-2"},r.a.createElement("div",{className:"n-switch"},r.a.createElement("input",{id:"switch-engrave",type:"checkbox",checked:b.engrave,onChange:function(e){v((function(e){return Object(l.a)({},e,{engrave:!e.engrave})}))}}),r.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-engrave"},"engrave")))),m&&r.a.createElement("li",null,r.a.createElement("div",{className:"px-3 py-2"},r.a.createElement("div",{className:"n-switch"},r.a.createElement("input",{id:"switch-engrave",type:"checkbox",checked:b.engrave,onChange:function(e){v((function(e){return Object(l.a)({},e,{concave:e.engrave,engrave:!e.engrave,border:2})}))}}),r.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-engrave"},"engrave")))),p&&r.a.createElement("li",null,r.a.createElement("div",{className:"px-3 py-2"},r.a.createElement("div",{className:"n-switch"},r.a.createElement("input",{id:"switch-float",type:"checkbox",checked:b.float,onChange:function(e){v((function(e){return Object(l.a)({},e,{float:!e.float})}))}}),r.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-float"},"float")))),n.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("div",{className:"px-3 py-2"},r.a.createElement("label",null,e),r.a.createElement(s.a,{variant:"dark",message:"".concat(b[e]),placement:"left"},r.a.createElement("input",{type:"range",value:b[e],min:d[e],max:u[e],className:"n-form-control",onChange:function(n){var a=parseInt(n.target.value);v((function(n){return"distance"===e?Object(l.a)({},n,{distance:a,blur:2*a}):Object(l.a)({},n,Object(t.a)({},e,a))}))}}))))})))}},642:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),c=a(14),r=a(565),o=a(10),s='<div class="n-form-field">\n    <label>Username</label>\n    <input class="n-form-control" type="text" placeholder="enter username..." name="username"/>\n</div>\n<div class="n-form-field">\n    <label>Password</label>\n    <input class="n-form-control" type="password" placeholder="enter password..." name="password"/>\n</div>',i='<div class="n-form-field n-form-valid">\n    <label>Username</label>\n    <input class="n-form-control" type="text" value="mytabworks" name="username"/>\n    <div class="n-valid-feedback"><span role="img">\u2714\ufe0f</span> username is valid!</div>\n</div>\n<div class="n-form-field n-form-invalid">\n    <label>Password</label>\n    <input class="n-form-control" type="password" value="123456" name="password"/>\n    <div class="n-invalid-feedback">wrong credentials</div>\n</div>',m='<div class="n-form-field">\n    <label class="n-form-check"><input class="n-form-control" type="checkbox" name="cb-ex" value="1" />checkbox 1</label>\n    <label class="n-form-check"><input class="n-form-control" type="checkbox" name="cb-ex" value="2" />checkbox 2</label>\n    <label class="n-form-check"><input class="n-form-control" type="checkbox" name="cb-ex" value="3"/>checkbox 3</label>\n</div>',p='<div class="n-form-field">\n    <label class="n-form-check"><input class="n-form-control" type="radio" name="r-ex" value="1" />radio 1</label>\n    <label class="n-form-check"><input class="n-form-control" type="radio" name="r-ex" value="2" />radio 2</label>\n    <label class="n-form-check"><input class="n-form-control" type="radio" name="r-ex" value="3" />radio 3</label>\n</div>',u='<div class="n-form-field">\n    <label class="n-form-check-inline"><input class="n-form-control" type="checkbox" name="cb-ex" value="1" />checkbox 1</label>\n    <label class="n-form-check-inline"><input class="n-form-control" type="checkbox" name="cb-ex" value="2" />checkbox 2</label>\n    <label class="n-form-check-inline"><input class="n-form-control" type="checkbox" name="cb-ex" value="3"/>checkbox 3</label>\n</div>\n<div class="n-form-field n-form-inline">\n    <label class="n-form-check-inline"><input class="n-form-control" type="radio" name="r-ex" value="1" />radio 1</label>\n    <label class="n-form-check-inline"><input class="n-form-control" type="radio" name="r-ex" value="2" />radio 2</label>\n    <label class="n-form-check-inline"><input class="n-form-control" type="radio" name="r-ex" value="3" />radio 3</label>\n</div>',d='<div class="n-form-field">\n    <div class="n-switch">\n        <input id="switch-1" type="checkbox" />\n        <label class="n-switch-label" for="switch-1">switch</label>\n    </div> \n    <div class="n-switch">\n        <input id="switch-2" type="checkbox" disabled />\n        <label class="n-switch-label" for="switch-2">(disabled)</label>\n    </div>\n</div>',f='<textarea class="n-form-control" placeholder="enter comment..." ></textarea>',E='<select class="n-form-control" >\n    <option value="">choose wisely...</option>\n    <option value="1">option 1</option>\n    <option value="2">option 2</option>\n</select>',v='<input class="n-form-control active" type="text" placeholder="enter text..."/>\n<label class="n-form-check"><input class="n-form-control active" type="checkbox" value="1" />checkbox</label>\n<label class="n-form-check"><input class="n-form-control active" type="radio" value="1" />radio</label>\n<input class="n-form-control active" type="range" />\n<input class="n-form-control active" type="color" />\n<textarea class="n-form-control active" placeholder="enter comment..." />\n<select class="n-form-control active">\n    <option value="">choose wisely...</option>\n    <option value="1">option 1</option>\n    <option value="2">option 2</option>\n</select>',b='<input class="n-form-control" type="text" placeholder="enter text..." disabled/>\n<label class="n-form-check"><input class="n-form-control" type="checkbox" value="1" disabled />checkbox</label>\n<label class="n-form-check"><input class="n-form-control" type="radio" value="1" disabled />radio</label>\n<input class="n-form-control" type="range" disabled />\n<input class="n-form-control" type="color" disabled />\n<textarea class="n-form-control" placeholder="enter comment..." disabled />\n<select class="n-form-control" disabled>\n    <option value="">choose wisely...</option>\n    <option value="1">option 1</option>\n    <option value="2">option 2</option>\n</select>',h=function(){return l.a.createElement(c.l,{title:"Examples",context:"here is a quick example of the form style."},l.a.createElement(c.f,{code:s},l.a.createElement(c.c,{code:s})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{className:"n-form-control",type:"text",placeholder:"enter username...",name:"username"})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{className:"n-form-control",type:"password",placeholder:"enter password...",name:"password"})))},x=function(){return l.a.createElement(c.l,{title:"Validation Design",context:"it use to show visibility of validation."},l.a.createElement(c.f,{code:i},l.a.createElement(c.c,{code:i})),l.a.createElement("div",{className:"n-form-field n-form-valid"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{className:"n-form-control",type:"text",defaultValue:"mytabworks",name:"username"}),l.a.createElement("div",{className:"n-valid-feedback"},l.a.createElement("span",{role:"img","aria-label":"checked"},"\u2714\ufe0f")," username is valid!")),l.a.createElement("div",{className:"n-form-field n-form-invalid"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{className:"n-form-control",type:"password",defaultValue:"123456",name:"password"}),l.a.createElement("div",{className:"n-invalid-feedback"},"wrong credentials")))},N=function(){return l.a.createElement(c.l,{title:"Checkbox",context:"it a user select ZERO or MORE options of a limited number of choices."},l.a.createElement(c.f,{code:m},l.a.createElement(c.c,{code:m})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("label",{className:"n-form-check"},l.a.createElement("input",{className:"n-form-control",type:"checkbox",name:"cb-ex",value:"1"}),"checkbox 1"),l.a.createElement("label",{className:"n-form-check"},l.a.createElement("input",{className:"n-form-control",type:"checkbox",name:"cb-ex",value:"2"}),"checkbox 2"),l.a.createElement("label",{className:"n-form-check"},l.a.createElement("input",{className:"n-form-control",type:"checkbox",name:"cb-ex",value:"3"}),"checkbox 3")))},g=function(){return l.a.createElement(c.l,{title:"Radio",context:"it a user select only one of a limited number of choices."},l.a.createElement(c.f,{code:p},l.a.createElement(c.c,{code:p})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("label",{className:"n-form-check"},l.a.createElement("input",{className:"n-form-control",type:"radio",name:"r-ex",value:"1"}),"radio 1"),l.a.createElement("label",{className:"n-form-check"},l.a.createElement("input",{className:"n-form-control",type:"radio",name:"r-ex",value:"2"}),"radio 2"),l.a.createElement("label",{className:"n-form-check"},l.a.createElement("input",{className:"n-form-control",type:"radio",name:"r-ex",value:"3"}),"radio 3")))},y=function(){return l.a.createElement(c.l,{title:"Inline radio and checkboxes",context:l.a.createElement(l.a.Fragment,null,"instead using ",l.a.createElement("b",null,".n-form-check")," class. you must use ",l.a.createElement("b",null,".n-form-check-inline")," class otherwise.")},l.a.createElement(c.f,{code:u},l.a.createElement(c.c,{code:u})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("label",{className:"n-form-check-inline"},l.a.createElement("input",{className:"n-form-control",type:"checkbox",name:"cb-ex",value:"1"}),"checkbox 1"),l.a.createElement("label",{className:"n-form-check-inline"},l.a.createElement("input",{className:"n-form-control",type:"checkbox",name:"cb-ex",value:"2"}),"checkbox 2"),l.a.createElement("label",{className:"n-form-check-inline"},l.a.createElement("input",{className:"n-form-control",type:"checkbox",name:"cb-ex",value:"3"}),"checkbox 3")),l.a.createElement("div",{className:"n-form-field n-form-inline"},l.a.createElement("label",{className:"n-form-check-inline"},l.a.createElement("input",{className:"n-form-control",type:"radio",name:"r-ex",value:"1"}),"radio 1"),l.a.createElement("label",{className:"n-form-check-inline"},l.a.createElement("input",{className:"n-form-control",type:"radio",name:"r-ex",value:"2"}),"radio 2"),l.a.createElement("label",{className:"n-form-check-inline"},l.a.createElement("input",{className:"n-form-control",type:"radio",name:"r-ex",value:"3"}),"radio 3")))},k=function(){return l.a.createElement(c.l,{title:"Switch",context:"it a user select ZERO or MORE options of a limited number of choices."},l.a.createElement(c.f,{code:d},l.a.createElement(c.c,{code:d})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("div",{className:"n-switch"},l.a.createElement("input",{id:"switch-1",type:"checkbox"}),l.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-1"},"switch")),l.a.createElement("div",{className:"n-switch"},l.a.createElement("input",{id:"switch-2",type:"checkbox",disabled:!0}),l.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-2"},"(disabled)"))))},w=function(){return l.a.createElement(c.l,{title:"Range",context:"defines a control for entering a number whose exact value is not important (like a slider control)."},l.a.createElement(c.f,{code:'<input class="n-form-control" type="range" />'},l.a.createElement(c.c,{code:'<input class="n-form-control" type="range" />'})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("input",{className:"n-form-control",type:"range",name:"range-ex"})))},F=function(){return l.a.createElement(c.l,{title:"Color",context:"a color picker can show up in the input field."},l.a.createElement(c.f,{code:'<input class="n-form-control" type="color" />'},l.a.createElement(c.c,{code:'<input class="n-form-control" type="color" />'})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("input",{className:"n-form-control",type:"color",name:"color-ex"})))},O=function(){return l.a.createElement(c.l,{title:"Textarea",context:"element defines a multi-line input field."},l.a.createElement(c.f,{code:f},l.a.createElement(c.c,{code:f})),l.a.createElement("textarea",{className:"n-form-control",name:"comment",placeholder:"enter comment..."}))},C=function(){return l.a.createElement(c.l,{title:"Select",context:"element defines a drop-down list."},l.a.createElement(c.f,{code:E},l.a.createElement(c.c,{code:E})),l.a.createElement("select",{className:"n-form-control",name:"selector"},l.a.createElement("option",{value:""},"choose wisely..."),l.a.createElement("option",{value:"1"},"option 1"),l.a.createElement("option",{value:"2"},"option 2")))},j=function(){return l.a.createElement(c.l,{title:"Active state",context:".active class will forcely focus the form fields."},l.a.createElement(c.f,{code:v},l.a.createElement(c.c,{code:v})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("input",{className:"n-form-control active",type:"text",placeholder:"enter text...",name:"text"})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("label",{className:"n-form-check"},l.a.createElement("input",{className:"n-form-control active",type:"checkbox",name:"cb",value:"1"}),"checkbox")),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("label",{className:"n-form-check"},l.a.createElement("input",{className:"n-form-control active",type:"radio",name:"r",value:"1"}),"radio")),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("input",{className:"n-form-control active",type:"range",name:"range"})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("input",{className:"n-form-control active",type:"color",name:"color"})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("textarea",{className:"n-form-control active",name:"comment",placeholder:"enter comment..."})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("select",{className:"n-form-control active"},l.a.createElement("option",{value:""},"choose wisely..."),l.a.createElement("option",{value:"1"},"option 1"),l.a.createElement("option",{value:"2"},"option 2"))))},B=function(){return l.a.createElement(c.l,{title:"Disabled state",context:"Specifies that an form field should be disabled."},l.a.createElement(c.f,{code:b},l.a.createElement(c.c,{code:b})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("input",{className:"n-form-control",type:"text",placeholder:"enter text...",name:"text",disabled:!0})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("label",{className:"n-form-check"},l.a.createElement("input",{className:"n-form-control",type:"checkbox",name:"cb",value:"1",disabled:!0}),"checkbox")),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("label",{className:"n-form-check"},l.a.createElement("input",{className:"n-form-control",type:"radio",name:"r",value:"1",disabled:!0}),"radio")),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("input",{className:"n-form-control",type:"range",name:"range",disabled:!0})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("input",{className:"n-form-control",type:"color",name:"color",disabled:!0})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("textarea",{className:"n-form-control",name:"comment",placeholder:"enter comment...",disabled:!0})),l.a.createElement("div",{className:"n-form-field"},l.a.createElement("select",{className:"n-form-control",disabled:!0},l.a.createElement("option",{value:""},"choose wisely..."),l.a.createElement("option",{value:"1"},"option 1"),l.a.createElement("option",{value:"2"},"option 2"))))};a.d(n,"FormsSidePanel",(function(){return P}));var M=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(x,null),l.a.createElement(N,null),l.a.createElement(g,null),l.a.createElement(y,null),l.a.createElement(k,null),l.a.createElement(w,null),l.a.createElement(F,null),l.a.createElement(O,null),l.a.createElement(C,null),l.a.createElement(j,null),l.a.createElement(B,null))},P=function(){return l.a.createElement("ul",{className:"scroll-nav"},l.a.createElement("li",null,l.a.createElement("h6",{className:"px-3 py-2 mb-0"},"Forms Style")),l.a.createElement(r.a,{localkey:o.b.form,settingsAllowed:["distance","blur","intensity","radius","border"],allowEngraveWithConcave:!0}))};n.default=function(){var e="is used to create interactive controls for web-based forms in order to accept data from the user.";return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.e,null,l.a.createElement(c.e.Meta,{title:"".concat("Forms"," - Neumorphism Project | Mytabworks"),description:e,image:"/images/icons/icon-512x512.png"})),l.a.createElement(c.i,{title:"Forms",context:e,main:l.a.createElement(M,null),side:l.a.createElement(P,null),style:{backgroundColor:"transparent"}}))}},779:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),c=a(14),r=a(642),o='<div class="n-input-group">  \n    <input class="n-form-control" placeholder="enter username..." />\n    <div class="n-input-group-append">\n        <span class="n-input-group-text">@mytabworks.com</span>\n    </div>\n</div>\n\n<div class="n-input-group">  \n    <div class="n-input-group-prepend">\n        <span class="n-input-group-text">$</span>\n    </div>\n    <input class="n-form-control" /> \n</div>\n\n<div class="n-input-group">  \n    <div class="n-input-group-prepend">\n        <span class="n-input-group-text">$</span>\n    </div>\n    <input class="n-form-control" /> \n    <div class="n-input-group-append">\n        <span class="n-input-group-text">.00</span>\n    </div>\n</div>\n\n<div class="n-input-group">  \n    <div class="n-input-group-prepend">\n        <span class="n-input-group-text">textarea</span>\n    </div>\n    <textarea class="n-form-control" />\n</div>',s='<div class="n-input-group">  \n    <div class="n-input-group-prepend"> \n        <div class="n-input-group-text">\n            <input class="n-form-control" type="checkbox" />\n        </div> \n    </div>\n    <input class="n-form-control" /> \n</div>\n\n<div class="n-input-group">  \n    <div class="n-input-group-prepend"> \n        <div class="n-input-group-text">\n            <input class="n-form-control" type="radio" />\n        </div> \n    </div>\n    <input class="n-form-control" /> \n</div>',i='<div class="n-input-group">  \n    <input class="n-form-control" />\n    <div class="n-input-group-append">\n        <button class="n-btn">Button</button>\n    </div>\n</div>\n\n<div class="n-input-group">  \n    <div class="n-input-group-prepend">\n        <button class="n-btn">Button</button>\n    </div>\n    <input class="n-form-control" /> \n</div>\n\n<div class="n-input-group">  \n    <div class="n-input-group-prepend">\n        <button class="n-btn">Button</button>\n    </div>\n    <input class="n-form-control" /> \n    <div class="n-input-group-append">\n        <button class="n-btn">Button</button>\n    </div>\n</div>',m='<div class="n-input-group">\n    <div class="n-input-group-prepend">\n        <span class="n-input-group-text">$</span>\n    </div>  \n    <input class="n-form-control" />\n    <input class="n-form-control" placeholder="00" /> \n</div>\n\n<div class="n-input-group">  \n    <div class="n-input-group-prepend">\n        <span class="n-input-group-text">time</span>\n    </div>\n    <input class="n-form-control" />\n    <div class="n-input-group-prepend">\n        <span class="n-input-group-text">:</span>\n    </div>\n    <input class="n-form-control" /> \n    <div class="n-input-group-append">\n        <button class="n-btn">submit</button>\n    </div>\n</div>',p='<div class="n-input-group"> \n    <input class="n-form-control" /> \n    <div class="n-input-group-append">\n        <span class="n-input-group-text">@mytabworks.com</span>\n    </div>\n    <div class="n-input-group-append">\n        <button class="n-btn">submit</button>\n    </div>\n</div>',u=function(){return l.a.createElement(c.l,{title:"Examples",context:"here is a quick example of the input group style."},l.a.createElement(c.f,{code:o},l.a.createElement(c.c,{code:o})),l.a.createElement("div",{className:"n-input-group"},l.a.createElement("input",{className:"n-form-control",placeholder:"enter username..."}),l.a.createElement("div",{className:"n-input-group-append"},l.a.createElement("div",{className:"n-input-group-text"},"@mytabworks.com"))),l.a.createElement("br",null),l.a.createElement("div",{className:"n-input-group"},l.a.createElement("div",{className:"n-input-group-prepend"},l.a.createElement("div",{className:"n-input-group-text"},"$")),l.a.createElement("input",{className:"n-form-control"})),l.a.createElement("br",null),l.a.createElement("div",{className:"n-input-group"},l.a.createElement("div",{className:"n-input-group-prepend"},l.a.createElement("div",{className:"n-input-group-text"},"$")),l.a.createElement("input",{className:"n-form-control"}),l.a.createElement("div",{className:"n-input-group-append"},l.a.createElement("div",{className:"n-input-group-text"},".00"))),l.a.createElement("br",null),l.a.createElement("div",{className:"n-input-group"},l.a.createElement("div",{className:"n-input-group-prepend"},l.a.createElement("div",{className:"n-input-group-text"},"textarea")),l.a.createElement("textarea",{className:"n-form-control"})))},d=function(){return l.a.createElement(c.l,{title:"Checkbox and radio addons",context:"you can addon checkboxes and radios."},l.a.createElement(c.f,{code:s},l.a.createElement(c.c,{code:s})),l.a.createElement("div",{className:"n-input-group"},l.a.createElement("div",{className:"n-input-group-prepend"},l.a.createElement("div",{className:"n-input-group-text"},l.a.createElement("input",{className:"n-form-control",type:"checkbox"}))),l.a.createElement("input",{className:"n-form-control"})),l.a.createElement("br",null),l.a.createElement("div",{className:"n-input-group"},l.a.createElement("div",{className:"n-input-group-prepend"},l.a.createElement("div",{className:"n-input-group-text"},l.a.createElement("input",{className:"n-form-control",type:"radio"}))),l.a.createElement("input",{className:"n-form-control"})))},f=function(){return l.a.createElement(c.l,{title:"Button addons",context:"you can also addon buttons."},l.a.createElement(c.f,{code:i},l.a.createElement(c.c,{code:i})),l.a.createElement("div",{className:"n-input-group"},l.a.createElement("input",{className:"n-form-control"}),l.a.createElement("div",{className:"n-input-group-append"},l.a.createElement("button",{className:"n-btn"},"Button"))),l.a.createElement("br",null),l.a.createElement("div",{className:"n-input-group"},l.a.createElement("div",{className:"n-input-group-prepend"},l.a.createElement("button",{className:"n-btn"},"Button")),l.a.createElement("input",{className:"n-form-control"})),l.a.createElement("br",null),l.a.createElement("div",{className:"n-input-group"},l.a.createElement("div",{className:"n-input-group-prepend"},l.a.createElement("button",{className:"n-btn"},"Button")),l.a.createElement("input",{className:"n-form-control"}),l.a.createElement("div",{className:"n-input-group-append"},l.a.createElement("button",{className:"n-btn"},"Button"))))},E=function(){return l.a.createElement(c.l,{title:"Multiple inputs",context:"you can group multiple inputs."},l.a.createElement(c.f,{code:m},l.a.createElement(c.c,{code:m})),l.a.createElement("div",{className:"n-input-group"},l.a.createElement("div",{className:"n-input-group-prepend"},l.a.createElement("span",{className:"n-input-group-text"},"$")),l.a.createElement("input",{className:"n-form-control"}),l.a.createElement("input",{className:"n-form-control",placeholder:"00"})),l.a.createElement("br",null),l.a.createElement("div",{className:"n-input-group"},l.a.createElement("div",{className:"n-input-group-prepend"},l.a.createElement("span",{className:"n-input-group-text"},"time")),l.a.createElement("input",{className:"n-form-control"}),l.a.createElement("div",{className:"n-input-group-prepend"},l.a.createElement("span",{className:"n-input-group-text"},":")),l.a.createElement("input",{className:"n-form-control"}),l.a.createElement("div",{className:"n-input-group-append"},l.a.createElement("button",{className:"n-btn"},"submit"))))},v=function(){return l.a.createElement(c.l,{title:"Multiple addons",context:"you can add multiple addons."},l.a.createElement(c.f,{code:p},l.a.createElement(c.c,{code:p})),l.a.createElement("div",{className:"n-input-group"},l.a.createElement("input",{className:"n-form-control"}),l.a.createElement("div",{className:"n-input-group-append"},l.a.createElement("span",{className:"n-input-group-text"},"@mytabworks.com")),l.a.createElement("div",{className:"n-input-group-append"},l.a.createElement("button",{className:"n-btn"},"submit"))))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(f,null),l.a.createElement(d,null),l.a.createElement(E,null),l.a.createElement(v,null))};n.default=function(){var e=" is a wrapper to enhance an input by adding an icon, text, button or a additional input in front or behind the input field.";return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.e,null,l.a.createElement(c.e.Meta,{title:"".concat("Input Group"," - Neumorphism Project | Mytabworks"),description:e,image:"/images/icons/icon-512x512.png"})),l.a.createElement(c.i,{title:"Input Group",context:e,main:l.a.createElement(b,null),side:l.a.createElement(r.FormsSidePanel,null),style:{backgroundColor:"transparent"}}))}}}]);
//# sourceMappingURL=11.3942ccb9.chunk.js.map