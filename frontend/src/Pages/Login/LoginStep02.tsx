import { useState } from 'react'
import { Button, TextField } from '../../components/common'

const LoginStep02 = ({
  handleNext,
}: {
  handleNext?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  const [email, setEmail] = useState('')
  const [loadingFlag, setLoadingFlag] = useState(false)

  return (
    <>
      <TextField
        placeholder="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="absolute bottom-[20px] w-[auto] left-[20px] right-[20px]">
        {loadingFlag ? (
          <button
            className="w-full h-[56px] rounded-[12px] mt-[16px] bg-[#191C20] flex items-center justify-center"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="animate-spin h-[25px] w-[24px]"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M22.82 12C23.7478 12 24.5121 11.2442 24.3826 10.3254C24.026 7.79432 22.8672 5.42693 21.054 3.58404C18.8457 1.33948 15.8436 0.0528281 12.6953 0.00158892C9.54691 -0.0496503 6.50456 1.13863 4.22435 3.31014C1.94415 5.48165 0.60882 8.4624 0.506355 11.6095C0.40389 14.7566 1.5425 17.8179 3.67662 20.1331C5.81074 22.4484 8.76936 23.832 11.9144 23.9857C15.0594 24.1394 18.1388 23.0507 20.4885 20.9546C22.4177 19.2335 23.728 16.9465 24.2485 14.444C24.4375 13.5356 23.724 12.7316 22.7981 12.6713C21.8723 12.6109 21.0888 13.3206 20.8507 14.2174C20.4199 15.8395 19.5222 17.3139 18.2517 18.4473C16.56 19.9565 14.3428 20.7403 12.0784 20.6297C9.81394 20.5191 7.68374 19.5228 6.14717 17.8559C4.6106 16.1889 3.7908 13.9848 3.86458 11.7188C3.93835 9.45293 4.89979 7.30679 6.54153 5.7433C8.18328 4.17981 10.3738 3.32425 12.6406 3.36114C14.9074 3.39804 17.0689 4.32442 18.6589 5.94051C19.853 7.15417 20.6529 8.68377 20.9772 10.3305C21.1565 11.2409 21.8922 12 22.82 12Z"
                fill="url(#paint0_angular_170_7550)"
              />
              <defs>
                <radialGradient
                  id="paint0_angular_170_7550"
                  cx="0"
                  cy="0"
                  r="2"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(12.5 12) scale(12.5)"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#657080" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </button>
        ) : (
          <Button
            title="Reset Password"
            disabled={email === ''}
            onClick={() => setLoadingFlag(true)}
          />
        )}
      </div>
    </>
  )
}

export default LoginStep02
