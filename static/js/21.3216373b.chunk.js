(this["webpackJsonpbitter-code"]=this["webpackJsonpbitter-code"]||[]).push([[21],{565:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var l=a(7),n=a(2),r=a(0),c=a.n(r),d=a(25),m=a(19),u=function(e){var t=e.settingsAllowed,a=e.localkey,r=e.allowConvex,u=e.allowEngrave,E=e.allowEngraveWithConcave,o=e.allowFloat,i=e.max,s=e.min,h=Object(d.b)(a),b=h.getLocal,f=h.setLocal,g=b();return i=Object(n.a)({distance:10,blur:20,intensity:100,radius:50,border:10},i),s=Object(n.a)({distance:1,blur:2,intensity:10,radius:0,border:1},s),c.a.createElement(c.a.Fragment,null,r&&c.a.createElement("li",null,c.a.createElement("div",{className:"px-3 py-2"},c.a.createElement("div",{className:"n-switch"},c.a.createElement("input",{id:"switch-convex",type:"checkbox",checked:g.convex,onChange:function(e){f((function(e){return Object(n.a)({},e,{convex:!e.convex,distance:2,blur:4})}))}}),c.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-convex"},"convex")))),u&&c.a.createElement("li",null,c.a.createElement("div",{className:"px-3 py-2"},c.a.createElement("div",{className:"n-switch"},c.a.createElement("input",{id:"switch-engrave",type:"checkbox",checked:g.engrave,onChange:function(e){f((function(e){return Object(n.a)({},e,{engrave:!e.engrave})}))}}),c.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-engrave"},"engrave")))),E&&c.a.createElement("li",null,c.a.createElement("div",{className:"px-3 py-2"},c.a.createElement("div",{className:"n-switch"},c.a.createElement("input",{id:"switch-engrave",type:"checkbox",checked:g.engrave,onChange:function(e){f((function(e){return Object(n.a)({},e,{concave:e.engrave,engrave:!e.engrave,border:2})}))}}),c.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-engrave"},"engrave")))),o&&c.a.createElement("li",null,c.a.createElement("div",{className:"px-3 py-2"},c.a.createElement("div",{className:"n-switch"},c.a.createElement("input",{id:"switch-float",type:"checkbox",checked:g.float,onChange:function(e){f((function(e){return Object(n.a)({},e,{float:!e.float})}))}}),c.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-float"},"float")))),t.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("div",{className:"px-3 py-2"},c.a.createElement("label",null,e),c.a.createElement(m.a,{variant:"dark",message:"".concat(g[e]),placement:"left"},c.a.createElement("input",{type:"range",value:g[e],min:s[e],max:i[e],className:"n-form-control",onChange:function(t){var a=parseInt(t.target.value);f((function(t){return"distance"===e?Object(n.a)({},t,{distance:a,blur:2*a}):Object(n.a)({},t,Object(l.a)({},e,a))}))}}))))})))}},782:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(14),c=a(565),d=a(10),m='<table class="n-table">\n    <thead>\n        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>\n    </thead>\n    <tbody>\n        <tr><td>Eugine</td><td>20</td><td>male</td></tr>\n        <tr><td>Choi</td><td>30</td><td>male</td></tr>\n        <tr><td>Man Choi</td><td>10</td><td>female</td></tr>\n        <tr><td>Boyna</td><td>10</td><td>male</td></tr>\n    </tbody>\n</table>',u='<table class="n-table n-table-flated">\n    <thead>\n        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>\n    </thead>\n    <tbody>\n        <tr><td>Eugine</td><td>20</td><td>male</td></tr>\n        <tr><td>Choi</td><td>30</td><td>male</td></tr>\n        <tr><td>Man Choi</td><td>10</td><td>female</td></tr>\n        <tr><td>Boyna</td><td>10</td><td>male</td></tr>\n    </tbody>\n</table>',E='<table class="n-table n-table-bordered">\n    <thead>\n        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>\n    </thead>\n    <tbody>\n        <tr><td>Eugine</td><td>20</td><td>male</td></tr>\n        <tr><td>Choi</td><td>30</td><td>male</td></tr>\n        <tr><td>Man Choi</td><td>10</td><td>female</td></tr>\n        <tr><td>Boyna</td><td>10</td><td>male</td></tr>\n    </tbody>\n</table>',o='<table class="n-table n-table-bordered n-table-hover">\n    <thead>\n        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>\n    </thead>\n    <tbody>\n        <tr><td>Eugine</td><td>20</td><td>male</td></tr>\n        <tr><td>Choi</td><td>30</td><td>male</td></tr>\n        <tr><td>Man Choi</td><td>10</td><td>female</td></tr>\n        <tr><td>Boyna</td><td>10</td><td>male</td></tr>\n    </tbody>\n</table>',i=function(){return n.a.createElement(r.l,{title:"Example",context:".n-table class will do the style."},n.a.createElement(r.f,{code:m},n.a.createElement(r.c,{code:m})),n.a.createElement("table",{className:"n-table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Age"),n.a.createElement("th",null,"Gender"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Eugene"),n.a.createElement("td",null,"20"),n.a.createElement("td",null,"male")),n.a.createElement("tr",null,n.a.createElement("td",null,"Choi"),n.a.createElement("td",null,"30"),n.a.createElement("td",null,"male")),n.a.createElement("tr",null,n.a.createElement("td",null,"Man"),n.a.createElement("td",null,"10"),n.a.createElement("td",null,"female")),n.a.createElement("tr",null,n.a.createElement("td",null,"Boyna"),n.a.createElement("td",null,"10"),n.a.createElement("td",null,"male")))))},s=function(){return n.a.createElement(r.l,{title:"Flated top table",context:"add .n-table-flated for borders of the cells."},n.a.createElement(r.f,{code:u},n.a.createElement(r.c,{code:u})),n.a.createElement("table",{className:"n-table n-table-flated"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Age"),n.a.createElement("th",null,"Gender"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Eugene"),n.a.createElement("td",null,"20"),n.a.createElement("td",null,"male")),n.a.createElement("tr",null,n.a.createElement("td",null,"Choi"),n.a.createElement("td",null,"30"),n.a.createElement("td",null,"male")),n.a.createElement("tr",null,n.a.createElement("td",null,"Man"),n.a.createElement("td",null,"10"),n.a.createElement("td",null,"female")),n.a.createElement("tr",null,n.a.createElement("td",null,"Boyna"),n.a.createElement("td",null,"10"),n.a.createElement("td",null,"male")))))},h=function(){return n.a.createElement(r.l,{title:"Bordered table",context:"add .n-table-bordered for borders of the cells."},n.a.createElement(r.f,{code:E},n.a.createElement(r.c,{code:E})),n.a.createElement("table",{className:"n-table n-table-bordered"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Age"),n.a.createElement("th",null,"Gender"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Eugene"),n.a.createElement("td",null,"20"),n.a.createElement("td",null,"male")),n.a.createElement("tr",null,n.a.createElement("td",null,"Choi"),n.a.createElement("td",null,"30"),n.a.createElement("td",null,"male")),n.a.createElement("tr",null,n.a.createElement("td",null,"Man"),n.a.createElement("td",null,"10"),n.a.createElement("td",null,"female")),n.a.createElement("tr",null,n.a.createElement("td",null,"Boyna"),n.a.createElement("td",null,"10"),n.a.createElement("td",null,"male")))))},b=function(){return n.a.createElement(r.l,{title:"Hover table",context:"add .n-table-hover to enable hover effect on table rows."},n.a.createElement(r.f,{code:o},n.a.createElement(r.c,{code:o})),n.a.createElement("table",{className:"n-table n-table-bordered n-table-hover"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Age"),n.a.createElement("th",null,"Gender"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Eugene"),n.a.createElement("td",null,"20"),n.a.createElement("td",null,"male")),n.a.createElement("tr",null,n.a.createElement("td",null,"Choi"),n.a.createElement("td",null,"30"),n.a.createElement("td",null,"male")),n.a.createElement("tr",null,n.a.createElement("td",null,"Man"),n.a.createElement("td",null,"10"),n.a.createElement("td",null,"female")),n.a.createElement("tr",null,n.a.createElement("td",null,"Boyna"),n.a.createElement("td",null,"10"),n.a.createElement("td",null,"male")))))},f=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),n.a.createElement(s,null),n.a.createElement(h,null),n.a.createElement(b,null))},g=function(){return n.a.createElement("ul",{className:"scroll-nav"},n.a.createElement("li",null,n.a.createElement("h6",{className:"px-3 py-2 mb-0"},"Table Style")),n.a.createElement(c.a,{localkey:d.b.table,settingsAllowed:["distance","blur","intensity","border"]}))};t.default=function(){var e="it is use to arrange data.";return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.e,null,n.a.createElement(r.e.Meta,{title:"".concat("Table"," - Neumorphism Project | Mytabworks"),description:e,image:"/images/icons/icon-512x512.png"})),n.a.createElement(r.i,{title:"Table",context:e,main:n.a.createElement(f,null),side:n.a.createElement(g,null),style:{backgroundColor:"transparent"}}))}}}]);
//# sourceMappingURL=21.3216373b.chunk.js.map