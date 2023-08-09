import { useState } from 'react'
import { Button, TextField } from '../../../components/common'

const SponsorStep01 = ({
  handleNext,
}: {
  handleNext?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  const [sponsor, setSponsor] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div>
      <TextField
        placeholder="Name of sponsor"
        value={sponsor}
        onChange={(e) => setSponsor(e.target.value)}
      />
      <TextField
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="absolute bottom-[20px] w-[auto] left-[20px] right-[20px]">
        <Button
          title="Continue"
          disabled={sponsor === '' || email === ''}
          onClick={handleNext}
        />
      </div>
    </div>
  )
}

export default SponsorStep01
