(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var a,s=i(10),n=i.n(s),r=(i(17),i(12)),l=i(4),c=i(5),d=i(8),o=i(7),m=i(1),h=i.n(m),b=(i(18),i(3)),u=(i(19),i(20),i(0)),j=function(e){var t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)("figure",{className:"image is-4by3",children:Object(u.jsx)("img",{src:a,alt:"Film logo"})})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsxs)("div",{className:"media",children:[Object(u.jsx)("div",{className:"media-left",children:Object(u.jsx)("figure",{className:"image is-48x48",children:Object(u.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(u.jsx)("div",{className:"media-content",children:Object(u.jsx)("p",{className:"title is-8",children:t})})]}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("p",{children:i}),Object(u.jsx)("a",{href:s,children:"IMDB"})]})]})]})},p=function(e){var t=e.movies;return Object(u.jsx)("div",{className:"movies",children:t.map((function(e){return Object(u.jsx)(j,Object(b.a)({},e),e.imdbId)}))})},g=i(6),v=i(2),f=i.n(v);i(22);!function(e){e.title="title",e.description="description",e.imgUrl="imgUrl",e.imdbUrl="imdbUrl",e.imdbId="imdbId"}(a||(a={}));var w=function(e){Object(d.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={newMovie:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},title:!1,description:!1,imgUrl:!1,imdbUrl:!1,imdbId:!1,formValid:!0},e.handleChange=function(t){e.setState((function(e){return{newMovie:Object(b.a)(Object(b.a)({},e.newMovie),{},Object(g.a)({},t.target.name,t.target.value))}}))},e.handleBlur=function(t){var i=e.state.newMovie,s=i.title,n=i.description,r=i.imgUrl,l=i.imdbUrl,c=i.imdbId;switch(t.target.name){case a.title:e.setState({title:""===s});break;case a.description:e.setState({description:""===n});break;case a.imgUrl:e.setState({imgUrl:r===r.replace(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,"")});break;case a.imdbUrl:e.setState({imdbUrl:l===l.replace(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,"")});break;case a.imdbId:e.setState({imdbId:""===c})}e.setState((function(e){return{formValid:!(Object.values(e.newMovie).every((function(e){return""!==e}))&&Object.values(e).splice(1,5).every((function(e){return!1===e})))}}))},e.handlerFocus=function(t){switch(t.target.name){case a.title:e.setState({title:!1});break;case a.description:e.setState({description:!1});break;case a.imgUrl:e.setState({imgUrl:!1});break;case a.imdbUrl:e.setState({imdbUrl:!1});break;case a.imdbId:e.setState({imdbId:!1})}},e.clearForm=function(){e.setState({newMovie:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},formValid:!0})},e.handleSubmit=function(t){t.preventDefault(),e.props.onAdd(e.state.newMovie),e.clearForm()},e.handleKeyPress=function(e){var t=e.key,i=e.target.value;" "!==t||i.trim()||e.preventDefault()},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.newMovie,t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl,n=e.imdbId;return Object(u.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(u.jsx)("h1",{className:"form__title",children:"Add new movie"}),this.state.title&&Object(u.jsx)("div",{className:"error",children:"required field"}),Object(u.jsx)("input",{type:"text",name:"title",className:f()("form__item",{invalid:this.state.title}),placeholder:"Title",value:t,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handlerFocus,onKeyPress:this.handleKeyPress}),this.state.description&&Object(u.jsx)("div",{className:"error",children:"required field"}),Object(u.jsx)("input",{type:"text",name:"description",className:f()("form__item",{invalid:this.state.description}),placeholder:"Description",value:i,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handlerFocus,onKeyPress:this.handleKeyPress}),this.state.imgUrl&&Object(u.jsx)("div",{className:"error",children:"required field - enter url"}),Object(u.jsx)("input",{type:"text",name:"imgUrl",className:f()("form__item",{invalid:this.state.imgUrl}),placeholder:"imgUrl",value:a,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handlerFocus,onKeyPress:this.handleKeyPress}),this.state.imdbUrl&&Object(u.jsx)("div",{className:"error",children:"required field - enter url"}),Object(u.jsx)("input",{type:"text",name:"imdbUrl",className:f()("form__item",{invalid:this.state.imdbUrl}),placeholder:"IMDB URL",value:s,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handlerFocus,onKeyPress:this.handleKeyPress}),this.state.imdbId&&Object(u.jsx)("div",{className:"error",children:"required field"}),Object(u.jsx)("input",{type:"text",name:"imdbId",className:f()("form__item",{invalid:this.state.imdbId}),placeholder:"imdbId",value:n,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handlerFocus,onKeyPress:this.handleKeyPress}),Object(u.jsx)("button",{type:"submit",disabled:this.state.formValid,className:"form__button",children:"Add movie"})]})}}]),i}(m.Component),O=i(11),M=function(e){Object(d.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(l.a)(this,i);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={movies:O},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(r.a)(e.movies),[t])}}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("div",{className:"page-content",children:Object(u.jsx)(p,{movies:e})}),Object(u.jsx)("div",{className:"sidebar",children:Object(u.jsx)(w,{onAdd:this.addMovie})})]})}}]),i}(h.a.Component);n.a.render(Object(u.jsx)(M,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.68eed1a3.chunk.js.map