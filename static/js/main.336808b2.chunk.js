(this["webpackJsonplibrary-management"]=this["webpackJsonplibrary-management"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),i=n.n(r),c=(n(13),n(1)),l=n(2),s=n(4),u=n(3),p=n(5),b=(n(14),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("header",{style:h},a.a.createElement("b",null,"Book Library"))}}]),t}(o.Component)),h={backgroundColor:"#29303b",color:"white",padding:"15px",fontSize:"20px"},m=b,d=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.book,t=e.title,n=(e.isbn,e.pageCount,e.publishedDate,e.thumbnailUrl);e.shortDescription,e.longDescription,e.status;return console.log(this.props.book),a.a.createElement("div",null,!this.props.book&&a.a.createElement("div",null,"Loading"),this.props.book&&a.a.createElement("div",{style:f},a.a.createElement("img",{alt:"book",src:n,width:"200px",height:"300px"}),a.a.createElement("p",null,a.a.createElement("b",null,t))))}}]),t}(o.Component),f={border:"2px #ccc solid",boxShadow:"10px 10px 18px grey",margin:"10px 10px 20px 0px",padding:"20px 20px 20px 20px",backgroundColor:"rgb(236, 232, 232)"},k=d,j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:y},this.props.books.map((function(e){return a.a.createElement(k,{key:e.isbn,book:e})})))}}]),t}(o.Component),y={display:"flex",justifyContent:"space-between",flexWrap:"wrap"},g=j,x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={books:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://localhost:44368/api/books").then((function(e){return e.json()})).then((function(t){return e.setState({books:t})}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(m,null),a.a.createElement(g,{books:this.state.books}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.336808b2.chunk.js.map