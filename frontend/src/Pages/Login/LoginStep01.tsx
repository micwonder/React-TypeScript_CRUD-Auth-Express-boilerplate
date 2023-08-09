import { useState } from 'react'
import { Button, TextField } from '../../components/common'

const LoginStep01 = ({
  handleNext,
}: {
  handleNext?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <TextField
        placeholder="Enter username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        placeholder="Password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="absolute bottom-[20px] w-[auto] left-[20px] right-[20px]">
        <Button
          title="Continue"
          disabled={userName === '' || password === ''}
          onClick={handleNext}
        />
      </div>
    </div>
  )
}

export default LoginStep01
