(this["webpackJsonpted-app"]=this["webpackJsonpted-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(5),l=a.n(r),i=(a(4),a(2)),c=a(0),o=function(e){var t=e.title,a=e.placeholder,n=e.type,s=e.value,r=e.min,l=e.max,i=e.step,o=e.setValue,u=function(e){o(e.target.value)};return Object(c.jsxs)("div",{className:"flex-auto p-6 border-2 border-gray-500 m-2",children:[Object(c.jsx)("p",{children:t}),Object(c.jsx)("input",{placeholder:a,className:"rounded border-2 border-gray-400 text-base text-green-500",type:n,value:s,onChange:u,min:r,max:l}),Object(c.jsx)("input",{className:"block mt-4 mb-0",type:"range",value:""===s?r:s,onChange:u,min:r,max:l,step:i})]})},u=function(e){return Object(c.jsxs)("div",{className:"flex-auto p-6 border-2 border-gray-500 m-2",children:[Object(c.jsx)("p",{children:e.title}),Object(c.jsx)("input",{placeholder:e.placeholder,className:"rounded border-2 border-gray-400 text-base text-green-500",type:"number",value:e.value,onChange:function(t){e.setValue(t.target.value)},min:0})]})},b=function(e){var t=e.paymentPrincipal,a=e.monthlyPayment,n=e.insurance,s=e.propertyTax,r=e.interest;return Object(c.jsxs)("div",{className:"pl-10 pt-6",children:[Object(c.jsxs)("div",{className:"principal bg-blue-400 mb-2 transition-all duration-500 ease-linear p-2 relative",style:{width:t/a*100+"%",height:25},children:[Object(c.jsx)("p",{className:"text-xs text-white pb-1",children:"Principal"}),Object(c.jsxs)("p",{className:"absolute right-0.5 bottom-0.5 text-xs text-white",children:["$",t.toFixed(0)]})]}),Object(c.jsxs)("div",{className:"tax bg-green-300 transition-all duration-500 ease-linear p-2 mb-2 relative",style:{width:r/a*100+"%",height:25},children:[Object(c.jsx)("p",{className:"text-xs text-white pb-1",children:"Interest"}),Object(c.jsxs)("p",{className:"absolute right-0.5 bottom-0.5 text-xs text-white",children:["$",r.toFixed(0)]})]}),Object(c.jsxs)("div",{className:"insurance bg-yellow-400 mb-2 p-2 relative transition-all duration-500 ease-linear",style:{width:n/a*100+"%",height:25},children:[Object(c.jsx)("p",{className:"text-xs text-white pb-1",children:"Homeowner's Insurance"}),Object(c.jsxs)("p",{className:"absolute right-0.5 bottom-0.5 text-xs text-white",children:["$",n]})]}),Object(c.jsxs)("div",{className:"tax bg-purple-700 transition-all duration-500 ease-linear p-2 relative",style:{width:s/a*100+"%",height:25},children:[Object(c.jsx)("p",{className:"text-xs text-white pb-1",children:"Property Tax"}),Object(c.jsxs)("p",{className:"absolute right-0.5 bottom-0.5 text-xs text-white",children:["$",s]})]})]})},x=function(e){var t=e.title,a=e.placeholder,n=e.type,s=e.value,r=e.min,l=e.max,i=e.price,o=e.step,u=e.downPayment,b=e.setValue,x=function(e){b(e.target.value)},p=u/100*i;return Object(c.jsxs)("div",{className:"flex-auto p-6 border-2 border-gray-500 m-2",children:[Object(c.jsx)("p",{children:t}),Object(c.jsx)("input",{placeholder:a,className:"rounded border-2 border-gray-400 text-base text-green-500",type:n,value:s,onChange:x,min:r,max:l}),Object(c.jsxs)("span",{className:"pl-2 text-green-500",children:["($",p.toFixed(0),")"]}),Object(c.jsx)("input",{className:"block mt-4 mb-0",type:"range",value:""===s?r:s,onChange:x,min:r,max:l,step:o})]})},p=function(e){var t=e.title,a=e.placeholder,n=e.type,s=e.value,r=e.min,l=e.max,i=e.step,o=e.setValue,u=e.setTaxValue,b=function(e){var t=.011*e.target.value/12;o(e.target.value),u(t.toFixed(0))};return Object(c.jsxs)("div",{className:"flex-auto p-6 border-2 border-gray-500 m-2",children:[Object(c.jsx)("p",{children:t}),Object(c.jsx)("input",{placeholder:a,className:"rounded border-2 border-gray-400 text-base text-green-500",type:n,value:s,onChange:b,min:r,max:l}),Object(c.jsx)("input",{className:"block mt-4 mb-0",type:"range",value:""===s?r:s,onChange:b,min:r,max:l,step:i})]})},d=function(e){return""===e?0:parseFloat(e)};var m=function(){var e=Object(n.useState)("10"),t=Object(i.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)("5"),l=Object(i.a)(r,2),m=l[0],j=l[1],h=Object(n.useState)("300000"),g=Object(i.a)(h,2),O=g[0],v=g[1],y=Object(n.useState)("1500"),N=Object(i.a)(y,2),f=N[0],w=N[1],P=Object(n.useState)("1000"),F=Object(i.a)(P,2),C=F[0],V=F[1],T=d(m)/100/12,I=d(O)*(1-d(a)/100),S=I*T,$=Math.pow(1+T,360),k=Math.pow(1+T,360)-1,L=I*T*($/k),D=L-S,E=L+d(f)+d(C);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{className:"pt-2 px-10",children:[" ","Your monthly payment is:\u2002",Number.isNaN(E)?"Please enter values":"$".concat(E.toFixed(0))]}),Object(c.jsxs)("p",{className:"ml-10",children:["Total Interest Paid: $",function(e){for(var t=e,a=0;t>0;)a+=t*T,t-=L-t*T;return a.toFixed(0)}(I)]}),Number.isNaN(E)?null:Object(c.jsx)(b,{monthlyPayment:E,propertyTax:f,loanPayment:L,insurance:C,interest:S,paymentPrincipal:D})]}),Object(c.jsxs)("div",{className:"flex p-6",children:[Object(c.jsx)(p,{title:"Listing Price",placeholder:"Enter Listing Price",min:5e4,max:5e6,setValue:v,value:O,step:1,setTaxValue:w}),Object(c.jsx)(x,{title:"Down Payment",type:"number",placeholder:"Down Payment Percent",min:0,max:40,value:a,setValue:s,step:1,downPayment:a,price:O}),Object(c.jsx)(o,{title:"Interest Rate",type:"number",placeholder:"Enter Interest Rate",min:1,max:10,value:m,setValue:j,step:.25}),Object(c.jsx)(u,{title:"Homeowner's Insurance",value:C,setValue:V}),Object(c.jsx)(u,{title:"Property Tax",value:f,setValue:w})]}),Object(c.jsx)("p",{className:"text-xs ml-10 mt-0",children:"For general informational purposes only. Actual rates available to you will depend on many factors including lender, income, credit, location, and property value. Contact a mortgage broker to find out what programs are available to you."})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),r(e),l(e)}))};l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),j()},4:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.b99b3d5f.chunk.js.map