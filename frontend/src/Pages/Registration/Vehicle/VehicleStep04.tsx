import { useState } from 'react'
import { Button, TextField } from '../../../components/common'

const VehicleStep04 = ({
  handleNext,
}: {
  handleNext?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  const [vehicleVIN, setVehicleVIN] = useState('')
  const [insuranceCarrier, setInsuranceCarrier] = useState('')

  return (
    <div>
      <TextField
        placeholder="Vehicle VIN"
        value={vehicleVIN}
        onChange={(e) => setVehicleVIN(e.target.value)}
      />
      <TextField
        placeholder="Insurance carrier"
        value={insuranceCarrier}
        onChange={(e) => setInsuranceCarrier(e.target.value)}
      />
      <div className="absolute bottom-[20px] w-[auto] left-[20px] right-[20px]">
        <Button
          title="Continue"
          disabled={vehicleVIN === '' || insuranceCarrier === ''}
          onClick={handleNext}
        />
      </div>
    </div>
  )
}

export default VehicleStep04
