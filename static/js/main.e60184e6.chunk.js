(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{37:function(e,t,c){},40:function(e,t,c){},46:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(24),r=c.n(a),s=(c(35),c(36),c(37),c(6)),i=c(3),o=c(25),u=c(26),l=c(30),j=c(29),b=c(0),d=function(){return Object(b.jsx)("div",{className:"error",children:Object(b.jsx)("img",{src:"https://media.istockphoto.com/vectors/error-like-laptop-with-dead-emoji-cartoon-flat-minimal-trend-modern-vector-id1011988208?k=20&m=1011988208&s=612x612&w=0&h=XrR_WsVGUrB8b5px_kG0B_llfeHcRNlqEzgCWf75EfE=",alt:"errorMessage"})})},O=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(u.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(b.jsx)(d,{}):this.props.children}}]),c}(n.Component),p=O,h=c(2),f=c(8),m=c(4),v=c.n(m),g=c(11),x=function(){var e=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(h.a)(r,2),i=s[0],o=s[1],u=Object(n.useCallback)(function(){var e=Object(g.a)(v.a.mark((function e(t){var c,n,r,s,i,u=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.length>1&&void 0!==u[1]?u[1]:"GET",n=u.length>2&&void 0!==u[2]?u[2]:null,r=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:r});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return i=e.sent,a(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),o(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:c,request:u,error:i,clearError:Object(n.useCallback)((function(){return o(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,r=e.clearError,s="https://api.themoviedb.org/3/",i="api_key=e352cfad536dcafc2d9540798bc763ce",o=function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"configuration?").concat(i));case 2:return t=e.sent,e.abrupt("return",t.images);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"movie/top_rated?").concat(i,"&language=ru-RU&page=10"));case 2:return t=e.sent,e.abrupt("return",t.results.map(m));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,a,r=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n="".concat(s,"movie/popular?").concat(i,"&language=ru-RU&page=").concat(t),e.next=4,c(n);case 4:return a=e.sent,e.abrupt("return",a.results.map(m));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"genre/movie/list?").concat(i,"&language=ru-RU"));case 2:return t=e.sent,e.abrupt("return",t.genres);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,a,r,o=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,n=o.length>1?o[1]:void 0,a="".concat(s,"discover/movie?").concat(i,"&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false{true}&page=").concat(t,"&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=").concat(n),e.next=5,c(a);case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,a,r=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n=r.length>1?r[1]:void 0,e.next=4,c("".concat(s,"search/movie?").concat(i,"&language=ru-RU&page=").concat(t,"&query=").concat(n));case 4:return a=e.sent,e.abrupt("return",a.results.map(m));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"movie/").concat(t,"?").concat(i,"&language=ru-RU"),e.next=3,c(n);case 3:return a=e.sent,e.abrupt("return",x(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"movie/").concat(t,"/recommendations?").concat(i,"&language=ru-RU&page=1"),e.next=3,c(n);case 3:return a=e.sent,e.abrupt("return",a.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,title:e.title,overview:e.overview,poster_path:e.poster_path,release_date:e.release_date.slice(0,4)}},x=function(e){return{poster_path:e.poster_path,genres:Object(f.a)(e.genres.map((function(e){return e.name}))),overview:e.overview,popularity:e.popularity,production_companies:Object(f.a)(e.production_companies.map((function(e){return e.name}))),production_countries:Object(f.a)(e.production_countries.map((function(e){return e.name}))),release_date:e.release_date.slice(0,4),runtime:e.runtime+" \u043c\u0438\u043d",title:e.title,budget:e.budget+"$",original_title:e.original_title}};return{loading:t,error:a,clearError:r,getConfiguration:o,getTopRatedMovies:u,getPopularMovies:l,getGenres:j,getMoviesByGenre:b,getSearchResults:d,getDetails:O,getRecommendations:p}},_=(c(40),function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),i=Object(h.a)(r,2),o=i[0],u=i[1],l=Object(n.useState)(""),j=Object(h.a)(l,2),d=j[0],O=j[1];Object(n.useEffect)((function(){p().then((function(e){return a(e)}))}),[]);var p=x().getGenres,f=function(){u(!o)},m=c.length&&c.map((function(e){return Object(b.jsx)("li",{onClick:function(){f(),document.title=e.name[0].toUpperCase()+e.name.slice(1)},children:Object(b.jsx)(s.b,{to:"/genre/".concat(e.id),className:"dropdown-item",children:e.name})},e.id)}));return Object(b.jsx)("div",{className:"nav-wrapper",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(s.b,{to:"/",className:"btn btn-secondary mr-3",type:"button",onClick:function(){return document.title="Movies App"},children:"Home page"}),Object(b.jsxs)("div",{className:"dropdown",children:[Object(b.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:f,children:"\u0416\u0430\u043d\u0440\u044b"}),o&&Object(b.jsx)("ul",{className:"dropdown-menu",style:{display:"grid",gridTemplateRows:"1fr 1fr 1fr",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"2vw"},children:m})]}),Object(b.jsx)("div",{className:"search-container",children:Object(b.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(b.jsx)("input",{onChange:function(e){return O(e.target.value)},type:"text",placeholder:"Search..",name:"search",value:d}),Object(b.jsx)(s.b,{to:"/search/".concat(d),children:Object(b.jsx)("button",{onClick:function(){O("")},type:"submit",children:Object(b.jsx)("i",{className:"fa fa-search"})})})]})})]})})}),w=c(13),y=(c(46),function(){return Object(b.jsx)("div",{className:"loader"})}),N=c(15),S=c.n(N),R=(c(20),c(21),c(49),function(e){e.onMovieSelect;var t=Object(n.useState)([]),c=Object(h.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(!0),o=Object(h.a)(i,2),u=o[0],l=o[1],j=x(),d=j.getConfiguration,O=j.getTopRatedMovies;Object(n.useEffect)((function(){d().then((function(e){var t=e.base_url,c=e.poster_sizes;O().then((function(e){var n=e.map((function(e){return{url:t.slice(0,-1)+"/"+c[5]+e.poster_path,id:e.id}}));r(n)}))}))}),[]),Object(n.useEffect)((function(){l(!1)}),[a]);var p=u?Object(b.jsx)(y,{}):null,f=!u&&a.length&&function(e){return e.map((function(e,t){return Object(b.jsx)(s.b,{to:"/movie/".concat(e.id),children:Object(b.jsx)("div",{className:"item",children:Object(b.jsx)("img",{src:e.url,alt:"",height:300})})},t)}))}(a);return Object(b.jsx)("div",{className:"overfvow pt-2 bg-dark",children:Object(b.jsx)("div",{className:"container",children:a.length&&Object(b.jsxs)(S.a,Object(w.a)(Object(w.a)({className:"owl-theme"},{items:5,margin:20,lazyLoad:!0,loop:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0}),{},{children:[p,f]}))})})}),k=(c(50),function(e){var t=e.data,c=e.baseURL,n=e.onRequest,a=e.ended,r=e.newPageLoading,i=t.map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsxs)(s.b,{to:"/movie/".concat(e.id),className:"card",children:[Object(b.jsxs)("div",{className:"card-ref",children:[Object(b.jsx)("img",{src:e.poster_path?c+e.poster_path:"https://cdn.browshot.com/static/images/not-found.png",className:"card-img-top",alt:e.title,height:"300"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("p",{className:"card-title",children:e.title}),Object(b.jsx)("p",{className:"card-text",children:e.release_date})]})]}),Object(b.jsx)("div",{className:"item__name",children:e.title})]})},t)})),o=t.length&&t.length<5?"row row-cols-1 row-cols-md-".concat(t.length," g-4"):"row row-cols-1 row-cols-md-5 g-4";return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"bg-light pt-3 mb-3",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:o,children:[i,Object(b.jsx)("button",{className:"btn btn-secondary mx-auto mb-3",type:"button",onClick:n,style:{display:a?"none":"block"},disabled:r,children:"Load more"})]})})})})}),E=function(e){var t=e.baseURL,c=Object(n.useState)(!0),a=Object(h.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(!1),o=Object(h.a)(i,2),u=o[0],l=o[1],j=Object(n.useState)(!1),O=Object(h.a)(j,2),p=O[0],m=O[1],v=Object(n.useState)([]),g=Object(h.a)(v,2),_=g[0],w=g[1],N=Object(n.useState)(1),S=Object(h.a)(N,2),R=S[0],E=S[1],U=Object(n.useState)(!1),C=Object(h.a)(U,2),L=C[0],q=C[1];Object(n.useEffect)((function(){E(1),F()}),[]);var D=x().getPopularMovies,F=function(){l(!0),D(R).then(M).catch(z)},M=function(e){e.length<20?q(!0):q(!1),s(!0),w([].concat(Object(f.a)(_),Object(f.a)(e))),E(R+1),s(!1),l(!1)},z=function(){s(!1),m(!0)},G=r?Object(b.jsx)(y,{}):null,P=p?Object(b.jsx)(d,{}):null,T=r&&p?null:Object(b.jsx)(k,{onRequest:F,data:_,baseURL:t,ended:L,newPageLoading:u});return Object(b.jsxs)(b.Fragment,{children:[G,P,T]})},U=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],r=x().getConfiguration;return Object(n.useEffect)((function(){r().then((function(e){var t=e.base_url,c=e.poster_sizes;return a("".concat(t).concat(c[5]))}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{children:Object(b.jsx)(R,{})}),Object(b.jsx)(p,{children:Object(b.jsx)(E,{baseURL:c})})]})},C=function(e){var t=e.baseURL,c=Object(i.f)().query,a=Object(n.useState)(c),r=Object(h.a)(a,2),s=r[0],o=r[1],u=Object(n.useState)(!0),l=Object(h.a)(u,2),j=l[0],O=l[1],p=Object(n.useState)(!1),m=Object(h.a)(p,2),v=m[0],g=m[1],_=Object(n.useState)(!1),w=Object(h.a)(_,2),N=w[0],S=w[1],R=Object(n.useState)([]),E=Object(h.a)(R,2),U=E[0],C=E[1],L=Object(n.useState)(1),q=Object(h.a)(L,2),D=q[0],F=q[1],M=Object(n.useState)(!1),z=Object(h.a)(M,2),G=z[0],P=z[1];Object(n.useEffect)((function(){B()}),[]),Object(n.useEffect)((function(){F(1),C([]),o(c),document.title=c[0].toUpperCase()+c.slice(1).toLowerCase()}),[c]),Object(n.useEffect)((function(){B()}),[s]);var T=x().getSearchResults,B=function(){g(!0),T(D,c).then(I).catch(H)},I=function(e){e.length<20?P(!0):P(!1),O(!0),C([].concat(Object(f.a)(U),Object(f.a)(e))),F(D+1),O(!1),g(!1)},H=function(){O(!1),S(!0)},A=j?Object(b.jsx)(y,{}):null,J=N?Object(b.jsx)(d,{}):null,W=j&&N?null:Object(b.jsx)(k,{onRequest:B,data:U,baseURL:t,ended:G,newPageLoading:v});return Object(b.jsxs)(b.Fragment,{children:[A,J,W]})},L=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],r=x().getConfiguration;return Object(n.useEffect)((function(){r().then((function(e){var t=e.base_url,c=e.poster_sizes;return a("".concat(t).concat(c[5]))}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{children:Object(b.jsx)(C,{baseURL:c})}),";"]})},q=function(e){var t=e.baseURL,c=Object(i.f)().genreID,a=Object(n.useState)(c),r=Object(h.a)(a,2),s=r[0],o=r[1],u=Object(n.useState)(!0),l=Object(h.a)(u,2),j=l[0],O=l[1],p=Object(n.useState)(!1),m=Object(h.a)(p,2),v=m[0],g=m[1],_=Object(n.useState)(!1),w=Object(h.a)(_,2),N=w[0],S=w[1],R=Object(n.useState)([]),E=Object(h.a)(R,2),U=E[0],C=E[1],L=Object(n.useState)(1),q=Object(h.a)(L,2),D=q[0],F=q[1],M=Object(n.useState)(!1),z=Object(h.a)(M,2),G=z[0],P=z[1];Object(n.useEffect)((function(){B()}),[]),Object(n.useEffect)((function(){C([]),F(1),o(c)}),[c]),Object(n.useEffect)((function(){B()}),[s]);var T=x().getMoviesByGenre,B=function(){g(!0),c&&T(D,c).then(I).catch(H)},I=function(e){e.length<20?P(!0):P(!1),O(!0),C([].concat(Object(f.a)(U),Object(f.a)(e))),F(D+1),O(!1),g(!1)},H=function(){O(!1),S(!0)},A=j?Object(b.jsx)(y,{}):null,J=N?Object(b.jsx)(d,{}):null,W=j&&N?null:Object(b.jsx)(k,{onRequest:B,data:U,baseURL:t,ended:G,newPageLoading:v});return Object(b.jsxs)(b.Fragment,{children:[A,J,W]})},D=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],r=x().getConfiguration;return Object(n.useEffect)((function(){r().then((function(e){var t=e.base_url,c=e.poster_sizes;return a("".concat(t).concat(c[5]))}))}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(p,{children:Object(b.jsx)(q,{baseURL:c})})})},F=function(e){var t=e.data,c=e.baseURL,n=t.map((function(e,t){return Object(b.jsx)(s.b,{to:"/movie/".concat(e.id),children:Object(b.jsx)("div",{className:"item",children:Object(b.jsx)("img",{src:e.poster_path?c+e.poster_path:"https://cdn.browshot.com/static/images/not-found.png",alt:"",height:300})})},t)}));return Object(b.jsx)("div",{className:"overfvow pt-2 bg-dark",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(S.a,Object(w.a)(Object(w.a)({className:"owl-theme"},{items:5,margin:20,lazyLoad:!0,loop:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0}),{},{children:n}))})})},M=(c(51),function(e){var t=e.data,c=e.baseURL,n=e.reccomendationsData;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("div",{className:"title",children:Object(b.jsxs)("div",{className:"title_wrapper title-grid",children:[Object(b.jsx)("h3",{children:t.title}),Object(b.jsx)("span",{children:t.original_title})]})}),Object(b.jsx)("div",{className:"poster",children:Object(b.jsx)("img",{src:t.poster_path?c+t.poster_path:"https://cdn.browshot.com/static/images/not-found.png",alt:t.title})}),Object(b.jsx)("div",{className:"player",children:"\u0422\u0443\u0442 \u043c\u043e\u0433 \u0431\u044b \u0431\u044b\u0442\u044c \u043f\u043b\u0435\u0435\u0440"}),Object(b.jsx)("div",{className:"details",children:Object(b.jsx)("div",{className:"details-inner",children:t.overview?t.overview:"\u041d\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0444\u0438\u043b\u044c\u043c\u0430"})}),Object(b.jsxs)("div",{className:"description",children:[Object(b.jsxs)("div",{className:"rate",children:["\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c \u0444\u0438\u043b\u044c\u043c\u0430: ",t.popularity]}),Object(b.jsxs)("div",{className:"sub_grid",children:[Object(b.jsx)("div",{className:"sub_title",children:"\u0413\u043e\u0434"}),Object(b.jsx)("div",{className:"sub_descr",children:t.release_date}),Object(b.jsx)("div",{className:"sub_title",children:"\u0421\u0442\u0440\u0430\u043d\u0430"}),Object(b.jsx)("div",{className:"sub_descr",children:t.production_countries&&t.production_countries.map((function(e,c){return c+1===t.production_countries.length?e+".":e+", "}))}),Object(b.jsx)("div",{className:"sub_title",children:"\u0416\u0430\u043d\u0440"}),Object(b.jsx)("div",{className:"sub_descr",children:t.genres&&t.genres.map((function(e,c){return c+1===t.genres.length?e+".":e+", "}))}),Object(b.jsx)("div",{className:"sub_title",children:"\u0412\u0440\u0435\u043c\u044f"}),Object(b.jsx)("div",{className:"sub_descr",children:t.runtime})]})]}),Object(b.jsxs)("div",{className:"carousel_rec",children:[Object(b.jsx)("p",{children:"\u0420\u0435\u043a\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"}),Object(b.jsx)(F,{data:n,baseURL:c})]})]})})}),z=function(){var e=Object(i.f)().movieID,t=Object(n.useState)(null),c=Object(h.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),o=Object(h.a)(s,2),u=o[0],l=o[1],j=Object(n.useState)(null),O=Object(h.a)(j,2),f=O[0],m=O[1],v=x(),g=v.loading,_=v.error,w=v.getDetails,N=v.clearError,S=v.getConfiguration,R=v.getRecommendations;Object(n.useEffect)((function(){S().then((function(e){var t=e.base_url,c=e.poster_sizes;return l("".concat(t).concat(c[5]))}))}),[]),Object(n.useEffect)((function(){k(),R(e).then(U)}),[e]);var k=function(){N(),w(e).then(E)},E=function(e){r(e),document.title=e.title},U=function(e){m(e)},C=_?Object(b.jsx)(d,{}):null,L=g?Object(b.jsx)(y,{}):null,q=!g&&!_&&a&&f?Object(b.jsx)(p,{children:Object(b.jsx)(M,{data:a,baseURL:u,reccomendationsData:f})}):null;return Object(b.jsxs)(b.Fragment,{children:[C,L,q]})},G=(c(52),function(){return Object(b.jsx)(s.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{children:Object(b.jsx)(_,{})}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/",children:Object(b.jsx)(U,{})}),Object(b.jsx)(i.a,{exact:!0,path:"/search/:query",children:Object(b.jsx)(L,{})}),Object(b.jsx)(i.a,{exact:!0,path:"/genre/:genreID",children:Object(b.jsx)(D,{})}),Object(b.jsx)(i.a,{exact:!0,path:"/movie/:movieID",children:Object(b.jsx)(z,{})})]})]})})});r.a.render(Object(b.jsx)(G,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.e60184e6.chunk.js.map