import { useState } from 'react'
import { Button, TextField } from '../../../components/common'

const ProviderStep01 = ({
  handleNext,
}: {
  handleNext?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  const [organization, setOrganization] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div>
      <TextField
        placeholder="Name of organization"
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
      />
      <TextField
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="absolute bottom-[20px] w-[auto] left-[20px] right-[20px]">
        <Button
          title="Continue"
          disabled={organization === '' || email === ''}
          onClick={handleNext}
        />
      </div>
    </div>
  )
}

export default ProviderStep01
