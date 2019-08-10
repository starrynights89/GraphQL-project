exports.ids=[2],exports.modules={62:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t.n(a),i=t(5),o=t.n(i),l=t(6),u=t.n(l),s=t(7),c=t.n(s),m=t(23),p=t.n(m),g=t(8),h=t.n(g),d=t(9),f=t.n(d),v=t(0),E=t.n(v),w=t(63),y=t(50),S=t.n(y),C=t(12),k=t(51),b=t.n(k);function L(){var e=S()(["\n  mutation login($email : String!, $password : String!) {\n    login(email : $email, password : $password) {\n      token\n    }\n }"]);return L=function(){return e},e}var $=b()(L()),x=function(e){function n(){return r()(this,n),u()(this,c()(n).apply(this,arguments))}return h()(n,e),o()(n,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.changeLoginState;return E.a.createElement(C.Mutation,{update:function(e,n){var a=n.data.login;a.token&&(localStorage.setItem("jwt",a.token),t(!0))},mutation:$},function(e,t){var a=t.loading,r=t.error;return E.a.Children.map(n,function(n){return E.a.cloneElement(n,{login:e,loading:a,error:r})})})}}]),n}(v.Component);function N(){var e=S()(["\n  mutation signup($email : String!, $password : String!, $username : String!) {\n    signup(email : $email, password : $password, username : $username) {\n    token\n  }\n}"]);return N=function(){return e},e}var A=b()(N()),M=function(e){function n(){return r()(this,n),u()(this,c()(n).apply(this,arguments))}return h()(n,e),o()(n,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.changeLoginState;return E.a.createElement(C.Mutation,{update:function(e,n){var a=n.data.signup;a.token&&(localStorage.setItem("jwt",a.token),t(!0))},mutation:A},function(e,t){var a=t.loading,r=t.error;return E.a.Children.map(n,function(n){return E.a.cloneElement(n,{signup:e,loading:a,error:r})})})}}]),n}(v.Component);t.d(n,"default",function(){return I});var j=function(e){function n(){var e,t;r()(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return t=u()(this,(e=c()(n)).call.apply(e,[this].concat(i))),f()(p()(t),"state",{email:"",password:""}),f()(p()(t),"login",function(e){e.preventDefault(),t.props.login({variables:{email:t.state.email,password:t.state.password}})}),t}return h()(n,e),o()(n,[{key:"render",value:function(){var e=this,n=this.props.error;return E.a.createElement("div",{className:"login"},E.a.createElement("form",{onSubmit:this.login},E.a.createElement("label",null,"Email"),E.a.createElement("input",{type:"text",onChange:function(n){return e.setState({email:n.target.value})}}),E.a.createElement("label",null,"Password"),E.a.createElement("input",{type:"password",onChange:function(n){return e.setState({password:n.target.value})}}),E.a.createElement("input",{type:"submit",value:"Login"})),n&&E.a.createElement(w.a,null,E.a.createElement("p",null,"There was an error logging in!")))}}]),n}(v.Component),D=function(e){function n(){var e,t;r()(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return t=u()(this,(e=c()(n)).call.apply(e,[this].concat(i))),f()(p()(t),"state",{email:"",password:"",username:""}),f()(p()(t),"login",function(e){e.preventDefault(),t.props.signup({variables:{email:t.state.email,password:t.state.password,username:t.state.username}})}),t}return h()(n,e),o()(n,[{key:"render",value:function(){var e=this,n=this.props.error;return E.a.createElement("div",{className:"login"},E.a.createElement("form",{onSubmit:this.login},E.a.createElement("label",null,"Email"),E.a.createElement("input",{type:"text",onChange:function(n){return e.setState({email:n.target.value})}}),E.a.createElement("label",null,"Username"),E.a.createElement("input",{type:"text",onChange:function(n){return e.setState({username:n.target.value})}}),E.a.createElement("label",null,"Password"),E.a.createElement("input",{type:"password",onChange:function(n){return e.setState({password:n.target.value})}}),E.a.createElement("input",{type:"submit",value:"Sign up"})),n&&E.a.createElement(w.a,null,E.a.createElement("p",null,"There was an error logging in!")))}}]),n}(v.Component),I=function(e){function n(){var e,t;r()(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return t=u()(this,(e=c()(n)).call.apply(e,[this].concat(i))),f()(p()(t),"state",{showLogin:!0}),t}return h()(n,e),o()(n,[{key:"render",value:function(){var e=this,n=this.props.changeLoginState,t=this.state.showLogin;return E.a.createElement("div",{className:"authModal"},t&&E.a.createElement("div",null,E.a.createElement(x,{changeLoginState:n},E.a.createElement(j,null)),E.a.createElement("a",{onClick:function(){return e.setState({showLogin:!1})}},"Want to sign up? Click here")),!t&&E.a.createElement("div",null,E.a.createElement(M,{changeLoginState:n},E.a.createElement(D,null)),E.a.createElement("a",{onClick:function(){return e.setState({showLogin:!0})}},"Want to login? Click here")))}}]),n}(v.Component)},63:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var a=t(4),r=t.n(a),i=t(5),o=t.n(i),l=t(6),u=t.n(l),s=t(7),c=t.n(s),m=t(8),p=t.n(m),g=t(0),h=t.n(g),d=function(e){function n(){return r()(this,n),u()(this,c()(n).apply(this,arguments))}return p()(n,e),o()(n,[{key:"render",value:function(){var e=this.props.children;return h.a.createElement("div",{className:"error message"},e)}}]),n}(g.Component)}};