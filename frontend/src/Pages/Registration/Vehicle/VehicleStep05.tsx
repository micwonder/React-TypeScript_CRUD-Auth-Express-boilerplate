import { useState } from 'react'
import { Button, TextField } from '../../../components/common'

const VehicleStep05 = ({
  handleNext,
}: {
  handleNext?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  const [dlNumber, setDlNumber] = useState('')

  return (
    <>
      <TextField
        placeholder="Driver's license number"
        value={dlNumber}
        onChange={(e) => setDlNumber(e.target.value)}
      />
      <div className="absolute bottom-[20px] w-[auto] left-[20px] right-[20px]">
        <Button
          title="Continue"
          disabled={dlNumber === ''}
          onClick={handleNext}
        />
      </div>
    </>
  )
}

export default VehicleStep05
