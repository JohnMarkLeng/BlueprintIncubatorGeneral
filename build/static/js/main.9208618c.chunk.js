(this["webpackJsonpblueprint-app"]=this["webpackJsonpblueprint-app"]||[]).push([[0],{101:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(12),a=n.n(i),c=(n(101),n(38)),o=n(29),s=n(15),l=n(8),u=n(82),d=(n(106),n(114),u.a.initializeApp({apiKey:"AIzaSyAcf_D0EltZ5YRx81oWz8kL-j-cMFtQP9I",authDomain:"blueprintloginpage.firebaseapp.com",projectId:"blueprintloginpage",storageBucket:"blueprintloginpage.appspot.com",messagingSenderId:"908170588527",appId:"1:908170588527:web:bf100155f1a8b4eb87b89a",measurementId:"G-GPWLQGTPWE"})),j=d.firestore(),b=n(2),h="LOGIN_REQUEST",g="LOGIN_SUCCESS",O="LOGIN_FAILURE",x="LOGOUT_REQUEST",f="LOGOUT_SUCCESS",m="LOGOUT_FAILURE",p="VERIFY_REQUEST",v="VERIFY_SUCCESS",y=function(e){return{type:g,user:e}},w=function(e,t){return function(n){n({type:h}),d.auth().signInWithEmailAndPassword(e,t).then((function(e){n(y(e))})).catch((function(e){n({type:O})}))}},S=function(){return function(e){e({type:x}),d.auth().signOut().then((function(){e({type:f})})).catch((function(t){e({type:m})}))}},C=function(){return function(e){e({type:p}),d.auth().onAuthStateChanged((function(t){null!==t&&e(y(t)),e({type:v})}))}},E=n(150),k=n(153),L=n(154),R=n(169),T=n(155),I=n(156);var A=Object(c.b)((function(e){return{isLoggingIn:e.auth.isLoggingIn,loginError:e.auth.loginError,isAuthenticated:e.auth.isAuthenticated}}))((function(e){var t=e.dispatch,n=e.loginError,i=e.isAuthenticated,a=Object(r.useState)(""),c=Object(l.a)(a,2),u=c[0],d=c[1],j=Object(r.useState)(""),h=Object(l.a)(j,2),g=h[0],O=h[1];return i?Object(b.jsx)(s.a,{to:"/dashboard"}):Object(b.jsx)(E.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",backgroundcolor:"teal",style:{minHeight:"100vh",backgroundColor:"teal"},children:Object(b.jsx)(k.a,{children:Object(b.jsxs)(E.a,{container:!0,direction:"column",alignItems:"center",justify:"center",children:[Object(b.jsx)("img",{src:"https://cdn.discordapp.com/attachments/812822571094900746/837106499863969812/wyr_transparent.png",height:"80",alt:"",style:{marginTop:"15px"}}),Object(b.jsx)("h1",{children:"Log In"}),Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(w(u,g))},children:Object(b.jsxs)(L.a,{style:{minWidth:"25vw",padding:"15px"},children:[Object(b.jsx)(R.a,{required:!0,variant:"outlined",style:{marginBottom:"7px",backgroundColor:"#D6EAF8 "},id:"email",label:"Email Address",name:"email",onChange:function(e){var t=e.target;d(t.value)}}),Object(b.jsx)(R.a,{required:!0,type:"password",label:"Password",name:"password",id:"password",variant:"outlined",style:{marginBottom:"7px",backgroundColor:"#D6EAF8 "},onChange:function(e){var t=e.target;O(t.value)}}),n&&Object(b.jsx)(T.a,{style:{color:"red",marginBottom:"7px",alignSelf:"center"},children:"Incorrect email or password."}),Object(b.jsx)(I.a,{variant:"contained",type:"submit",style:{backgroundColor:"orange"},children:"Sign In"})]})}),Object(b.jsx)(o.b,{to:"/forgotpassword",children:"Forgot password?"}),Object(b.jsxs)("footer",{style:{marginTop:"7px",marginBottom:"15px"},children:["Not a member? ",Object(b.jsx)(o.b,{to:"/signup",children:"Sign up"})]})]})})})})),B=n(28),F=function(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),i=n[0],a=n[1],c=Object(r.useState)(""),u=Object(l.a)(c,2),h=u[0],g=u[1],O=Object(r.useState)(""),x=Object(l.a)(O,2),f=x[0],m=x[1],p=Object(r.useState)(""),v=Object(l.a)(p,2),y=v[0],w=v[1],S=Object(r.useState)(""),C=Object(l.a)(S,2),A=C[0],F=C[1],D=Object(r.useState)(""),M=Object(l.a)(D,2),P=M[0],N=M[1],U=Object(r.useState)([""]),_=Object(l.a)(U,2),W=_[0],z=_[1],V=Object(r.useState)([""]),G=Object(l.a)(V,2),q=G[0],H=G[1],Y=Object(r.useState)(!0),Q=Object(l.a)(Y,2),J=(Q[0],Q[1]),Z=Object(r.useState)(!0),$=Object(l.a)(Z,2),K=($[0],$[1]),X=Object(r.useState)(!0),ee=Object(l.a)(X,2),te=ee[0],ne=ee[1],re=Object(r.useState)(!0),ie=Object(l.a)(re,2),ae=(ie[0],ie[1]),ce=Object(r.useState)(!0),oe=Object(l.a)(ce,2),se=oe[0],le=oe[1],ue=Object(r.useState)(!0),de=Object(l.a)(ue,2),je=de[0],be=de[1],he=Object(r.useState)(!0),ge=Object(l.a)(he,2),Oe=ge[0],xe=ge[1];function fe(t){if(t.preventDefault(),!function(){var e=!0,t=f.substring(f.indexOf("@"),f.length);if(f.length>0&&"@rutgers.edu"===t?(J(!0),e=e&&!0):(J(!1),e=e&&!1),A.length>0&&A.length<=6)K(!1),e=e&&!1;else{K(!0),e=e&&!0;for(var n=0,r=!1,i=!1;n<=A.length;)""!==A.charAt(n)?(/^[a-z]*$/.test(A.charAt(n))?i=!0:/^[A-Z]*$/.test(A.charAt(n))&&(r=!0),n++):n++;r&&i?(ae(!0),e=e&&!0):(ae(!1),e=e&&!1)}return P.length>6&&0===A.localeCompare(P)?(ne(!0),e=e&&!0):(ne(!1),e=e&&!1),""!==W[0]?(xe(!0),e=e&&!0):(xe(!1),e=e&&!1),e}())return ye();var n=function(e,t){d.auth().createUserWithEmailAndPassword(e,t).then((function(e){e.user.sendEmailVerification()})).catch((function(e){var t=e.code;return e.errorMessage,"auth/email-already-in-use"===t?(alert("Email Address is already in use"),Object(b.jsx)(s.a,{to:"/login"})):"auth/invalid-email"===t||"auth/weak-password"===t?t:void 0}))}(f,A);return"auth/invalid-email"===n?(le(!1),ye()):"auth/weak-password"===n?(be(!1),ye()):(d.auth().onAuthStateChanged((function(e){if(e){e.updateProfile({displayName:y}).catch((function(e){console.log("Error updating profile: "+e)}));var t=me(W),n=me(q);j.collection("users").doc(e.uid).set({firstName:i,lastName:h,major:t,minor:n}).catch((function(e){console.error("Error adding document: ",e)}))}})),void e.history.push("/dashboard"))}function me(e){for(var t=e,n=0;n<t.length;n++)""===t[n]&&t.splice(n,1);return t}var pe=function(){z([].concat(Object(B.a)(W),[""]))},ve=function(){H([].concat(Object(B.a)(q),[""]))};function ye(){return Object(b.jsx)(E.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh",backgroundColor:"#E67E22 "},children:Object(b.jsx)(k.a,{children:Object(b.jsxs)(E.a,{container:!0,direction:"column",alignItems:"center",justify:"center",children:[Object(b.jsx)("h1",{children:"Sign Up"}),Object(b.jsx)("form",{onSubmit:fe,children:Object(b.jsxs)(L.a,{style:{minWidth:"25vw",padding:"15px"},children:[Object(b.jsxs)(T.a,{style:{color:"red",marginBottom:"7px",alignSelf:"center"},children:["* Password must be longer than six digits and",Object(b.jsx)("br",{}),"include at least one uppercase and one lower case letter",Object(b.jsx)("br",{}),"* Please use your rutgers email ending with @rutgers.edu",Object(b.jsx)("br",{})]}),Object(b.jsx)(R.a,{required:!0,label:"First Name",variant:"outlined",style:{marginBottom:"7px",backgroundColor:"#D6EAF8 "},value:i,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)(R.a,{required:!0,label:"Last Name",variant:"outlined",style:{marginBottom:"7px",backgroundColor:"#D6EAF8 "},value:h,onChange:function(e){return g(e.target.value)}}),Object(b.jsx)(R.a,{required:!0,label:"Email",variant:"outlined",style:{marginBottom:"7px",backgroundColor:"#D6EAF8 "},value:f,onChange:function(e){return m(e.target.value)}}),!se&&Object(b.jsx)(T.a,{style:{color:"red",marginBottom:"7px",alignSelf:"center"},children:"Email address is invalid"}),W.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(R.a,{label:"Major",variant:"outlined",style:{marginBottom:"7px",backgroundColor:"#D6EAF8 "},value:e,onChange:function(e){return function(e,t){var n=e.target.value,r=Object(B.a)(W);r[t]=n,z(r)}(e,t)}}),1!==W.length&&Object(b.jsx)(I.a,{variant:"contained",disableElevation:!0,style:{marginLeft:"10px",marginTop:"10px"},onClick:function(){return function(e){var t=Object(B.a)(W);t.splice(e,1),z(t)}(t)},children:"Remove"}),W.length-1===t&&Object(b.jsx)(I.a,{variant:"contained",disableElevation:!0,style:{marginLeft:"10px",marginTop:"10px"},onClick:pe,children:"Add"}),!Oe&&0===t&&Object(b.jsx)(T.a,{style:{color:"red",marginBottom:"7px",alignSelf:"center"},children:"Enter at least one major"})]},"majorListDiv"+t)})),q.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(R.a,{label:"Minor (if applicable)",variant:"outlined",style:{marginBottom:"7px",backgroundColor:"#D6EAF8 "},value:e,onChange:function(e){return function(e,t){var n=e.target.value,r=Object(B.a)(q);r[t]=n,H(r)}(e,t)}}),1!==q.length&&Object(b.jsx)(I.a,{variant:"contained",disableElevation:!0,style:{marginLeft:"10px",marginTop:"10px"},onClick:function(){return function(e){var t=Object(B.a)(q);t.splice(e,1),H(t)}(t)},children:"Remove"}),q.length-1===t&&Object(b.jsx)(I.a,{variant:"contained",disableElevation:!0,style:{marginLeft:"10px",marginTop:"10px"},onClick:ve,children:"Add"})]},"minorListDiv"+t)})),Object(b.jsx)(R.a,{required:!0,label:"Username",variant:"outlined",style:{marginBottom:"7px",backgroundColor:"#D6EAF8"},value:y,onChange:function(e){return w(e.target.value)}}),Object(b.jsx)(R.a,{required:!0,type:"password",label:"Password",variant:"outlined",style:{marginBottom:"7px",backgroundColor:"#D6EAF8 "},value:A,onChange:function(e){return F(e.target.value)}}),!je&&Object(b.jsx)(T.a,{style:{color:"red",marginBottom:"7px",alignSelf:"center"},children:"Try to use a stronger password"}),Object(b.jsx)(R.a,{required:!0,type:"password",label:"Re-enter Password",variant:"outlined",style:{marginBottom:"7px",backgroundColor:"#D6EAF8 "},value:P,onChange:function(e){return N(e.target.value)}}),!te&&Object(b.jsx)(T.a,{style:{color:"red",marginBottom:"7px",alignSelf:"center"},children:"Passwords Do Not Match"}),Object(b.jsx)(I.a,{variant:"contained",style:{backgroundColor:"orange"},type:"submit",children:"Create"})]})}),Object(b.jsxs)("div",{style:{marginBottom:"15px"},children:["Already a member? ",Object(b.jsx)(o.b,{to:"/login",children:"Log in"})]})]})})})}return ye()},D=function(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),i=n[0],a=n[1],c=!1;a===i&&i.length>0&&(c=!0);return Object(b.jsx)(E.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh",backgroundColor:"teal"},children:Object(b.jsxs)("div",{style:{backgroundColor:"white",borderRadius:"5px"},children:[Object(b.jsx)("h1",{style:{textAlign:"center"},children:"Forgot Password"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){d.auth().sendPasswordResetEmail(e).then((function(){alert("Please check your email!")}))}(i)},children:[!c&&Object(b.jsx)("h4",{style:{color:"black",marginBottom:"7px",marginLeft:"7px"},children:"Enter your email"}),Object(b.jsxs)(L.a,{style:{minWidth:"25vw",padding:"25px",borderRadius:"25px"},children:[Object(b.jsx)(R.a,{required:!0,label:"Email",id:"email_field",variant:"outlined",style:{marginBottom:"7px",backgroundColor:"#D6EAF8 "},value:i,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)(I.a,{id:"#btn-forgotPass",variant:"contained",type:"submit",style:{marginBottom:"7px",backgroundColor:"orange"},disabled:!1,children:"Send email"})]})]})]})})},M=n(118),P=n(172),N=n(89),U=n(173),_=n(171),W=n(166),z=n(167),V=n(157),G=n(165),q=n(115),H=n(41),Y=n(158),Q=n(159),J={position:"fixed",top:"0",left:"0",width:"100%",height:"100vh",backgroundColor:"rgba(52, 52, 52, 0.4)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:4},Z={position:"relative",padding:"32px",width:" 70%",maxWidth:"800px",backgroundColor:"#FFF",zIndex:5,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},$=function(e){var t=e.trigger,n=e.closed,i=e.fromCourse,a=Object(r.useState)(null),c=Object(l.a)(a,2),o=c[0],s=c[1],u=Object(r.useState)(null),h=Object(l.a)(u,2),g=h[0],O=h[1],x=Object(r.useState)(null),f=Object(l.a)(x,2),m=f[0],p=f[1],v=Object(r.useState)(null),y=Object(l.a)(v,2),w=y[0],S=y[1],C=Object(r.useState)(null),L=Object(l.a)(C,2),T=L[0],A=L[1],F=Object(r.useState)(null),D=Object(l.a)(F,2),M=D[0],P=D[1],N=Object(r.useState)(""),U=Object(l.a)(N,2),_=U[0],W=U[1],z=Object(r.useState)(""),G=Object(l.a)(z,2),q=G[0],H=G[1],$=Object(r.useState)(""),K=Object(l.a)($,2),X=K[0],ee=K[1],te=Object(r.useState)(""),ne=Object(l.a)(te,2),re=ne[0],ie=ne[1];function ae(){s(null),O(null),p(null),W(""),H(""),ee(""),ie("")}return t&&Object(b.jsx)("div",{style:J,children:Object(b.jsx)(k.a,{style:Z,children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),null===o||null===g||null===m?alert("Fill out all fields and star ratings!"):void 0!==i?(j.collection("courses/"+i.code+"/reviews").add({diffRating:o,workloadRating:g,profRating:m,overallRating:(o+g+m)/3,prof:X,description:re,user:d.auth().currentUser.displayName}).catch((function(e){console.error("Error adding document: ",e)})),ae()):(j.collection("courses").doc(q).set({name:_,code:q}).catch((function(e){console.error("Error adding document: ",e)})),j.collection("courses").doc(q).collection("reviews").add({diffRating:o,workloadRating:g,profRating:m,overallRating:(o+g+m)/3,prof:X,description:re,user:d.auth().currentUser.displayName}),ae())},children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(V.a,{children:"Workload (1 is the MOST work, 5 is the LEAST work): *"}),Object(B.a)(Array(5)).map((function(e,t){var n=t+1;return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",style:{display:"none"},value:n,onClick:function(){return O(n)}},"workloadRating"+t),n<=(T||g)?Object(b.jsx)(Y.a,{style:{fontSize:34,cursor:"pointer",color:"#fb9263"},onMouseEnter:function(){return A(n)},onMouseLeave:function(){return A(null)}},"workloadStar"+t):Object(b.jsx)(Q.a,{style:{fontSize:34,cursor:"pointer"},onMouseEnter:function(){return A(n)},onMouseLeave:function(){return A(null)}},"workloadStarOutline"+t)]},"workloadLabel"+t)}))]}),Object(b.jsxs)("div",{style:{marginTop:"10px"},children:[Object(b.jsx)(V.a,{children:"Difficulty of Content (1 is the HARDEST, 5 is the EASIEST): *"}),Object(B.a)(Array(5)).map((function(e,t){var n=t+1;return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",style:{display:"none"},value:n,onClick:function(){return s(n)}},"diffRating"+t),n<=(w||o)?Object(b.jsx)(Y.a,{style:{fontSize:34,cursor:"pointer",color:"#fb9263"},onMouseEnter:function(){return S(n)},onMouseLeave:function(){return S(null)}},"diffStar"+t):Object(b.jsx)(Q.a,{style:{fontSize:34,cursor:"pointer"},onMouseEnter:function(){return S(n)},onMouseLeave:function(){return S(null)}},"diffStarOutline"+t)]},"diffLabel"+t)}))]}),Object(b.jsxs)("div",{style:{marginTop:"10px"},children:[Object(b.jsx)(V.a,{children:"Professor (1 is the WORST, 5 is the BEST): *"}),Object(B.a)(Array(5)).map((function(e,t){var n=t+1;return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",style:{display:"none"},value:n,onClick:function(){return p(n)}},"profRating"+t),n<=(M||m)?Object(b.jsx)(Y.a,{style:{fontSize:34,cursor:"pointer",color:"#fb9263"},onMouseEnter:function(){return P(n)},onMouseLeave:function(){return P(null)}},"profStar"+t):Object(b.jsx)(Q.a,{style:{fontSize:34,cursor:"pointer"},onMouseEnter:function(){return P(n)},onMouseLeave:function(){return P(null)}},"profStarOutline"+t)]},"profRatingLabel"+t)}))]}),Object(b.jsx)(R.a,{id:"courseName",required:!0,style:{width:"60%",marginBottom:"10px",marginTop:"5px"},label:"Course:",value:void 0!==i?i.name:_,onChange:function(e){return W(e.target.value)}}),Object(b.jsx)(R.a,{id:"courseCode",required:!0,style:{width:"60%",marginBottom:"10px",marginTop:"5px"},label:"Code:",value:void 0!==i?i.code:q,onChange:function(e){return H(e.target.value)}}),Object(b.jsx)(R.a,{id:"prof",required:!0,style:{width:"60%",marginBottom:"10px",marginTop:"5px"},label:"Professor:",value:X,onChange:function(e){return ee(e.target.value)}}),Object(b.jsx)(R.a,{id:"description",required:!0,style:{width:"80%",marginBottom:"20px"},label:"Enter Your Review:",value:re,onChange:function(e){return ie(e.target.value)},multiline:!0,rows:5}),Object(b.jsxs)(E.a,{children:[Object(b.jsx)(I.a,{variant:"contained",disableElevation:!0,style:{marginRight:"20px",backgroundColor:"#fb9263"},type:"submit",children:"Submit"}),Object(b.jsx)(I.a,{onClick:n,variant:"contained",disableElevation:!0,style:{marginLeft:"20px",backgroundColor:"#fb9263"},children:"Close"})]})]})})})},K=n(161),X=n(163),ee=n(170),te=n(162),ne=n(164),re=n(160),ie=function(e){for(var t=e.rating,n=e.user,r=[],i=1;i<=Math.floor(t);i++)r.push(Object(b.jsx)(Y.a,{style:{color:"white",marginRight:"5px"}},n+"star"+i));t-Math.floor(t)>=.25&&r.push(Object(b.jsx)(re.a,{style:{color:"white",marginRight:"5px"}},n+"halfStar")),t-Math.floor(t)>0&&t-Math.floor(t)<.25&&r.push(Object(b.jsx)(Q.a,{style:{marginRight:"5px"}},n+"outlinedStar"));for(var a=1;a<=5-Math.ceil(t);a++)r.push(Object(b.jsx)(Q.a,{style:{marginRight:"5px"}},n+"outlinedStar"+a));return Object(b.jsx)("div",{children:r})},ae=Object(q.a)((function(){return{summaryCard:{backgroundColor:"#fb9263",width:"65vw",padding:"25px",marginLeft:"auto",marginRight:"auto",borderRadius:25},addReviewButton:{width:H.isMobileOnly?"80vw":"40vw",height:"2rem",borderRadius:25,backgroundColor:"#bdf4ff",marginTop:"25px"}}}))((function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),i=n[0],a=n[1],c=Object(r.useState)([]),o=Object(l.a)(c,2),s=o[0],u=o[1],d=Object(r.useState)(0),h=Object(l.a)(d,2),g=h[0],O=h[1],x=Object(r.useState)(!1),f=Object(l.a)(x,2),m=f[0],p=f[1],v=e.selectedCourse,y=e.classes;return Object(r.useEffect)((function(){j.collection("courses/"+v.code+"/reviews").onSnapshot((function(e){var t=[],n=0;e.forEach((function(e){t.push(e.data()),n+=e.data().overallRating})),u(t),O(n/t.length)}))}),[v]),i?Object(b.jsx)(le,{}):Object(b.jsxs)("div",{children:[Object(b.jsxs)(E.a,{container:!0,children:[Object(b.jsx)(M.a,{onClick:function(){a(!0)},children:Object(b.jsx)(K.a,{})}),Object(b.jsx)("img",{src:"https://cdn.discordapp.com/attachments/812822571094900746/837106499863969812/wyr_transparent.png",height:"50",style:{marginLeft:"auto",marginRight:"5px",marginTop:"5px"},alt:""})]}),Object(b.jsx)(k.a,{className:y.summaryCard,children:Object(b.jsxs)(E.a,{container:!0,alignItems:"center",children:[Object(b.jsxs)("div",{id:"left",children:[Object(b.jsx)("h2",{children:v.name}),Object(b.jsx)("h3",{children:v.code})]}),Object(b.jsxs)("div",{id:"middle",style:{marginLeft:"auto",marginRight:"auto",marginTop:"auto"},children:[Object(b.jsx)(ie,{rating:g,user:"average"}),Object(b.jsxs)("h3",{children:[s.length," reviews"]})]}),Object(b.jsxs)("div",{id:"right",style:{marginLeft:"auto"},children:[Object(b.jsxs)("h1",{children:[(Math.round(100*g)/100).toFixed(2)," / 5"]}),Object(b.jsx)("h3",{children:"Overall Rating"})]})]})}),Object(b.jsxs)("div",{align:"center",children:[Object(b.jsx)(I.a,{variant:"contained",disableElevation:!0,className:y.addReviewButton,onClick:function(){p(!0)},children:"Write a Review"}),Object(b.jsx)($,{trigger:m,closed:function(){p(!1)},fromCourse:v})]}),Object(b.jsxs)(E.a,{container:!0,justify:"center",alignItems:"center",children:[Object(b.jsx)(E.a,{item:!0,xs:6,children:Object(b.jsx)("h1",{children:"Reviews"})}),Object(b.jsx)(E.a,{item:!0,xs:2,children:Object(b.jsx)("h2",{children:"Sort By"})}),s.map((function(e){return Object(b.jsxs)(ee.a,{defaultExpanded:!0,style:{backgroundColor:"#4198b5",borderRadius:25,width:H.isMobileOnly?"90vw":"65vw",marginBottom:"10px",padding:"10px"},children:[Object(b.jsxs)(te.a,{expandIcon:Object(b.jsx)(X.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[Object(b.jsx)(V.a,{style:{color:"white"},children:e.user},e.user),!H.isMobileOnly&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(b.jsx)(V.a,{children:"Workload:"},e.user+"workload"),Object(b.jsx)(ie,{rating:e.workloadRating,user:e.user})]}),Object(b.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(b.jsx)(V.a,{children:"Difficulty Of Content:"},e.user+"diff"),Object(b.jsx)(ie,{rating:e.diffRating,user:e.user})]}),Object(b.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(b.jsxs)(V.a,{style:{color:"white"},children:["Professor: ",e.prof]},"prof"+e.user),Object(b.jsx)(ie,{rating:e.profRating,user:e.user})]})]})]},"accordianSummary"+e.user),Object(b.jsx)(ne.a,{children:Object(b.jsxs)("div",{children:[H.isMobileOnly&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)(V.a,{style:{color:"white",marginLeft:"auto"},children:["Professor: ",e.prof]},"prof"+e.user),Object(b.jsx)(ie,{rating:e.profRating,user:e.user})]}),Object(b.jsxs)("div",{style:{marginTop:"10px"},children:[Object(b.jsx)(V.a,{children:"Workload:"},e.user+"workload"),Object(b.jsx)(ie,{rating:e.workloadRating,user:e.user})]}),Object(b.jsxs)("div",{style:{marginTop:"10px"},children:[Object(b.jsx)(V.a,{children:"Difficulty Of Content:"},e.user+"diff"),Object(b.jsx)(ie,{rating:e.diffRating,user:e.user})]})]}),Object(b.jsx)(V.a,{align:"left",style:{marginTop:"10px"},children:e.description},"description"+e.user)]})},"accordionDetails"+e.user)]},"accordian"+e.user)}))]})]})})),ce=n(85),oe=n(86),se=function(){function e(t){var n=t.timeout,r=t.onTimeout,i=t.onExpired;Object(ce.a)(this,e),this.timeout=n,this.onTimeout=r;var a=parseInt(localStorage.getItem("_expiredTime"),10);a>0&&a<Date.now()?i():(this.eventhandler=this.updateExpiredTime.bind(this),this.tracker(),this.startInterval())}return Object(oe.a)(e,[{key:"startInterval",value:function(){var e=this;this.updateExpiredTime(),this.interval=setInterval((function(){parseInt(localStorage.getItem("_expiredTime"),10)<Date.now()&&e.onTimeout&&e.onTimeout()}),1e3)}},{key:"updateExpiredTime",value:function(){var e=this;this.timeoutTracker&&clearTimeout(this.timeoutTracker),this.timeoutTracker=setTimeout((function(){localStorage.setItem("_expiredTime",Date.now()+1e3*e.timeout)}),300)}},{key:"tracker",value:function(){window.addEventListener("mousemove",this.eventhandler),window.addEventListener("scroll",this.eventhandler),window.addEventListener("keydown",this.eventhandler),window.addEventListener("click",this.eventhandler)}},{key:"cleanUp",value:function(){localStorage.removeItem("_expiredTime"),clearInterval(this.interval),window.removeEventListener("mousemove",this.eventhandler),window.removeEventListener("scroll",this.eventhandler),window.removeEventListener("keydown",this.eventhandler),window.removeEventListener("click",this.eventhandler)}}]),e}();var le=Object(q.a)((function(){return{"@global":{"*::-webkit-scrollbar":{width:"0.4em"},"*::-webkit-scrollbar-track":{"-webkit-box-shadow":"inset 0 0 6px rgba(0,0,0,0.00)"},"*::-webkit-scrollbar-thumb":{backgroundColor:"#D6EAF8 ",outline:"1px solid slategrey"}},searchBar:{backgroundColor:"#7ae7ff",opacity:.5,borderRadius:25,padding:"10px"},courseCard:{backgroundColor:"#fb9263",borderRadius:25,padding:"20px",height:"100px"},gridList:{width:"90vw",height:"auto",padding:"15px"},addReviewButton:{width:H.isMobileOnly?"40vw":"20vw",height:"3rem",borderRadius:25,backgroundColor:"#fb9263",marginBottom:"25px",fontSize:16}}}))(Object(c.b)((function(e){return{isLoggingOut:e.auth.isLoggingOut,logoutError:e.auth.logoutError}}))((function(e){var t=Object(r.useState)(null),n=Object(l.a)(t,2),i=n[0],a=n[1],c=Object(r.useState)([]),o=Object(l.a)(c,2),s=o[0],u=o[1],h=Object(r.useState)({}),g=Object(l.a)(h,2),O=g[0],x=g[1],f=Object(r.useState)(!1),m=Object(l.a)(f,2),p=m[0],v=m[1],y=Object(r.useState)(""),w=Object(l.a)(y,2),C=w[0],L=w[1],R=Object(r.useState)(!1),T=Object(l.a)(R,2),A=T[0],B=T[1],F=Object(r.useState)(!1),D=Object(l.a)(F,2),q=D[0],Y=D[1],Q=Object(r.useState)(!1),J=Object(l.a)(Q,2),Z=J[0],K=J[1],X=e.classes,ee=e.isLoggingOut,te=e.logoutError,ne=e.dispatch,re=function(e){for(var t=e.target.innerText,n=0;n<s.length;n++){var r=s[n];(t.includes(r.name)||t.includes(r.code))&&(x(r),v(!0))}};return Object(r.useEffect)((function(){var e=new se({timeout:900,onTimeout:function(){Y(!0)},onExpired:function(){Y(!0)}});q&&ne(S());var t=j.collection("courses").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),u(t)}));return function(){t(),e.cleanUp()}}),[ne,q]),d.auth().currentUser.emailVerified?p?Object(b.jsx)(ae,{selectedCourse:O}):Object(b.jsxs)("div",{children:[Object(b.jsxs)(E.a,{container:!0,children:[Object(b.jsx)(M.a,{onClick:function(e){a(e.currentTarget)},"aria-controls":"menu",children:Object(b.jsx)(P.a,{})}),Object(b.jsx)(N.a,{id:"menu",onClose:function(){a(null)},anchorEl:i,open:Boolean(i),children:Object(b.jsx)(U.a,{onClick:function(){ne(S())},children:"Logout"},"logoutItem")}),Object(b.jsx)("h1",{style:{marginLeft:"auto"},children:"Classes"}),Object(b.jsx)("img",{src:"https://cdn.discordapp.com/attachments/812822571094900746/837106499863969812/wyr_transparent.png",height:"50",style:{marginLeft:"auto",marginRight:"5px",marginTop:"5px"},alt:""})]}),Object(b.jsxs)(E.a,{container:!0,direction:"column",alignItems:"center",justify:"center",children:[Object(b.jsxs)("div",{className:X.searchBar,children:[Object(b.jsx)(_.a,{placeholder:"Course Name or Code...",onChange:function(e){L(e.target.value)},style:{width:"50vw"}}),Object(b.jsx)(G.a,{style:{color:"#fb9263"}})]}),Object(b.jsx)(W.a,{className:X.gridList,cols:H.isMobileOnly?1:3,children:s.filter((function(e){return""===C||e.name.toLowerCase().includes(C.toLowerCase())||e.code.replaceAll(":","").includes(C.replaceAll(":",""))?e:void 0})).map((function(e){return Object(b.jsx)(z.a,{style:{height:"auto",padding:"10px"},children:Object(b.jsx)(k.a,{className:X.courseCard,onClick:re,children:Object(b.jsxs)(E.a,{container:!0,direction:"column",alignItems:"center",justify:"center",children:[Object(b.jsx)("h3",{children:e.code},e.code),Object(b.jsx)(V.a,{children:e.name},e.name)]},"cardGrid"+e.code)},"card"+e.code)},"GLT"+e.code)}))}),Object(b.jsxs)("div",{align:"center",children:[Object(b.jsx)("h1",{children:"Can't Find the Class You're Looking For?"}),Object(b.jsx)(I.a,{className:X.addReviewButton,onClick:function(){B(!0)},children:"Add Class"}),Object(b.jsx)($,{trigger:A,closed:function(){B(!1)}})]})]}),ee&&Object(b.jsx)("p",{children:"Logging Out...."}),te&&Object(b.jsx)("p",{children:"Error logging out"})]}):Object(b.jsxs)("div",{align:"center",children:[Object(b.jsx)("h1",{children:"Verify Your Email!"}),Object(b.jsx)(I.a,{style:{backgroundColor:"#fb9263"},disabled:Z,onClick:function(){d.auth().currentUser.sendEmailVerification(),K(!0)},children:"Resend Verification Email"}),Object(b.jsx)(I.a,{style:{backgroundColor:"#fb9263"},onClick:function(){window.location.reload()},children:"Refresh Page"})]})}))),ue=n(17),de=n(90),je=function(e){var t=e.component,n=e.isAuthenticated,r=e.isVerifying,i=Object(de.a)(e,["component","isAuthenticated","isVerifying"]);return Object(b.jsx)(s.b,Object(ue.a)(Object(ue.a)({},i),{},{render:function(e){return r?Object(b.jsx)("div",{}):n?Object(b.jsx)(t,Object(ue.a)({},e)):Object(b.jsx)(s.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},be=n(168),he=n(87),ge=n.n(he),Oe=(n(112),function(e){var t=e.text,n=Object(r.useRef)(0),i=Object(r.useState)(""),a=Object(l.a)(i,2),c=a[0],o=a[1];return Object(r.useEffect)((function(){n.current<t.length&&setTimeout((function(){o((function(e){return e+t.charAt(n.current)})),n.current+=1}),200)}),[c,t]),Object(b.jsxs)("h1",{children:[c," "]})}),xe=Object(be.a)({root:{background:"linear-gradient(145deg, #5F9EA0 20%, #ff7f50 70%)",color:"white",height:"3000px",maxWidth:"100%",overflowX:"hidden"}}),fe=function(){Object(r.useEffect)((function(){ge.a.init({duration:1500})}),[]);var e=xe(),t=Object(r.useState)(!1),n=Object(l.a)(t,2),i=n[0],a=n[1],c=Object(r.useState)(!1),o=Object(l.a)(c,2),u=o[0],d=o[1],j=function(){a(!0)},h=function(){d(!0)};return!0===i?Object(b.jsx)(s.a,{to:"/login"}):!0===u?Object(b.jsx)(s.a,{to:"/signup"}):Object(b.jsxs)("div",{className:e.root,children:[Object(b.jsxs)(E.a,{container:!0,children:[Object(b.jsx)("img",{src:"https://cdn.discordapp.com/attachments/812822571094900746/837106499863969812/wyr_transparent.png",height:"80",style:{marginLeft:"10px",marginRight:"10px",marginTop:"10px"},alt:""}),Object(b.jsxs)("div",{style:{marginLeft:"auto",marginRight:"10px",marginTop:"10px"},children:[Object(b.jsx)(I.a,{disableElevation:!0,size:"large",style:{borderRadius:25,color:"white"},onClick:j,children:"Login"}),Object(b.jsx)(I.a,{variant:"contained",disableElevation:!0,style:{borderRadius:25,marginLeft:"10px",maxHeight:"30px"},onClick:h,children:"Sign Up"})]})]}),Object(b.jsxs)(E.a,{container:!0,direction:"column",alignItems:"center",justify:"center",spacing:0,style:{marginTop:"10px",minHeight:"700px"},children:[Object(b.jsx)(E.a,{item:!0,xs:12,children:Object(b.jsx)("center",{style:{fontSize:40},children:Object(b.jsx)(Oe,{text:"Would You Recommend?"})})}),Object(b.jsx)(E.a,{item:!0,xs:8,children:Object(b.jsx)("center",{children:Object(b.jsx)("h1",{children:"wyr is an informative and intuitive tool to help find, choose, and organize your classes."})})}),Object(b.jsx)(I.a,{variant:"contained",disableElevation:!0,style:{borderRadius:25,backgroundColor:"#FF7F50",color:"white",fontSize:17,fontWeight:"bold",marginTop:"50px",marginBottom:"50px"},onClick:j,children:"add a review now"}),Object(b.jsx)(E.a,{item:!0,xs:12,children:Object(b.jsx)("center",{children:Object(b.jsx)(Oe,{text:"Real Students, Real Reviews"})})}),Object(b.jsx)(E.a,{item:!0,xs:8,children:Object(b.jsx)("center",{children:Object(b.jsx)("h1",{children:"wyr makes sure that every review is authentic and not modified in any way."})})})]}),Object(b.jsxs)(E.a,{container:!0,direction:"row",alignItems:"center",justify:"center",spacing:0,style:{marginTop:"10px",minHeight:"500px"},children:[Object(b.jsx)(E.a,{item:!0,xs:5,children:Object(b.jsx)("img",{"data-aos":"slide-right",src:"/images/search_feature.PNG",width:"98%","max-height":"98%","object-fit":"contain",alt:""})}),Object(b.jsx)(E.a,{item:!0,xs:6,children:Object(b.jsx)("center",{children:Object(b.jsx)("h1",{style:{marginLeft:"10px"},children:"Search for topics of interests to find the perfect classes for you"})})})]}),Object(b.jsxs)(E.a,{container:!0,direction:"row",alignItems:"center",justify:"center",spacing:0,style:{marginTop:"10px",minHeight:"500px"},children:[Object(b.jsx)(E.a,{item:!0,xs:4,children:Object(b.jsx)("center",{children:Object(b.jsx)("h1",{children:"Get simple overviews for classes with all the info you need"})})}),Object(b.jsx)(E.a,{item:!0,xs:6,children:Object(b.jsx)("img",{"data-aos":"slide-left",src:"/images/class_feature.PNG",width:"98%","max-height":"98%","object-fit":"contain",style:{marginLeft:"10%"},alt:""})})]}),Object(b.jsxs)(E.a,{container:!0,direction:"row",alignItems:"center",justify:"center",spacing:0,style:{marginTop:"10px",minHeight:"500px"},children:[Object(b.jsx)(E.a,{item:!0,xs:5,children:Object(b.jsx)("img",{"data-aos":"slide-right",src:"/images/review_feature.PNG",width:"98%","max-height":"98%","object-fit":"contain",alt:""})}),Object(b.jsx)(E.a,{item:!0,xs:6,children:Object(b.jsx)("center",{children:Object(b.jsx)("h1",{style:{marginLeft:"10px"},children:"Write reviews based on experience to help other students choose their classes."})})})]}),Object(b.jsxs)(E.a,{container:!0,direction:"column",alignItems:"center",justify:"center",spacing:0,style:{marginTop:"10px",minHeight:"500px"},children:[Object(b.jsx)(E.a,{item:!0,xs:6,children:Object(b.jsx)("center",{children:Object(b.jsx)("h1",{children:"New things are coming soon, sign up to stay in the loop"})})}),Object(b.jsx)(I.a,{variant:"contained",disableElevation:!0,style:{borderRadius:25,backgroundColor:"white",color:"#FF7F50",fontSize:17,fontWeight:"bold"},onClick:h,children:"sign up now"})]})]})};var me=Object(c.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,isVerifying:e.auth.isVerifying}}))((function(e){var t=e.isAuthenticated,n=e.isVerifying;return Object(b.jsxs)(s.d,{children:[Object(b.jsx)(je,{exact:!0,path:"/dashboard",component:le,isAuthenticated:t,isVerifying:n}),Object(b.jsx)(s.b,{exact:!0,path:"/",component:fe}),Object(b.jsx)(s.b,{exact:!0,path:"/login",component:A}),Object(b.jsx)(s.b,{exact:!0,path:"/signup",component:F}),Object(b.jsx)(s.b,{exact:!0,path:"/forgotpassword",component:D})]})})),pe=n(44),ve=n(88),ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoggingIn:!1,isLoggingOut:!1,isVerifying:!1,loginError:!1,logoutError:!1,isAuthenticated:!1,user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(ue.a)(Object(ue.a)({},e),{},{isLoggingIn:!0,loginError:!1});case g:return Object(ue.a)(Object(ue.a)({},e),{},{isLoggingIn:!1,isAuthenticated:!0,user:t.user});case O:return Object(ue.a)(Object(ue.a)({},e),{},{isLoggingIn:!1,isAuthenticated:!1,loginError:!0});case x:return Object(ue.a)(Object(ue.a)({},e),{},{isLoggingOut:!0,logoutError:!1});case f:return Object(ue.a)(Object(ue.a)({},e),{},{isLoggingOut:!1,isAuthenticated:!1,user:{}});case m:return Object(ue.a)(Object(ue.a)({},e),{},{isLoggingOut:!1,logoutError:!0});case p:return Object(ue.a)(Object(ue.a)({},e),{},{isVerifying:!0,verifyingError:!1});case v:return Object(ue.a)(Object(ue.a)({},e),{},{isVerifying:!1});default:return e}},we=Object(pe.c)({auth:ye});var Se=function(e){var t=Object(pe.d)(we,e,Object(pe.a)(ve.a));return t.dispatch(C()),t}();var Ce=function(){return Object(b.jsx)(c.a,{store:Se,children:Object(b.jsx)(o.a,{children:Object(b.jsx)(me,{})})})},Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,175)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};a.a.render(Object(b.jsx)(Ce,{}),document.getElementById("root")),Ee()}},[[113,1,2]]]);
//# sourceMappingURL=main.9208618c.chunk.js.map