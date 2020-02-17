(this["webpackJsonp03-experiemnt"]=this["webpackJsonp03-experiemnt"]||[]).push([[0],{114:function(t,e,a){t.exports=a(132)},119:function(t,e,a){},120:function(t,e,a){},132:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),l=a(28),i=a.n(l),c=(a(119),a(120),a(63)),s=a(18);var o=function(){return n.a.createElement("div",{className:"Home"},n.a.createElement("h1",null,"CS480x Project 3"),n.a.createElement("p",null,"We designed a simple experiment to determine if bar, pie, or stacked bar charts are better"),n.a.createElement("p",null,"This project served as an intro to react, and we were able to get a better understanding of how to use component based frameworks"),n.a.createElement("p",null,"If you'd like to learn more about our findings or view our source code, check out ",n.a.createElement("a",{href:"https://github.com/kjmj/03-Experiment",target:"_blank"},"our GitHub repo")),n.a.createElement("p",null,"Click on the experiment tab to start!"))},h=a(43),p=a.n(h),u=a(59),d=a(6),f=a(7),m=a(9),b=a(8),v=a(10),k=a(134),g=function(t){function e(){var t,a;Object(d.a)(this,e);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(m.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(n)))).saveAndContinue=function(t){t.preventDefault(),a.props.nextStep()},a}return Object(v.a)(e,t),Object(f.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"Description"},n.a.createElement("h2",null,"Welcome to our Experiment!"),n.a.createElement("h4",null,"You will see bar, pie, and stacked bar charts."),n.a.createElement("h4",null,"Please enter what percent the smaller marked bar/slice is of the bigger marked bar/slice into the text box as an integer."),n.a.createElement("h4",null,"Note it is possible that the bar/slices can be the same size. In this case, 100 is an appropriate answer."),n.a.createElement("h4",null,"Thank You!"),n.a.createElement(k.a,{onClick:this.saveAndContinue},"Start"))}}]),e}(n.a.Component),w=a(15),x=a(135),E=a(21),y=a(13),j=function(t){if(""!==t&&!isNaN(t)){var e=parseInt(t);return e>=0&&e<=100}return!1},A=function(){alert("Please enter a number between 1 and 100")},C=function(t){function e(t){var a;return Object(d.a)(this,e),(a=Object(m.a)(this,Object(b.a)(e).call(this,t))).graphType="Bar",a.truePercent=0,a.saveAndContinue=function(t){if(t.preventDefault(),j(a.textField.value)){var e={vizType:a.graphType,participantID:a.props.values.participantID,trialNumber:a.props.values.step,truePercent:a.truePercent,reportedPercent:parseInt(a.textField.value)};a.props.addData(e),a.props.nextStep()}else A()},a.divRef=n.a.createRef(),a}return Object(v.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){this.drawBarChart()}},{key:"drawBarChart",value:function(){var t=w.b(this.divRef.current).append("svg").attr("width",this.props.width).attr("height",this.props.height);function e(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}var a=e(50,100),r=e(50,100),n=e(50,100),l=e(50,100),i=e(50,100),c=e(50,100),s=e(50,100),o=e(50,100),h=e(50,100),p=e(50,100);function u(t){switch(t){case 0:return a;case 1:return r;case 2:return n;case 3:return l;case 4:return i;case 5:return c;case 6:return s;case 7:return o;case 8:return h;case 9:return p;default:return}}t.append("rect").attr("x",540).attr("y",375).attr("width",50).attr("height",a).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",590).attr("y",375).attr("width",50).attr("height",r).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",640).attr("y",375).attr("width",50).attr("height",n).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",690).attr("y",375).attr("width",50).attr("height",l).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",740).attr("y",375).attr("width",50).attr("height",i).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",790).attr("y",375).attr("width",50).attr("height",c).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",840).attr("y",375).attr("width",50).attr("height",s).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",890).attr("y",375).attr("width",50).attr("height",o).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",940).attr("y",375).attr("width",50).attr("height",h).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",990).attr("y",375).attr("width",50).attr("height",p).attr("fill","white").attr("stroke","black");var d=e(0,7);t.append("circle").attr("cx",540+50*d+25).attr("cy",400).attr("r",4).attr("fill","black").attr("stroke","black"),t.append("circle").attr("cx",540+50*(d+2)+25).attr("cy",400).attr("r",4).attr("fill","black").attr("stroke","black");var f=u(d),m=u(d+2);this.truePercent=f<m?Math.round(f/m*100):Math.round(m/f*100)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",null,n.a.createElement("div",{ref:this.divRef},n.a.createElement("p",null,"Bar Chart")),n.a.createElement(E.a,null,n.a.createElement(y.a,null,n.a.createElement(x.a.Control,{type:"text",placeholder:"What percent is the smaller marked bar of the bigger marked bar?",ref:function(e){return t.textField=e}})),n.a.createElement(y.a,null,n.a.createElement(k.a,{onClick:this.saveAndContinue},"Next"))))}}]),e}(n.a.Component),O=function(t){function e(t){var a;return Object(d.a)(this,e),(a=Object(m.a)(this,Object(b.a)(e).call(this,t))).graphType="Stacked Bar",a.truePercent=0,a.saveAndContinue=function(t){if(t.preventDefault(),j(a.textField.value)){var e={vizType:a.graphType,participantID:a.props.values.participantID,trialNumber:a.props.values.step,truePercent:a.truePercent,reportedPercent:parseInt(a.textField.value)};a.props.addData(e),a.props.nextStep()}else A()},a.divRef=n.a.createRef(),a}return Object(v.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){this.drawBarChart()}},{key:"drawBarChart",value:function(){var t=w.b(this.divRef.current).append("svg").attr("width",this.props.width).attr("height",this.props.height);function e(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}var a=e(30,50),r=e(30,50),n=e(30,50),l=e(30,50),i=e(30,50),c=e(30,50),s=e(30,50),o=e(30,50),h=e(30,50),p=e(30,50),u=a+r+n+l+i;function d(t){switch(t){case 0:return 0;case 1:return a;case 2:return a+r;case 3:return a+r+n;case 4:return a+r+n+l;case 5:return u;case 6:return u+c;case 7:return u+c+s;case 8:return u+c+s+o;case 9:return u+c+s+o+h;case 10:return u+c+s+o+h+p;default:return}}t.append("rect").attr("x",770).attr("y",200+d(0)).attr("width",50).attr("height",a).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",770).attr("y",200+d(1)).attr("width",50).attr("height",r).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",770).attr("y",200+d(2)).attr("width",50).attr("height",n).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",770).attr("y",200+d(3)).attr("width",50).attr("height",l).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",770).attr("y",200+d(4)).attr("width",50).attr("height",i).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",770).attr("y",200+d(5)).attr("width",50).attr("height",c).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",770).attr("y",200+d(6)).attr("width",50).attr("height",s).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",770).attr("y",200+d(7)).attr("width",50).attr("height",o).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",770).attr("y",200+d(8)).attr("width",50).attr("height",h).attr("fill","white").attr("stroke","black"),t.append("rect").attr("x",770).attr("y",200+d(9)).attr("width",50).attr("height",p).attr("fill","white").attr("stroke","black");var f=e(0,7);t.append("circle").attr("cx",795).attr("cy",215+d(f)).attr("r",4).attr("fill","black").attr("stroke","black"),t.append("circle").attr("cx",795).attr("cy",215+d(f+2)).attr("r",4).attr("fill","black").attr("stroke","black");var m=d(f+1)-d(f),b=d(f+3)-d(f+2);this.truePercent=m<b?Math.round(m/b*100):Math.round(b/m*100)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",null,n.a.createElement("div",{ref:this.divRef},n.a.createElement("p",null,"Stacked Bar Chart")),n.a.createElement(E.a,null,n.a.createElement(y.a,null,n.a.createElement(x.a.Control,{type:"text",placeholder:"What percent is the smaller marked bar of the bigger marked bar?",ref:function(e){return t.textField=e}})),n.a.createElement(y.a,null,n.a.createElement(k.a,{onClick:this.saveAndContinue},"Next"))))}}]),e}(n.a.Component),M=function(t){function e(t){var a;return Object(d.a)(this,e),(a=Object(m.a)(this,Object(b.a)(e).call(this,t))).graphType="Pie",a.truePercent=0,a.saveAndContinue=function(t){if(t.preventDefault(),j(a.textField.value)){var e={vizType:a.graphType,participantID:a.props.values.participantID,trialNumber:a.props.values.step,truePercent:a.truePercent,reportedPercent:parseInt(a.textField.value)};a.props.addData(e),a.props.nextStep()}else A()},a.divRef=n.a.createRef(),a}return Object(v.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){this.drawBarChart()}},{key:"drawBarChart",value:function(){function t(t,e){return parseFloat((Math.random()*(e-t)+t).toFixed(1))}var e,a,r=this.props.width/2,n=this.props.height/2,l=w.b(this.divRef.current).append("svg").attr("width",this.props.width).attr("height",this.props.height).append("g").attr("transform","translate("+r/2+","+n/2+")"),i=w.a().innerRadius(0).outerRadius(100),c=t(.2,.6),s=t(c+.2,c+1),o=t(s+.2,s+1),h=t(o+.2,o+1),p=t(h+.2,h+1),u=t(p+.2,p+1),d=t(u+.2,u+1),f=t(d+.2,d+1),m=t(f+.2,6),b=[{label:"1",startAngle:0,endAngle:c},{label:"2",startAngle:c,endAngle:s},{label:"3",startAngle:s,endAngle:o},{label:"4",startAngle:o,endAngle:h},{label:"5",startAngle:h,endAngle:p},{label:"6",startAngle:p,endAngle:u},{label:"7",startAngle:u,endAngle:d},{label:"8",startAngle:d,endAngle:f},{label:"9",startAngle:f,endAngle:m},{label:"10",startAngle:m,endAngle:2*Math.PI}],v=(e=1,a=8,e=Math.ceil(e),a=Math.floor(a),Math.floor(Math.random()*(a-e))+e),k=0,g=0,x=0;w.b("g").selectAll("path").data(b).enter().append("path").attr("d",i).attr("fill","white").attr("stroke","black"),w.b("g").selectAll("text").data(b).enter().append("text").each((function(t){var e=i.centroid(t);w.b(this).attr("x",e[0]).attr("y",e[1]).attr("dy","0.33em"),parseInt(t.label)!==v&&parseInt(t.label)!==v+2||(l.append("circle").attr("cx",e[0]).attr("cy",e[1]).attr("r",4).attr("fill","black").attr("stroke","black"),1===k?x=t.endAngle-t.startAngle:g=t.endAngle-t.startAngle,k++)})),this.truePercent=g<x?Math.round(g/x*100):Math.round(x/g*100)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",null,n.a.createElement("div",{ref:this.divRef},n.a.createElement("p",null,"Pie Chart")),n.a.createElement(E.a,null,n.a.createElement(y.a,null,n.a.createElement(x.a.Control,{type:"text",placeholder:"What percent is the smaller marked slice of the bigger marked slice?",ref:function(e){return t.textField=e}})),n.a.createElement(y.a,null,n.a.createElement(k.a,{onClick:this.saveAndContinue},"Next"))))}}]),e}(n.a.Component),D=function(t){function e(){return Object(d.a)(this,e),Object(m.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(f.a)(e,[{key:"render",value:function(){return n.a.createElement("div",null)}}]),e}(n.a.Component),P=a(62),I=function(t){function e(){return Object(d.a)(this,e),Object(m.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(f.a)(e,[{key:"render",value:function(){var t=this.props.values.data;return console.log(t),n.a.createElement("div",{className:"Completion"},n.a.createElement("p",null,"Thanks for completing our experiment!"),n.a.createElement(P.CSVLink,{data:t,filename:"experiment.csv"},"Download your data"))}}]),e}(n.a.Component),S=function(t){function e(){var t,a;Object(d.a)(this,e);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(m.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(n)))).state={step:0,participantID:"_"+Math.random().toString(36).substr(2,9),data:[],graphs:a.shuffle([C,C,O,O,M,M]),active:""},a.numGraphs=a.state.graphs.length,a.nextStep=Object(u.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.state.step,t.next=3,a.setState({active:D});case 3:a.setState({step:e+1,active:a.state.graphs.pop()});case 4:case"end":return t.stop()}}),t)}))),a.addData=function(t){a.setState({data:a.state.data.concat(t)})},a}return Object(v.a)(e,t),Object(f.a)(e,[{key:"shuffle",value:function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),r=[t[a],t[e]];t[e]=r[0],t[a]=r[1]}return t}},{key:"render",value:function(){var t,e=this.state,a=e.step,r={step:a,participantID:e.participantID,data:e.data},l=this.numGraphs;return t=0===a?n.a.createElement(g,{nextStep:this.nextStep}):l+1===a?n.a.createElement(I,{values:r}):n.a.createElement(this.state.active,{width:1280,height:720,nextStep:this.nextStep,addData:this.addData,values:r}),n.a.createElement("div",null,n.a.createElement("p",null,"Step ",a," / ",l+1),t)}}]),e}(n.a.Component),R=a(136),B=a(137);var N=function(){return n.a.createElement(c.a,{basename:"/"},n.a.createElement("div",null,n.a.createElement(R.a,{bg:"light",expand:"lg"},n.a.createElement(R.a.Brand,{href:"#"},"Home"),n.a.createElement(R.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(R.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(B.a,{className:"mr-auto"},n.a.createElement(B.a.Link,{href:"#experiment"},"Experiment")))),n.a.createElement("hr",null),n.a.createElement(s.a,{exact:!0,path:"/",component:o}),n.a.createElement(s.a,{path:"/experiment",component:S})))};var T=function(){return n.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(131);i.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[114,1,2]]]);
//# sourceMappingURL=main.f7278599.chunk.js.map