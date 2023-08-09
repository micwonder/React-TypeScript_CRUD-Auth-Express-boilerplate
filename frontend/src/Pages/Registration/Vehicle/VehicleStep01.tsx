import { useState } from 'react'
import { Button, TextField } from '../../../components/common'

const VehicleStep01 = ({
  handleNext,
}: {
  handleNext?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div>
      <TextField
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <div className="absolute bottom-[20px] w-[auto] left-[20px] right-[20px]">
        <Button
          title="Continue"
          disabled={firstName === '' || lastName === ''}
          onClick={handleNext}
        />
      </div>
    </div>
  )
}

export default VehicleStep01
