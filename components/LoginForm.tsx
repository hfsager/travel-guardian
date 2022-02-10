import {useState} from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    

   const onChangeEmail = (e:any) => {
       setEmail(e.target.value)
   }
// const onChangePassword = (e:any) => {
//     setPassword(e.target.value)
// }
   const handleSubmit = (e:any) => {
    if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) && email === ''){
        console.log('true')
      } else {
          console.log("false")
        setIsEmailValid(false)
      }


      }
 
   return(
       <>
       <input type='text' name= 'email' value={email} onChange={onChangeEmail} placeholder='email'/>
       {!isEmailValid && <p>Email is invalid</p> }
       {/* <input type='text' name= 'password' value={password} onChange={onChangePassword} placeholder='*******'/>
       {!isPasswordValid && <p>Password is invalid</p>} */}
       <button onClick={handleSubmit} type='submit'>Login</button>
       </>
   )
}


export default LoginForm;