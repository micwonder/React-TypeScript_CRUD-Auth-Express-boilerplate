import { BiArrowBack } from 'react-icons/bi'
import { CircleButton, Stepper } from '../../../components/common'

import { useState } from 'react'
import VehicleStep01 from './VehicleStep01'
import VehicleStep02 from './VehicleStep02'
import VehicleStep03 from './VehicleStep03'
import VehicleStep04 from './VehicleStep04'
import VehicleStep05 from './VehicleStep05'
import RegistFinal from '../RegistFinal'

const VehicleRegist = () => {
  const [step, setStep] = useState(1)
  return (
    <div className="p-[20px]">
      <CircleButton
        icon={<BiArrowBack />}
        onClick={() => setStep((prvStep) => (prvStep === 1 ? 1 : prvStep - 1))}
      />
      {step < 6 ? (
        <>
          <div className="flex justify-center">
            <Stepper step={step} count={5} />
          </div>
          <h3 className="bold text-center text-[26px] m-[24px] mb-[16px]">
            Register as a Vehicle
          </h3>
          <p className="text-[#657080] text-[18px] mb-[32px] text-center">
            Rider find routes fast and for a price that fits your budget
          </p>
        </>
      ) : null}
      {step === 1 && <VehicleStep01 handleNext={() => setStep(2)} />}
      {step === 2 && <VehicleStep02 handleNext={() => setStep(3)} />}
      {step === 3 && <VehicleStep03 handleNext={() => setStep(4)} />}
      {step === 4 && <VehicleStep04 handleNext={() => setStep(5)} />}
      {step === 5 && <VehicleStep05 handleNext={() => setStep(6)} />}
      {step === 6 && <RegistFinal />}
    </div>
  )
}

export default VehicleRegist
