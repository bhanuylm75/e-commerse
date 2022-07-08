import SignInForm from "../signin-component"
import SignUpForm from "../signupform-component"
import "./index.css"
const Authentication=()=>{
  return(
    <div className="auth">
      <div className="con-sign">
      <SignInForm/>
      </div>
     <div>
     <SignUpForm/>
     </div>
    </div>
  )
}
export default Authentication