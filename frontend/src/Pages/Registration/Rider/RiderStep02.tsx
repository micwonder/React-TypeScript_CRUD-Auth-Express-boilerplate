import { useState } from 'react'
import { Button, TextField } from '../../../components/common'

const RiderStep02 = ({
  handleNext,
}: {
  handleNext?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  const [email, setEmail] = useState('')

  return (
    <>
      <TextField
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="absolute bottom-[20px] w-[auto] left-[20px] right-[20px]">
        <Button title="Continue" disabled={email === ''} onClick={handleNext} />
      </div>
    </>
  )
}

export default RiderStep02
