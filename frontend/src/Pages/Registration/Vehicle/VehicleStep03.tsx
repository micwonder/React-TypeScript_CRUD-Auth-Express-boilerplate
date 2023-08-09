import { useState } from 'react'
import { Button, TextField } from '../../../components/common'

const VehicleStep03 = ({
  handleNext,
}: {
  handleNext?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  const [vehicleMake, setVehicleMake] = useState('')
  const [vehicleModel, setVehicleModel] = useState('')

  return (
    <div>
      <TextField
        placeholder="Vehicle Make"
        value={vehicleMake}
        onChange={(e) => setVehicleMake(e.target.value)}
      />
      <TextField
        placeholder="Vehicle Model"
        value={vehicleModel}
        onChange={(e) => setVehicleModel(e.target.value)}
      />
      <div className="absolute bottom-[20px] w-[auto] left-[20px] right-[20px]">
        <Button
          title="Continue"
          disabled={vehicleMake === '' || vehicleModel === ''}
          onClick={handleNext}
        />
      </div>
    </div>
  )
}

export default VehicleStep03
