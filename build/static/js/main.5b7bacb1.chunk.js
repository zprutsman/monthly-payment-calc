(this["webpackJsonpted-app"]=this["webpackJsonpted-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(5),l=a.n(s),i=(a(4),a(2)),c=a(0),o=function(e){var t=e.title,a=e.placeholder,n=e.type,r=e.value,s=e.min,l=e.max,i=e.step,o=e.setValue,u=function(e){o(e.target.value)};return Object(c.jsxs)("div",{className:"flex-auto p-6 border-2 border-gray-500 m-2",children:[Object(c.jsx)("p",{children:t}),Object(c.jsx)("input",{placeholder:a,className:"rounded border-2 border-gray-400 text-base text-green-500",type:n,value:r,onChange:u,min:s,max:l}),Object(c.jsx)("input",{className:"block mt-4 mb-0",type:"range",value:""===r?s:r,onChange:u,min:s,max:l,step:i})]})},u=function(e){return Object(c.jsxs)("div",{className:"flex-auto p-6 border-2 border-gray-500 m-2",children:[Object(c.jsx)("p",{children:e.title}),Object(c.jsx)("input",{placeholder:e.placeholder,className:"rounded border-2 border-gray-400 text-base text-green-500",type:"number",value:e.value,onChange:function(t){var a=t.target.value;e.setValue(Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumSignificantDigits:4}).format(a))},min:0})]})},m=function(e){var t=e.paymentPrincipal,a=e.monthlyPayment,n=e.insurance,r=e.propertyTax,s=e.interest;return Object(c.jsxs)("div",{className:"pl-10 pt-6",children:[Object(c.jsxs)("div",{className:"principal bg-blue-400 mb-2 transition-all duration-500 ease-linear p-2 relative",style:{width:t/a*100+"%",height:25},children:[Object(c.jsx)("p",{className:"text-xs text-white pb-1",children:"Principal"}),Object(c.jsx)("p",{className:"absolute right-0.5 bottom-0.5 text-xs text-white",children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumSignificantDigits:4}).format(t)})]}),Object(c.jsxs)("div",{className:"tax bg-green-300 transition-all duration-500 ease-linear p-2 mb-2 relative",style:{width:s/a*100+"%",height:25},children:[Object(c.jsx)("p",{className:"text-xs text-white pb-1",children:"Interest"}),Object(c.jsxs)("p",{className:"absolute right-0.5 bottom-0.5 text-xs text-white",children:["$",s.toFixed(0)]})]}),Object(c.jsxs)("div",{className:"insurance bg-yellow-400 mb-2 p-2 relative transition-all duration-500 ease-linear",style:{width:n/a*100+"%",height:25},children:[Object(c.jsx)("p",{className:"text-xs text-white pb-1",children:"Homeowner's Insurance"}),Object(c.jsxs)("p",{className:"absolute right-0.5 bottom-0.5 text-xs text-white",children:["$",n]})]}),Object(c.jsxs)("div",{className:"tax bg-purple-700 transition-all duration-500 ease-linear p-2 relative",style:{width:r/a*100+"%",height:25},children:[Object(c.jsx)("p",{className:"text-xs text-white pb-1",children:"Property Tax"}),Object(c.jsxs)("p",{className:"absolute right-0.5 bottom-0.5 text-xs text-white",children:["$",r]})]})]})},b=function(e){var t=e.title,a=e.placeholder,n=e.type,r=e.value,s=e.min,l=e.max,i=e.price,o=e.step,u=e.downPayment,m=e.setValue,b=function(e){m(e.target.value)},x=u/100*i;return Object(c.jsxs)("div",{className:"flex-auto p-6 border-2 border-gray-500 m-2",children:[Object(c.jsx)("p",{children:t}),Object(c.jsx)("input",{placeholder:a,className:"rounded border-2 border-gray-400 text-base text-green-500",type:n,value:r,onChange:b,min:s,max:l}),Object(c.jsxs)("span",{className:"pl-2 text-green-500",children:["($",x.toFixed(0),")"]}),Object(c.jsx)("input",{className:"block mt-4 mb-0",type:"range",value:""===r?s:r,onChange:b,min:s,max:l,step:o})]})},x=function(e){var t=e.title,a=e.placeholder,n=e.type,r=e.value,s=e.min,l=e.max,i=e.step,o=e.setValue,u=e.setTaxValue,m=function(e){var t=.011*e.target.value/12;o(e.target.value),u(t.toFixed(0))};return Object(c.jsxs)("div",{className:"flex-auto p-6 border-2 border-gray-500 m-2",children:[Object(c.jsx)("p",{children:t}),Object(c.jsx)("input",{placeholder:a,className:"rounded border-2 border-gray-400 text-base text-green-500",type:n,value:r,onChange:m,min:s,max:l}),Object(c.jsx)("input",{className:"block mt-4 mb-0",type:"range",value:""===r?s:r,onChange:m,min:s,max:l,step:i})]})},p=function(e){return""===e?0:parseFloat(e)};var d=function(){var e=Object(n.useState)("10"),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)("5"),l=Object(i.a)(s,2),d=l[0],j=l[1],h=Object(n.useState)("300000"),g=Object(i.a)(h,2),y=g[0],O=g[1],v=Object(n.useState)("1500"),N=Object(i.a)(v,2),f=N[0],w=N[1],P=Object(n.useState)("1000"),F=Object(i.a)(P,2),S=F[0],C=F[1],V=p(d)/100/12,I=p(y)*(1-p(a)/100),T=I*V,D=Math.pow(1+V,360),k=Math.pow(1+V,360)-1,$=I*V*(D/k),L=$-T,U=$+p(f)+p(S);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{className:"pt-2 px-10",children:[" ","Your monthly payment is:\u2002",Number.isNaN(U)?"Please enter values":"$".concat(U.toFixed(0))]}),Object(c.jsxs)("p",{className:"ml-10",children:["Total Interest Paid: $",function(e){for(var t=e,a=0;t>0;)a+=t*V,t-=$-t*V;return a.toFixed(0)}(I)]}),Number.isNaN(U)?null:Object(c.jsx)(m,{monthlyPayment:U,propertyTax:f,loanPayment:$,insurance:S,interest:T,paymentPrincipal:L})]}),Object(c.jsxs)("div",{className:"flex p-6",children:[Object(c.jsx)(x,{title:"Listing Price",placeholder:"Enter Listing Price",min:5e4,max:5e6,setValue:O,value:y,step:1,setTaxValue:w}),Object(c.jsx)(b,{title:"Down Payment",type:"number",placeholder:"Down Payment Percent",min:0,max:40,value:a,setValue:r,step:1,downPayment:a,price:y}),Object(c.jsx)(o,{title:"Interest Rate",type:"number",placeholder:"Enter Interest Rate",min:1,max:10,value:d,setValue:j,step:.25}),Object(c.jsx)(u,{title:"Homeowner's Insurance",value:S,setValue:C}),Object(c.jsx)(u,{title:"Property Tax (Annual)",value:f,setValue:w})]}),Object(c.jsx)("p",{className:"text-xs ml-10 mt-0",children:"For general informational purposes only. Actual rates available to you will depend on many factors including lender, income, credit, location, and property value. Contact a mortgage broker to find out what programs are available to you."})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),s(e),l(e)}))};l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),j()},4:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.5b7bacb1.chunk.js.map