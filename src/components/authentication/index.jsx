import SignInForm from "../signin-component"
import SignUpForm from "../signupform-component"
import "./index.css"
const Authentication=()=>{
  return(
    <div className="auth">
      <SignInForm/>
     <SignUpForm/>
    </div>
  )
}
export default Authentication