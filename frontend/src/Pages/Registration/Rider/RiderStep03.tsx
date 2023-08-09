import { Button } from '../../../components/common'
import { TiLocation } from 'react-icons/ti'
import { IoIosArrowForward } from 'react-icons/io'

const RiderStep03 = ({
  handleNext,
}: {
  handleNext?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <>
      <div className="p-[16px] rounded-[12px] bg-[#FBFBFC] flex items-center justify-between">
        <div className="flex items-center">
          <TiLocation size="24px" color="#9BA3AE" />
          <p className="text-[16px] mx-[12px]">Pickup Location</p>
        </div>
        <div className="flex items-center">
          <p className="text-[12px] text-[#9BA3AE]">Optional</p>
          <IoIosArrowForward className="opacity-50 m-[5px]" />
        </div>
      </div>
      <div className="absolute bottom-[20px] w-[auto] left-[20px] right-[20px] flex flex-col gap-[5px]">
        <Button title="Continue" onClick={handleNext} />
        <Button title="Skip" variant="standard" onClick={handleNext} />
      </div>
    </>
  )
}

export default RiderStep03
