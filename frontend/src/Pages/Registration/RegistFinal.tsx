import { Button } from '../../components/common'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const RegistFinal = ({
  handleNext,
}: {
  handleNext?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <>
      <div className="flex justify-center flex-col items-center mt-[50%]">
        <BsFillCheckCircleFill color="#00C313" size="80px" />
        <h3 className="bold text-center text-[26px] m-[24px] mb-[16px]">
          You’re all set!
        </h3>
        <p className="text-[#657080] text-[18px] mb-[32px] text-center">
          Rider find routes fast and for a price that fits your budget
        </p>
      </div>
      <div className="absolute bottom-[20px] w-[auto] left-[20px] right-[20px]">
        <Button title="Done" onClick={handleNext} />
      </div>
    </>
  )
}

export default RegistFinal
