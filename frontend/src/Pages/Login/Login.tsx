import { BiArrowBack } from 'react-icons/bi'
import { CircleButton, Stepper } from '../../components/common'
import { useState } from 'react'
import LoginStep01 from './LoginStep01'
import LoginStep02 from './LoginStep02'
import LoginFinal from './LoginFinal'

const Login = () => {
  const [step, setStep] = useState(1)
  return (
    <div className="p-[20px]">
      <CircleButton
        icon={<BiArrowBack />}
        onClick={() => setStep((prvStep) => (prvStep === 1 ? 1 : prvStep - 1))}
      />
      {step === 1 ? (
        <>
          <h3 className="bold text-center text-[26px] m-[24px]">Log In</h3>
        </>
      ) : step < 3 ? (
        <>
          <h3 className="bold text-center text-[26px] m-[24px] mb-[16px]">
            Reset your password
          </h3>
          <p className="text-[#657080] text-[18px] mb-[32px] text-center">
            We&apos;ll confirm your account by sending you a link to the email
            address below
          </p>
        </>
      ) : (
        <>
          <h3 className="bold text-center text-[26px] m-[24px] mb-[16px]">
            Check your inbox
          </h3>
          <p className="text-[#657080] text-[18px] mb-[32px] text-center">
            We sent you a link to reset your password
          </p>
        </>
      )}
      {step === 1 && (
        <>
          <LoginStep01 />
          <p
            className="text-[#657080] text-[18px] text-center items-center"
            onClick={() => setStep(2)}
          >
            Forgot password?
          </p>
        </>
      )}
      {step === 2 && <LoginStep02 handleNext={() => setStep(3)} />}
      {step === 3 && <LoginFinal />}
    </div>
  )
}

export default Login
