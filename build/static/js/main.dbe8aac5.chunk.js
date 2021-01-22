(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,a){},47:function(e,t,a){e.exports=a(92)},68:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(21),c=a.n(s),r=a(4),i=a(2),o=a(3),u=a(6),m=a(5),h=a(23),p=a.n(h),d=p.a.create({baseURL:"https://fffinder.herokuapp.com",withCredentials:!0});function f(e){if(e.response)throw console.log(e.response),e;throw e}var g=function(e){return d.post("/api/auth/signup",e).then((function(e){return e.data})).catch(f)},E=function(e){return d.post("/api/auth/signin",e).then((function(e){return e.data})).catch(f)},v=function(){return d.get("/api/auth/isLoggedIn").then((function(e){return e.data})).catch(f)},b=function(){return d.get("/api/auth/logout").then((function(e){return e.data})).catch(f)},y=function(){return d.get("/api/announce").then((function(e){return e.data})).catch(f)},N=function(e){return d.get("/api/announce/".concat(e)).then((function(e){return e.data})).catch(f)},C=function(e){return d.post("/api/announce",e).then((function(e){return e.data})).catch(f)},S=function(e,t){return d.patch("/api/announce/".concat(e),t).then((function(e){return e.data})).catch(f)},j=function(e){return d.patch("/api/users/me",e).then((function(e){return e.data})).catch(f)},O=function(){return d.get("/api/users/me/announce").then((function(e){return e.data})).catch(f)},w=function(e){return d.delete("/api/announce/".concat(e)).then((function(e){return e.data})).catch(f)},k=function(){return d.get("/api/users/me").then((function(e){return e.data})).catch(f)},A=l.a.createContext(),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return l.a.createElement(A.Provider,{value:e},this.props.children)}}]),a}(n.Component),_=a(8),F=function(e){return function(t){return l.a.createElement(A.Consumer,null,(function(a){return l.a.createElement(e,Object.assign({},t,{context:a}))}))}},I=(a(68),F((function(e){var t=e.context;return l.a.createElement("nav",{className:"NavMain"},l.a.createElement(r.c,{exact:!0,to:"/"},l.a.createElement("h3",{className:"logo"},"Furry Friend Finder ",l.a.createElement("span",null,"\ud83d\udc3e")," ")),l.a.createElement("ul",{className:"nav-list"},t.isLoggedIn&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(r.c,{to:"/profile"},t.user&&t.user.username)),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-sign-out-alt",onClick:function(){b().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))}}))),!t.isLoggedIn&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(r.c,{to:"/signin"},"Log in")),l.a.createElement("li",null,l.a.createElement(r.c,{to:"/signup"},"Sign Up")))))}))),R=a(17),L=(a(44),a(7));a.n(L).a.workerClass=a(76).default;var M=Object(R.c)({accessToken:"pk.eyJ1IjoiaW50YW5wIiwiYSI6ImNranNvaXJmcTgxaTUyeWxnaGVpMHM1NHAifQ.oRrO6PATUG1aGeHmE8_n7Q"}),P=new Image(20,30);P.src="/media/paw-print.png";var T=new Image(20,30);T.src="/media/wanted.png";var D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={lng:2.349014,lat:48.864716,zoom:12},e.handleClick=function(t){e.props.handleSelectAnnounce(t)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var a=t.coords.latitude,n=t.coords.longitude;e.setState({lat:a,lng:n})}),(function(){console.log("An error occured geolocating user")})):console.log("Geolocation not supported")}},{key:"render",value:function(){var e=this,t=this.props.announces.filter((function(e){return"Missing"===e.status[0]})),a=this.props.announces.filter((function(e){return"Found"===e.status[0]})),n=l.a.createElement(R.b,{type:"symbol",id:"missing",images:["missing-icon",P],layout:{"icon-image":"missing-icon"}},t.map((function(t,a){return l.a.createElement(R.a,{key:a,onClick:function(a){return e.handleClick(t)},coordinates:t.location.coordinates})}))),s=l.a.createElement(R.b,{type:"symbol",id:"found",images:["found-icon",T],layout:{"icon-image":"found-icon"}},a.map((function(t,a){return l.a.createElement(R.a,{key:a,onClick:function(a){return e.handleClick(t)},coordinates:t.location.coordinates})})));return l.a.createElement(M,{style:"mapbox://styles/mapbox/light-v10",zoom:[12],containerStyle:{top:0,left:0,bottom:0,right:0,position:"absolute"},center:[this.state.lng,this.state.lat]},n,s)}}]),a}(l.a.PureComponent),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={selectedItem:null,announces:[]},e.onSelectAnnounce=function(t){e.setState({selectedAnnounce:t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){e.setState({announces:t})}))}},{key:"render",value:function(){this.context.user;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D,{announces:this.state.announces,handleSelectAnnounce:this.onSelectAnnounce}),l.a.createElement("button",null,l.a.createElement(r.c,{to:"/profile"},"Missing")))}}]),a}(l.a.Component);U.contextType=A;var G=U,H=a(10),V=(a(77),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(H.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),E(e.state).then((function(t){e.context.setUser(t),e.props.history.push("/profile")})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return this.context.user?l.a.createElement(_.a,{to:"/"}):l.a.createElement("div",{className:"all"},l.a.createElement("div",{className:"main"},l.a.createElement("p",{className:"sign",align:"center"},"Sign in"),l.a.createElement("form",{className:"form1",onChange:this.handleChange,onSubmit:this.handleSubmit},l.a.createElement("input",{className:"un",type:"email",name:"email",onChange:this.handleChange,value:this.state.email,placeholder:"Email"}),l.a.createElement("input",{className:"pass",align:"center",type:"password",id:"password",name:"password",onChange:this.handleChange,value:this.state.password,placeholder:"Password"}),l.a.createElement("div",{className:"submit-area"},l.a.createElement("button",{className:"submit"},"Submit")))))}}]),a}(n.Component));V.contextType=A;var Y=Object(_.g)(V),J=function(e){return l.a.createElement(Y,null)},W=(a(78),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={username:"",email:"",password:"",phone_number:null},e.handleChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(H.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),g(e.state).then((function(t){e.context.setUser(t)})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"isEmailCorrect",value:function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(this.state.email).toLowerCase())}},{key:"isStrongPassword",value:function(){return this.state.password.length>=5}},{key:"render",value:function(){return this.context.user?l.a.createElement(_.a,{to:"/profile"}):l.a.createElement("div",{className:"all"},l.a.createElement("div",{className:"main-signup"},l.a.createElement("p",{className:"signup",align:"center"},"Sign Up"),l.a.createElement("form",{className:"form-signup",onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"username"}),l.a.createElement("input",{className:"un-signup",onChange:this.handleChange,value:this.state.username,invalid:this.state.email.length>0&&!this.isEmailCorrect(),valid:this.isEmailCorrect(),type:"username",id:"username",name:"username",placeholder:"Username"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"}),l.a.createElement("input",{className:"un-signup",onChange:this.handleChange,value:this.state.email,type:"email",id:"email",name:"email",placeholder:"Email"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"password"}),l.a.createElement("input",{className:"un-signup",onChange:this.handleChange,value:this.state.password,type:"password",invalid:this.state.password.length>0&&!this.isStrongPassword(),valid:this.state.password.length>0&&this.isStrongPassword(),id:"password",name:"password",placeholder:"Password"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"phone_number"}),l.a.createElement("input",{className:"un-signup",onChange:this.handleChange,value:this.state.phone_number,type:"phone_number",id:"phone_number",name:"phone_number",placeholder:"Phone number"})),l.a.createElement("div",{className:"submit-area-su"},l.a.createElement("button",{className:"submit-signup"},"Submit"))),this.state.email.length>3&&l.a.createElement("p",null,this.isEmailCorrect()?"Your email is valid":"Your email is invalid")))}}]),a}(n.Component));W.contextType=A;var z=Object(_.g)(W),Q=function(e){return l.a.createElement(z,null)},B=a(24),X=F((function(e){var t=e.component,a=e.context,n=Object(B.a)(e,["component","context"]);return a.isLoading?null:a.isLoggedIn?l.a.createElement(_.b,Object.assign({},n,{render:function(e){return l.a.createElement(t,e)}})):l.a.createElement(_.a,{to:"/signin"})})),Z=a(25),$=(a(45),a(79),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={userAnnounces:[],selectedAnnounce:null},e.deleteAnnounce=function(t){w(t).then((function(){var a=Object(Z.a)(e.state.userAnnounces).filter((function(e){return e._id!==t}));e.setState({userAnnounces:a})}))},e.onAnnounceSelect=function(t){var a=e.state.userAnnounces.find((function(e){return e._id===t}));e.setState({selectedAnnounce:a})},e.onEditFormClose=function(){e.setState({selectedAnnounce:null})},e.handleAnnounceUpdate=function(t){var a=Object(Z.a)(e.state.userAnnounces).map((function(e){return e._id===t._id?t:e}));e.setState({userAnnounces:a})},e.addAnnounce=function(t){e.setState({userAnnounces:Object(Z.a)(e.state.userAnnounces)})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({userAnnounces:t})}))}},{key:"render",value:function(){var e=this,t=this.context.user;this.state.userAnnounces;return t?l.a.createElement("div",{className:"all"},l.a.createElement("section",{className:"Profile"},l.a.createElement("div",{className:"user-presentation"},l.a.createElement("h2",{className:"username"},"Hi ",t.username,"!")),l.a.createElement("div",{className:"user-image"},l.a.createElement("img",{src:t.profileImg,alt:t.profileImg})),l.a.createElement("div",null,l.a.createElement("button",{className:"link-profile"},l.a.createElement(r.b,{to:"/profile/settings"},"Edit profile")),l.a.createElement("button",{className:"link-create"},l.a.createElement(r.c,{to:"/create"},"Report Missing"))),l.a.createElement("div",{className:"missing"},l.a.createElement("h3",{className:"title"},"Your announcements"),this.state.userAnnounces&&this.state.userAnnounces.map((function(t){return l.a.createElement("div",{className:"missing_info",key:t._id},l.a.createElement("img",{style:{width:"100vw",height:""},src:t.image,alt:t.name}),l.a.createElement(r.b,{to:"/missing/".concat(t._id)},l.a.createElement("h2",null,t.title)),l.a.createElement("h3",null,t.name),l.a.createElement("h3",null,t.formattedAddress),l.a.createElement("h3",null,t.pet_type),l.a.createElement("h3",null,t.description),l.a.createElement("div",{className:"icons"},l.a.createElement(r.b,{to:"/profile/".concat(t._id,"/edit")},l.a.createElement("i",{className:"fas fa-edit"})),l.a.createElement("i",{className:"fas fa-trash",onClick:function(){return e.deleteAnnounce(t._id)}})))}))))):null}}]),a}(n.Component));$.contextType=A;var q=F($),K=(a(82),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={announces:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){e.setState({announces:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"missing"},l.a.createElement("div",{className:"missing-all"},l.a.createElement("h2",{className:"missing_title",style:{align:"center",color:"#6b6d05"}},"Missing pets"),this.state.announces&&this.state.announces.map((function(e){if("Missing"===e.status[0])return l.a.createElement("div",{className:"missing_info",key:e._id},l.a.createElement("img",{style:{width:"100vw",height:"50vh"},src:e.image,alt:e.name}),l.a.createElement(r.b,{to:"/missing/".concat(e._id)},l.a.createElement("h3",null,e.title)),l.a.createElement("h4",null,e.name),l.a.createElement("h4",null,e.location.coordinates),l.a.createElement("h4",null,e.pet_type),l.a.createElement("h4",null,e.description))}))))}}]),a}(n.Component)),ee=(a(83),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={announces:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){e.setState({announces:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"found"},l.a.createElement("div",{className:"all"},l.a.createElement("h2",{className:"found_title"},"Found page"),this.state.announces.map((function(e){if("Found"===e.status[0])return l.a.createElement("div",{className:"found_info",key:e._id},l.a.createElement("img",{style:{width:"100vw",height:"50vh"},src:e.image,alt:e.name}),l.a.createElement(r.b,{to:"/found/".concat(e._id)},l.a.createElement("h3",null,e.title)),l.a.createElement("h4",null,e.name),l.a.createElement("h4",null,e.location.coordinates),l.a.createElement("h4",null,e.pet_type),l.a.createElement("h4",null,e.description))}))))}}]),a}(n.Component)),te=(a(84),function(){return l.a.createElement("nav",{className:"NavBottom",style:{width:"100vw",height:"50px"}},l.a.createElement("ul",{className:"nav-list"},l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(r.c,{to:"/missing"},"Missing"))),l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(r.c,{to:"/found"},"Found")))))}),ae=(a(85),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={announce:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;N(t).then((function(t){e.setState({announce:t})}))}},{key:"render",value:function(){return this.state.announce?l.a.createElement("div",{className:"missing"},l.a.createElement("div",{className:"all"},l.a.createElement("div",{className:"missing-details"},l.a.createElement("h2",null,"Missing details"),l.a.createElement("img",{style:{height:"50vh",width:"100vw",color:"#6b6d05"},src:this.state.announce.image,alt:"bob"}),l.a.createElement("h2",null,this.state.announce.title),l.a.createElement("h3",null,this.state.announce.name),l.a.createElement("h4",null,this.state.announce.formattedAddress),l.a.createElement("p",null,this.state.announce.email),l.a.createElement("p",null,this.state.announce.description),l.a.createElement("p",null,this.state.announce.pet_type),l.a.createElement("p",null,this.state.announce.comments)))):l.a.createElement("div",null,"Looking for your announcement..")}}]),a}(n.Component)),ne=(a(86),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={announce:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;N(t).then((function(t){console.log(t),e.setState({announce:t})}))}},{key:"render",value:function(){return this.state.announce?l.a.createElement("div",{className:"missing"},l.a.createElement("div",{className:"all"},l.a.createElement("h2",{style:{color:"#6b6d05"}},"Found details"),l.a.createElement("div",{className:"one_found"},l.a.createElement("img",{style:{height:"50vh",width:"100vw",color:"#6b6d05"},src:this.state.announce.image,alt:"bob"}),l.a.createElement("h2",null,this.state.announce.title),l.a.createElement("h3",null,this.state.announce.name),l.a.createElement("h4",null,this.state.announce.formattedAddress),l.a.createElement("p",null,this.state.announce.email),l.a.createElement("p",null,this.state.announce.description),l.a.createElement("p",null,this.state.announce.pet_type)))):l.a.createElement("div",null,"Looking for your announcement..")}}]),a}(n.Component)),le=a(22),se=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={search:"",results:[],isLoading:!1},n.handleSearchChange=n.handleSearchChange.bind(Object(le.a)(n)),n}return Object(o.a)(a,[{key:"handleSearchChange",value:function(e){var t=this;this.setState({search:e.target.value,isLoading:!0}),clearTimeout(this.timeoutId),this.timeoutId=setTimeout((function(){t.performSearch()}),1e3)}},{key:"performSearch",value:function(){var e=this;""!==this.state.search?p.a.get("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(this.state.search,".json?access_token=").concat("pk.eyJ1IjoiaW50YW5wIiwiYSI6ImNranNvaXJmcTgxaTUyeWxnaGVpMHM1NHAifQ.oRrO6PATUG1aGeHmE8_n7Q")).then((function(t){e.setState({results:t.data.features,isLoading:!1})})):this.setState({results:[],isLoading:!1})}},{key:"handleAnnounceClicked",value:function(e){this.setState({search:e.place_name,results:[]}),this.props.onSelect(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.results,n=t.isLoading;return l.a.createElement("div",{className:"AutocompletePlace"},l.a.createElement("input",{type:"text",value:this.props.defaultValue||this.state.search,onChange:this.handleSearchChange,placeholder:"Type an address",className:"un-form"}),l.a.createElement("ul",{className:"AutocompletePlace-results"},a.map((function(t){return l.a.createElement("li",{key:t.id,className:"AutocompletePlace-announces",onClick:function(){return e.handleAnnounceClicked(t)}},t.place_name)})),n&&l.a.createElement("li",{className:"AutocompletePlace-announces"},"Loading...")))}}]),a}(n.Component),ce=(a(87),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={title:"",name:"",location:{coordinates:[]},email:"",image:"",description:"",pet_type:"",status:"",comments:""},e.imageRef=l.a.createRef(),e.handleChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(H.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state);var a=new FormData;for(var n in e.state)a.append(n,e.state[n]);a.append("image",e.imageRef.current.files[0]),C(a,{title:e.state.title,name:e.state.name,location:e.state.location,email:e.state.email,image:e.state.image,description:e.state.description,pet_type:e.state.pet_type,status:e.state.status,comments:e.state.comments}).then((function(t){e.props.history.push("/profile")}))},e.handlePlace=function(t){var a=t.geometry;e.setState({location:a,formattedAddress:t.place_name})},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"missing"},l.a.createElement("div",{className:"main-form"},l.a.createElement("p",{className:"form",align:"center"},"Report a missing/found animal"),l.a.createElement("form",{className:"announce-form",onSubmit:this.handleSubmit,ref:this.formRef},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"title"}),l.a.createElement("input",{className:"un-form",onChange:this.handleChange,value:this.state.title,id:"title",name:"title",type:"text",placeholder:"Title"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"}),l.a.createElement("input",{className:"un-form",onChange:this.handleChange,value:this.state.name,id:"name",name:"name",type:"text",placeholder:"Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"location"}),l.a.createElement(se,{onSelect:this.handlePlace})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"}),l.a.createElement("input",{className:"un-form",onChange:this.handleChange,value:this.state.email,id:"email",name:"email",type:"text",placeholder:"E-mail"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"status"}),l.a.createElement("select",{className:"un-form",name:"status",id:"status",onChange:this.handleChange,value:this.state.status,placeholder:"Status"},l.a.createElement("option",{className:"un-form",value:"",disabled:!0},"Select a status"),l.a.createElement("option",{value:"Missing"},"Missing"),l.a.createElement("option",{value:"Found"},"Found"))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"description"}),l.a.createElement("input",{className:"un-form",onChange:this.handleChange,value:this.state.description,id:"description",name:"description",type:"text",placeholder:"Description"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"image"}),l.a.createElement("input",{className:"un-form",ref:this.imageRef,onChange:this.handleChange,value:this.state.image,id:"image",name:"image",type:"file",placeholder:"Image"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"pet_type"}),l.a.createElement("input",{className:"un-form",onChange:this.handleChange,value:this.state.pet_type,id:"pet_type",name:"pet_type",type:"text",placeholder:"Pet type"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"comments"}),l.a.createElement("input",{className:"un-form",onChange:this.handleChange,value:this.state.comments,id:"comments",name:"comments",type:"text",placeholder:"Comments"})),l.a.createElement("button",{className:"submit-form"},"Submit !"))))}}]),a}(n.Component));ce.contextType=A;var re=Object(_.g)(ce),ie=function(e){return l.a.createElement("div",null,l.a.createElement(re,null))};function oe(e,t,a){if(!t||"object"!==typeof t||t instanceof Date||t instanceof File){var n=null==t?"":t;e.append(a,n)}else Object.keys(t).forEach((function(n){oe(e,t[n],a?"".concat(a,"[").concat(n,"]"):n)}))}a(88);var ue=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e,n;Object(i.a)(this,a);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(n=t.call.apply(t,[this].concat(c))).state=(e={title:"",name:"",location:"",email:"",description:"",image:""},Object(H.a)(e,"location",{coordinates:[]}),Object(H.a)(e,"status",""),Object(H.a)(e,"pet_type",""),Object(H.a)(e,"comments",""),e),n.imageRef=l.a.createRef(),n.handleChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(H.a)({},a,t))},n.handleSubmit=function(e){e.preventDefault();var t=new FormData,a=n.state;a.httpResponse;oe(t,Object(B.a)(a,["httpResponse"])),t.append("image",n.imageRef.current.files[0]);var l=n.props.match.params.id;S(l,t).then((function(e){n.props.history.push("/profile"),n.setState({httpResponse:{status:"success",message:"Item successfully added."}}),n.timeoutId=setTimeout((function(){n.setState({httpResponse:null})}),1e3)})).catch((function(e){n.setState({httpResponse:{status:"failure",message:"An error occured, try again later."}}),n.timeoutId=setTimeout((function(){n.setState({httpResponse:null})}),1e3)}))},n.handlePlace=function(e){var t=e.geometry;n.setState({location:t,formattedAddress:e.place_name})},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;N(t).then((function(t){console.log(t),e.setState({announce:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"missing"},l.a.createElement("div",{className:"main-edit"},l.a.createElement("p",{className:"edit-form",align:"center"},"Edit your announcement"),l.a.createElement("form",{className:"form-edit",onSubmit:this.handleSubmit,ref:this.formRef},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"title"}),l.a.createElement("input",{className:"un-edit",onChange:this.handleChange,value:this.state.title,id:"title",name:"title",type:"text",placeholder:"Title"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"}),l.a.createElement("input",{className:"un-edit",onChange:this.handleChange,value:this.state.name,id:"name",name:"name",type:"text",placeholder:"Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"location"}),l.a.createElement(se,{onSelect:this.handlePlace})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"}),l.a.createElement("input",{className:"un-edit",onChange:this.handleChange,value:this.state.email,id:"email",name:"email",type:"text",placeholder:"E-mail"}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"status"}),l.a.createElement("select",{name:"status",id:"status",onChange:this.handleChange,value:this.state.status,placeholder:"Status",className:"un-edit"},l.a.createElement("option",{value:"",disabled:!0},"Select a status"),l.a.createElement("option",{value:"Missing"},"Missing"),l.a.createElement("option",{value:"Found"},"Found")))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"description"}),l.a.createElement("input",{className:"un-edit",onChange:this.handleChange,value:this.state.description,id:"description",name:"description",type:"text",placeholder:"Description"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"image"}),l.a.createElement("input",{className:"un-edit",ref:this.imageRef,onChange:this.handleChange,value:this.state.image,id:"image",name:"image",type:"file",placeholder:"Image"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"pet_type"}),l.a.createElement("input",{className:"un-edit",onChange:this.handleChange,value:this.state.pet_type,id:"pet_type",name:"pet_type",type:"text",placeholder:"Pet type"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"comments"}),l.a.createElement("input",{className:"un-edit",onChange:this.handleChange,value:this.state.comments,id:"comments",name:"comments",type:"text",placeholder:"Comments"})),l.a.createElement("button",{className:"submit-edit"},"Submit !"))))}}]),a}(n.Component);ue.contextType=A;var me=ue,he=a(32),pe=(a(89),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={user:{username:"",password:"",profilImg:"",phone_number:0}},e.imageRef=l.a.createRef(),e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState({user:Object(he.a)(Object(he.a)({},e.state.user),{},Object(H.a)({},a,n))})},e.isValidInput=function(t){return""!==e.state.user[t]},e.checkError=function(){for(var t in e.state.user)if(""===e.state[t])return!0;return!1},e.handleSubmit=function(t){t.preventDefault();var a=new FormData;oe(a,Object.assign({},e.state)),a.append("profileImg",e.imageRef.current.files[0]),j(a).then((function(t){e.props.history.push("/profile"),e.setState({httpResponse:{status:"success",message:"Profile successfully updated."}}),e.context.setUser(t),e.timeoutId=setTimeout((function(){e.setState({httpResponse:null})}),2e3)})).catch((function(t){e.setState({httpResponse:{status:"failure",message:"Something bad happened while updating your profile, try again later"}}),e.timeoutId=setTimeout((function(){e.setState({httpResponse:null})}),2e3)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;k(t).then((function(t){e.setState({user:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"missing"},l.a.createElement("div",{className:"main-edit-pro"},l.a.createElement("p",{className:"form-pro"},"Edit your profile"),l.a.createElement("form",{className:"pro-form",onSubmit:this.handleSubmit},l.a.createElement("img",{className:"image-pro",src:this.state.user.profileImg,alt:"animal"}),l.a.createElement("label",{className:"label",htmlFor:"image"}),l.a.createElement("input",{className:"un-pro",ref:this.imageRef,onChange:this.handleChange,id:"profilImg",name:"profilImg",type:"file"}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"username"}),l.a.createElement("input",{className:"un-pro",id:"username",type:"text",name:"username",onChange:this.handleChange,value:this.state.user.username,placeholder:"Username"}),!this.isValidInput("username")&&l.a.createElement("p",{className:"input-error"},"Invalid input")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"password"}),l.a.createElement("input",{className:"un-pro",id:"password",type:"text",name:"password",onChange:this.handleChange,value:this.state.user.password||"",placeholder:"Password"}),!this.isValidInput("password")&&l.a.createElement("p",{className:"input-error"},"Invalid input")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"label",htmlFor:"phoneNumber"}),l.a.createElement("input",{className:"un-pro",id:"phoneNumber",type:"text",name:"phoneNumber",onChange:this.handleChange,value:this.state.user.phoneNumber,placeholder:"Phone number"}),!this.isValidInput("phoneNumber")&&l.a.createElement("p",{className:"input-error"},"Invalid input")),l.a.createElement("button",{className:"submit-pro"},"Save"))))}}]),a}(n.Component));pe.contextType=A;var de=pe;var fe=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(I,null),l.a.createElement(_.d,null,l.a.createElement(_.b,{exact:!0,path:"/",component:G}),l.a.createElement(_.b,{exact:!0,path:"/missing",component:K}),l.a.createElement(_.b,{exact:!0,path:"/missing/:id",component:ae}),l.a.createElement(_.b,{exact:!0,path:"/found/:id",component:ne}),l.a.createElement(_.b,{exact:!0,path:"/found",component:ee}),l.a.createElement(_.b,{exact:!0,path:"/signin",component:J}),l.a.createElement(_.b,{exact:!0,path:"/signup",component:Q}),l.a.createElement(X,{exact:!0,path:"/profile",component:q}),l.a.createElement(X,{exact:!0,path:"/create",component:ie}),l.a.createElement(X,{exact:!0,path:"/profile/:id/edit",component:me}),l.a.createElement(X,{exact:!0,path:"/profile/settings",component:de})),l.a.createElement(te,null))};a(90),a(91);c.a.render(l.a.createElement(r.a,null,l.a.createElement(x,null,l.a.createElement(fe,null))),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.dbe8aac5.chunk.js.map