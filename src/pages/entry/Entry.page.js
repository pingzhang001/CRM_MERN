import React,{useState} from 'react'
import{ Jumbotron } from 'react-bootstrap'
import './entry.style.css'
import LoginForm from '../../components/login/Login.comp'
import ResetPassword from '../../components/password-reset/PasswordReset.comp'

export default function Entry() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login")

  const handleOnChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value)
        break;
      
      case 'password':
        setPassword(value)
        break;
    
      default:
        break;
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    if (!email || !password) {
      return alert("Fill up the login form!")
    }
    console.log(email, password)
  }

  const handleOnResetSubmit = e => {
    e.preventDefault()
    if (!email) {
      return alert("Please enter the email!")
    }
    console.log(email, password)
  }

  const formSwitcher = frmType => {
    setFormLoad(frmType);
  }

  const renderedPage = () => {
    if (formLoad === "login") {
      return (
        <LoginForm
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          formSwitcher={formSwitcher}
          email={email}
          pass={password}
        />
      )
    } else {
      return (
        <ResetPassword
          handleOnChange={handleOnChange}
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitcher={formSwitcher}
          email={email}
        />
      )
    }
  }

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {/* {formLoad === "login" &&
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        }
        {formLoad === "reset" &&
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        } */}
        {renderedPage()}
        
      </Jumbotron>
    </div>
  )
}
