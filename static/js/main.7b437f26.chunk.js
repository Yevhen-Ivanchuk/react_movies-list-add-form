(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var a=i(10),s=i.n(a),n=(i(17),i(12)),r=i(4),l=i(5),c=i(8),o=i(7),d=i(1),m=i.n(d),h=(i(18),i(3)),b=(i(19),i(20),i(0)),u=function(e){var t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:a,alt:"Film logo"})})}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)("div",{className:"media-left",children:Object(b.jsx)("figure",{className:"image is-48x48",children:Object(b.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(b.jsx)("div",{className:"media-content",children:Object(b.jsx)("p",{className:"title is-8",children:t})})]}),Object(b.jsxs)("div",{className:"content",children:[i,Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:s,children:"IMDB"})]})]})]})},j=function(e){var t=e.movies;return Object(b.jsx)("div",{className:"movies",children:t.map((function(e){return Object(b.jsx)(u,Object(h.a)({},e),e.imdbId)}))})},p=i(6),g=i(2),v=i.n(g),f=(i(22),function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={newMovie:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},title:!1,description:!1,imgUrl:!1,imdbUrl:!1,imdbId:!1,formValid:!0},e.handleChange=function(t){e.setState((function(e){return{newMovie:Object(h.a)(Object(h.a)({},e.newMovie),{},Object(p.a)({},t.target.name,t.target.value))}}))},e.handleBlur=function(t){var i=e.state.newMovie,a=i.title,s=i.description,n=i.imgUrl,r=i.imdbUrl,l=i.imdbId;switch(t.target.name){case"title":e.setState({title:""===a});break;case"description":e.setState({description:""===s});break;case"imgUrl":e.setState({imgUrl:n===n.replace(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,"")});break;case"imdbUrl":e.setState({imdbUrl:r===r.replace(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,"")});break;case"imdbId":e.setState({imdbId:""===l})}e.setState((function(e){return{formValid:!(Object.values(e.newMovie).every((function(e){return""!==e}))&&Object.values(e).splice(1,5).every((function(e){return!1===e})))}}))},e.handlerFocus=function(t){switch(t.target.name){case"title":e.setState({title:!1});break;case"description":e.setState({description:!1});break;case"imgUrl":e.setState({imgUrl:!1});break;case"imdbUrl":e.setState({imdbUrl:!1});break;case"imdbId":e.setState({imdbId:!1})}},e.clearForm=function(){e.setState({newMovie:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},formValid:!0})},e.handleSubmit=function(t){t.preventDefault(),e.props.onAdd(e.state.newMovie),e.clearForm()},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this.state.newMovie,t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl,n=e.imdbId;return Object(b.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(b.jsx)("h1",{className:"form__title",children:"Add new movie"}),this.state.title&&Object(b.jsx)("div",{className:"error",children:"required field"}),Object(b.jsx)("input",{type:"text",name:"title",className:v()("form__item",{invalid:this.state.title}),placeholder:"Title",value:t,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handlerFocus}),this.state.description&&Object(b.jsx)("div",{className:"error",children:"required field"}),Object(b.jsx)("input",{type:"text",name:"description",className:v()("form__item",{invalid:this.state.description}),placeholder:"Description",value:i,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handlerFocus}),this.state.imgUrl&&Object(b.jsx)("div",{className:"error",children:"required field - enter url"}),Object(b.jsx)("input",{type:"text",name:"imgUrl",className:v()("form__item",{invalid:this.state.imgUrl}),placeholder:"imgUrl",value:a,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handlerFocus}),this.state.imdbUrl&&Object(b.jsx)("div",{className:"error",children:"required field - enter url"}),Object(b.jsx)("input",{type:"text",name:"imdbUrl",className:v()("form__item",{invalid:this.state.imdbUrl}),placeholder:"imdbUrl",value:s,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handlerFocus}),this.state.imdbId&&Object(b.jsx)("div",{className:"error",children:"required field"}),Object(b.jsx)("input",{type:"text",name:"imdbId",className:v()("form__item",{invalid:this.state.imdbId}),placeholder:"imdbId",value:n,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handlerFocus}),Object(b.jsx)("button",{type:"submit",disabled:this.state.formValid,className:"form__button",children:"Add movie"})]})}}]),i}(d.Component)),w=i(11),O=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={movies:w},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(n.a)(e.movies),[t])}}))},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("div",{className:"page-content",children:Object(b.jsx)(j,{movies:e})}),Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(f,{onAdd:this.addMovie})})]})}}]),i}(m.a.Component);s.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.7b437f26.chunk.js.map