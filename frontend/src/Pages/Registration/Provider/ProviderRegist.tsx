import { BiArrowBack } from 'react-icons/bi'
import { CircleButton, Stepper } from '../../../components/common'
import { useState } from 'react'
import RegistFinal from '../RegistFinal'
import ProviderStep01 from './ProviderStep01'
import ProviderStep02 from './ProviderStep02'

const ProviderRegist = () => {
  const [step, setStep] = useState(1)
  return (
    <div className="p-[20px]">
      <CircleButton
        icon={<BiArrowBack />}
        onClick={() => setStep((prvStep) => (prvStep === 1 ? 1 : prvStep - 1))}
      />
      {step < 3 ? (
        <>
          <div className="flex justify-center">
            <Stepper step={step} count={2} />
          </div>
          <h3 className="bold text-center text-[26px] m-[24px] mb-[16px]">
            Register as a Provider
          </h3>
          <p className="text-[#657080] text-[18px] mb-[32px] text-center">
            Rider find routes fast and for a price that fits your budget
          </p>
        </>
      ) : null}
      {step === 1 && <ProviderStep01 handleNext={() => setStep(2)} />}
      {step === 2 && <ProviderStep02 handleNext={() => setStep(3)} />}
      {step === 3 && <RegistFinal />}
    </div>
  )
}

export default ProviderRegist
