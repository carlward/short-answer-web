(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/correct.8a6a828f.svg"},22:function(e,t,a){e.exports=a(42)},28:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(17),l=a.n(r),o=(a(28),a(2)),c=a(3),i=a(4),u=a(6),d=a(5),m=a(7),h=function(e){var t="form-input";return e.touched&&!e.valid&&(t="form-input input-error"),s.a.createElement("div",{className:"form-group"},s.a.createElement("textarea",Object.assign({},e,{className:t})))},p=function(e){var t=e.metric,a=e.name;return s.a.createElement("tr",null,s.a.createElement("td",null,a),s.a.createElement("td",null,t))},f=function(e){var t=[],a=e.estimScore;return t.push(s.a.createElement(p,{metric:a,name:"Score",key:a})),e.scoreProbs.forEach(function(e){return t.push(s.a.createElement(p,{metric:e[1].toPrecision(4),name:e[0],key:e[0]}))}),s.a.createElement("table",{className:e.className},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Metric"),s.a.createElement("th",null,"Value"))),s.a.createElement("tbody",null,t))},v=function(e){return s.a.createElement("div",{className:"result-table"},s.a.createElement(f,{estimScore:e.estimScore,scoreProbs:e.scoreProbs,className:"result-table"}))},b="https://8wplgcc305.execute-api.us-west-2.amazonaws.com/prod/score-answers",E=Object({NODE_ENV:"production",PUBLIC_URL:"/short-answer-web",REACT_APP_SHORT_ANSWER_INFERENCE_API_KEY:"WIEnH8bkkL6RHTi0VvJJg6jzhiw1vWaL2PDV6ClR"}).SHORT_ANSWER_INFERENCE_API_KEY,w=function(e,t){return e.length>=t.minLength&&e.length<=t.maxLength},S=function(e){return""!==e.trim()},g=function(e,t){var a=!0;for(var n in t)switch(n){case"length":a=a&&w(e,t[n]);break;case"isRequired":a=a&&S(e);break;default:a=!0}return a},A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.value,s=t.name,r=Object(o.a)({},a.state.formInputs),l=Object(o.a)({},r[s]);l.value=n,l.touched=!0,l.valid=g(n,l.validationRules),r[s]=l;var c=!0;for(var i in r)c=c&&r[i].valid;a.setState({formInputs:r,isValid:c})},a.handleSubmit=function(){var e={};for(var t in a.state.formInputs)e[t]=a.state.formInputs[t].value;var n={seq:[e.studentAnswer],refSeq:[e.refAnswer]};a.postData(b,n).then(function(e){a.setState({estimScore:e.data[0].estimScore,scoreProbs:Object.entries(e.data[0].scoreProbs),isSubmitted:!0})}).catch(console.log),console.log(a.state)},a.postData=function(e,t){return fetch(e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","x-api-key":E},body:JSON.stringify(t)}).then(function(e){return e.json()})},a.state={isValid:!1,isSubmitted:!1,estimScore:1,scoreProbs:[],formInputs:{studentAnswer:{value:"",valid:!1,placeholder:"Enter student answer",validationRules:{length:{minLength:5,maxLength:500},isRequired:!0},touched:!1},refAnswer:{value:"",valid:!1,placeholder:"Enter reference answer",validationRules:{length:{minLength:5,maxLength:500},isRequired:!0},touched:!1}}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App-AnswerBoxes"},s.a.createElement("label",{htmlFor:"studentAnswer",className:"studentAnswer"},"Student Answer"),s.a.createElement(h,{name:"studentAnswer",placeholder:this.state.formInputs.studentAnswer.placeholder,value:this.state.formInputs.studentAnswer.value,onChange:this.handleChange,touched:this.state.formInputs.studentAnswer.touched,valid:this.state.formInputs.studentAnswer.valid}),s.a.createElement("label",{htmlFor:"studentAnswer",className:"refAnswer"},"Reference Answer"),s.a.createElement(h,{name:"refAnswer",placeholder:this.state.formInputs.refAnswer.placeholder,value:this.state.formInputs.refAnswer.value,onChange:this.handleChange,touched:this.state.formInputs.refAnswer.touched,valid:this.state.formInputs.refAnswer.valid}),s.a.createElement("button",{onClick:this.handleSubmit,disabled:!this.state.isValid},"Submit"),this.state.isSubmitted&&s.a.createElement("label",{htmlFor:"scoreResult",className:"result"},"Result"),this.state.isSubmitted&&s.a.createElement(v,{name:"scoreResult",estimScore:this.state.estimScore,scoreProbs:this.state.scoreProbs}))}}]),t}(s.a.Component),N=a(9),C=a(18),O=a(21),j=a(10),I=a(19),R=a.n(I),k=a(20),D=a.n(k),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState({csvfile:e.target.files[0],done:!1})},a.importCSV=function(){R.a.parse(a.state.csvfile,{complete:a.updateData,header:!0})},a.updateData=function(e){var t=e.data;a.props.uploadCallBack(a.props.name,t),a.setState({done:!0})},a.state={csvfile:void 0,done:!1},a.updateData=a.updateData.bind(Object(j.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"csv-upload"},s.a.createElement("label",{htmlFor:"studentCSV",className:"csv-label"},this.props.label),s.a.createElement("input",{type:"file",className:"csv-file",ref:function(t){e.filesInput=t},name:this.props.name,placeholder:null,onChange:this.handleChange}),s.a.createElement("div",{className:"csv-upload-container"},s.a.createElement("button",{className:"csv-upload-button",onClick:this.importCSV,disabled:void 0===this.state.csvfile},"upload"),s.a.createElement("img",{className:"upload-icon",alt:"done",src:D.a,style:{opacity:this.state.done?1:0}})))}}]),t}(s.a.Component),P="https://8wplgcc305.execute-api.us-west-2.amazonaws.com/prod/score-answers",V=Object({NODE_ENV:"production",PUBLIC_URL:"/short-answer-web",REACT_APP_SHORT_ANSWER_INFERENCE_API_KEY:"WIEnH8bkkL6RHTi0VvJJg6jzhiw1vWaL2PDV6ClR"}).SHORT_ANSWER_INFERENCE_API_KEY,y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).uploadCallBack=function(t,a){var n=Object(o.a)({},e.state.data);n[t]=a,e.setState({data:n,isValid:void 0!==n.refData&&void 0!==n.studentData})},e.combineData=function(e,t){var a=[],n=t.reduce(function(e,t){return Object(o.a)({},e,Object(N.a)({},t.answerId,t.refAnswer))},{});return e.forEach(function(e){return a.push({answerId:e.answerId,studentSeq:e.studentAnswer,refSeq:n[e.answerId]})}),a},e.postData=function(e,t){return fetch(e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","x-api-key":V},body:JSON.stringify(t)}).then(function(e){return e.json()})},e.handleSubmit=function(){e.setState({loading:!0,scored:!1});var t=Object(o.a)({},e.state.data),a=t.studentData,n=e.combineData(t.studentData,t.refData),s={seq:n.map(function(e){return e.studentSeq}),refSeq:n.map(function(e){return e.refSeq})};e.postData(P,s).then(function(n){n.data.forEach(function(e,t){var n=a[t];n.score=e.estimScore,a[t]=n}),t.outputData=a,e.setState({data:t,scored:!0,loading:!1})}).catch(function(t){e.setState({loading:!1}),console.log(t)})},e.state={data:{refData:void 0,studentData:void 0,outputData:void 0},scored:!1,loading:!1},e.isValid=!1,e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"csv-files"},s.a.createElement(_,{name:"studentData",label:"Student CSV",uploadCallBack:this.uploadCallBack}),s.a.createElement(_,{name:"refData",label:"Reference CSV",uploadCallBack:this.uploadCallBack}),s.a.createElement("br",null),s.a.createElement("div",{className:"csv-submit"},s.a.createElement("button",{className:"csv-submit-button",onClick:this.handleSubmit,disabled:!this.state.isValid},"Submit"),s.a.createElement(O.a,{sizeUnit:"px",size:12,color:"#36D7B7",loading:this.state.loading})),s.a.createElement("div",{className:"csv-Output"},this.state.scored&&s.a.createElement(C.CSVLink,{data:this.state.data.outputData,filename:"scored_answers.csv",className:"App-link",target:"_blank"},"Download scores")))}}]),t}(s.a.Component);a(41);var L=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("h2",null,"Automated Short Answer Grader")),s.a.createElement("h3",null,"Grader Demo"),s.a.createElement(A,null),s.a.createElement("br",null),s.a.createElement("h3",null,"CSV Upload"),s.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.7e0dd584.chunk.js.map