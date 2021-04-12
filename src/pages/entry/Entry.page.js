import React,{useState} from 'react'
import{ Jumbotron } from 'react-bootstrap'
import './entry.style.css'
import LoginForm from '../../components/login/Login.comp'
import ResetPassword from '../../components/password-reset/PasswordReset.comp'

export default function Entry() {
  const [formLoad, setFormLoad] = useState("login")
  
  const handleOnResetSubmit = e => {
    e.preventDefault()
  }
  const formSwitcher = frmType => {
    setFormLoad(frmType);
  }

  const renderedPage = () => {
    if (formLoad === "login") {
      return (
        <LoginForm
          formSwitcher={formSwitcher}
        />
      )
    } else {
      return (
        <ResetPassword
          formSwitcher={formSwitcher}
          handleOnResetSubmit={handleOnResetSubmit}
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
