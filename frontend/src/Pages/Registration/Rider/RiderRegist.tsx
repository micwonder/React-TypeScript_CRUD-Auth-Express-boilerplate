import { BiArrowBack } from 'react-icons/bi'
import { CircleButton, Stepper } from '../../../components/common'
import RiderStep01 from './RiderStep01'
import RiderStep02 from './RiderStep02'
import RiderStep03 from './RiderStep03'
import { useState } from 'react'
import RegistFinal from '../RegistFinal'

const RiderRegist = () => {
  const [step, setStep] = useState(1)
  return (
    <div className="p-[20px]">
      <CircleButton
        icon={<BiArrowBack />}
        onClick={() => setStep((prvStep) => (prvStep === 1 ? 1 : prvStep - 1))}
      />
      {step < 4 ? (
        <>
          <div className="flex justify-center">
            <Stepper step={step} count={3} />
          </div>
          <h3 className="bold text-center text-[26px] m-[24px] mb-[16px]">
            Register as a Rider
          </h3>
          <p className="text-[#657080] text-[18px] mb-[32px] text-center">
            {step < 3
              ? 'Rider find routes fast and for a price that fits your budget'
              : step === 3
              ? 'Set pickup location'
              : ''}
          </p>
        </>
      ) : null}
      {step === 1 && <RiderStep01 handleNext={() => setStep(2)} />}
      {step === 2 && <RiderStep02 handleNext={() => setStep(3)} />}
      {step === 3 && <RiderStep03 handleNext={() => setStep(4)} />}
      {step === 4 && <RegistFinal />}
    </div>
  )
}

export default RiderRegist
