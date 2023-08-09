import { useState } from 'react'
import { Button, DrawSelector, TextField } from '../../../components/common'
import { PiHeartbeat, PiHouse, PiBowlFood, PiHexagon } from 'react-icons/pi'

const typeData = [
  {
    icon: <PiHeartbeat size={20} />,
    title: 'Health care',
    description: 'Max 12 min',
  },
  {
    icon: <PiHouse size={20} />,
    title: 'Housing',
    description: 'Possible description',
  },
  {
    icon: <PiBowlFood size={20} />,
    title: 'Food distribution',
    description: 'Possible description',
  },
  {
    icon: <PiHexagon size={20} />,
    title: 'Government agency',
    description: 'Possible description',
  },
]

const ProviderStep02 = ({
  handleNext,
}: {
  handleNext?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  const [ein, setEIN] = useState('')
  const [type, setType] = useState('')

  return (
    <div>
      <TextField
        placeholder="EIN"
        value={ein}
        onChange={(e) => setEIN(e.target.value)}
        checked={ein !== ''}
      />
      <DrawSelector
        placeholder="Type"
        drawerTitle="Select type"
        drawerDescription="Rider find routes fast and for a price that fits your budget"
        data={typeData}
        value={type}
        onChangeValue={(val) => setType(val)}
      />
      <div className="absolute bottom-[20px] w-[auto] left-[20px] right-[20px]">
        <Button
          title="Continue"
          disabled={ein === '' || type === ''}
          onClick={handleNext}
        />
      </div>
    </div>
  )
}

export default ProviderStep02
