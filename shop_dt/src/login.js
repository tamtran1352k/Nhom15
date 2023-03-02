// import React from "react";
// import "./login.css";
// import Input from "./components/Input";

// class Login extends React.Component{
//     state ={messge: "",};
//     userNameRef=React.createRef();
//     passwordRef = React.createRef();
//     formSubmitHandler=(e)=>{
//         e.preventDefault();
//         const username=this.userNameRef.current.value;
//         const password = this.passwordRef.current.value;
//         // console.log(username,password);
//         if(username === "admin" && password === "123456"){
//             this.setState({messge: "Good"})
//         }else{
//             this.setState({messge: "bad"})
//         }
//     };
//     componentDidMount(){
//         this.userNameRef.current.focus();
//     }
//     render(){
//         return(
//             <div className="container h-100">
//             <div className="row justify-content-center h-100 align-items-center">
//               <div className="col-sm-8 col-lg-5">
//                 <div className="card bg-primary">
//                   <div className="card-header text-white">
//                     <h4 className="card-title mb-0"><i className="bi-grid-3x3-gap-fill" /> Login</h4>
//                   </div>
//                   <div className="card-body bg-white rounded-bottom">
//                     <p className="text-center text-danger">{this.state.messge}</p>
//                     <form onSubmit={this.formSubmitHandler}>
//                       <Input inputRef={this.userNameRef} label = "UserName" id="txtUserName" autoComplete = "off" maxLength="20"/>
//                       <Input inputRef={this.passwordRef} label = "Password" id="txtPass" type="password" maxLength="20"/>
//                       <div className="row">
//                         <div className="offset-sm-3 col-auto">
//                           <button type="submit" className="btn btn-primary">Sign in</button>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//     }
// }
// export default Login;