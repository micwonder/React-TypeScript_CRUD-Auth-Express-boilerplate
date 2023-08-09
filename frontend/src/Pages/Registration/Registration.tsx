import { CardButton, CircleButton } from '../../components/common'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const navigate = useNavigate()

  return (
    <div className="p-[20px]">
      <CircleButton icon={<BiArrowBack />} />
      <h3 className="bold text-center text-[26px] m-[24px]">Choose type</h3>
      <div className="flex flex-col gap-[20px]">
        <CardButton
          title="Rider"
          description="Restore your account from a backup"
          onClick={() => navigate('rider')}
        />
        <CardButton
          title="Vehicle"
          description="Optional subtitle with some description"
          onClick={() => navigate('vehicle')}
        />
        <CardButton
          title="Provider"
          description="Restore your account from a backup"
          onClick={() => navigate('provider')}
        />
        <CardButton
          title="Sponsor"
          description="Restore your account from a backup"
          onClick={() => navigate('sponsor')}
        />
      </div>
    </div>
  )
}

export default Registration
