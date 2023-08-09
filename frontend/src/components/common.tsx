import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { BsCheckLg } from 'react-icons/bs'
import { BiArrowBack } from 'react-icons/bi'

interface CircleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
}

interface DrawSelectorProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  drawerTitle?: string
  drawerDescription?: string
  data?: {
    icon?: ReactNode
    title: string
    description?: string
  }[]
  val?: string
  onChangeValue?: (val: string) => void
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  variant?: 'container' | 'standard'
}

export const CircleButton: React.FC<CircleButtonProps> = ({
  icon,
  ...props
}) => {
  return (
    <button
      className="w-[36px] h-[36px] bg-[#ebecef] flex justify-center items-center rounded-[50%]"
      {...props}
    >
      {icon}
    </button>
  )
}

export const CardButton = ({
  title,
  description,
  onClick,
}: {
  title: string
  description: string
  onClick?: MouseEventHandler<HTMLDivElement>
}) => {
  return (
    <div
      className="flex items-center justify-center p-[24px] rounded-[16px] bg-[#f9fafb]"
      onClick={onClick}
    >
      <div>
        <p className="text-base bold">{title}</p>
        <p className="text-[#657080]">{description}</p>
      </div>
      <div>
        <IoIosArrowForward className="opacity-50 m-[5px]" />
      </div>
    </div>
  )
}

export const Stepper = ({ step, count }: { step: number; count: number }) => {
  return (
    <div className="flex gap-[10px]">
      {Array(count)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className={`w-[32px] h-[32px] rounded-[50%] border-[1px] border-[#D6D9DD] flex justify-center items-center text-xs ${
              step < idx + 1 ? 'border-dashed text-[#D6D9DD]' : ''
            } ${
              step > idx + 1 ? 'bg-[black] border-[black] text-[white]' : ''
            }`}
          >
            {step > idx + 1 ? <BsCheckLg /> : idx + 1}
          </div>
        ))}
    </div>
  )
}

export const TextField: React.FC<TextFieldProps> = ({
  checked = false,
  ...props
}) => {
  return (
    <div className="relative mb-[16px]">
      <input
        className="rounded-[12px] w-full h-[56px] px-[12px] focus-visible:bg-white bg-[#EBECEF] outline-[#EBECEF] focus-visible:shadow-lg [outline-style:solid] outline-[2px]"
        {...props}
      />
      {checked && (
        <div className="absolute h-full right-[20px] top-[0px] flex items-center">
          <BsCheckLg size={20} />
        </div>
      )}
    </div>
  )
}

export const Button: React.FC<ButtonProps> = ({
  title,
  children,
  variant = 'container',
  ...props
}) => {
  return (
    <button
      className={`w-full h-[56px] rounded-[12px] bold mt-[16px] disabled:text-[#9BA3AE] ${
        variant === 'container'
          ? 'bg-[#191C20] text-[white] disabled:bg-[#EBECEF]'
          : 'bg-[transparent] text-[#9BA3AE]'
      }`}
      {...props}
    >
      {title ? title : children}
    </button>
  )
}

export const Drawer = ({
  show,
  children,
}: {
  show?: boolean
  children: ReactNode
}) => {
  return (
    <div
      className={`fixed bottom-[0px] left-[0px] w-[100vw] h-[100vh] [transition:0.4s] ${
        show ? 'backdrop-blur' : ''
      }`}
      style={{
        zIndex: 1000,
        backgroundColor: show ? '#43434367' : '#43434300',
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      <div
        className={`absolute w-full h-[90%] bottom-[0px] bg-white rounded-tl-[15px] rounded-tr-[15px] shadow-lg [transition:0.4s]`}
        style={{
          bottom: show ? '0px' : '-100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export const DrawSelector: React.FC<DrawSelectorProps> = ({
  drawerTitle,
  drawerDescription,
  data,
  value,
  onChangeValue,
  ...props
}) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="relative mb-[16px]">
        <button
          className={`rounded-[12px] w-full h-[56px] px-[12px] focus-visible:bg-white bg-[#EBECEF] outline-[#EBECEF] focus-visible:shadow-lg [outline-style:solid] outline-[2px] text-left ${
            value ? 'text-[black]' : 'text-[#657080]'
          }`}
          {...props}
          onClick={() => setShow(true)}
        >
          {value || props.placeholder}
        </button>
        <div className="absolute h-full right-[20px] top-[0px] flex items-center">
          <IoIosArrowForward />
        </div>
      </div>
      <Drawer show={show}>
        <div className="p-[20px]">
          <CircleButton icon={<BiArrowBack />} onClick={() => setShow(false)} />
          <h3 className="bold text-center text-[26px] m-[24px] mb-[16px]">
            {drawerTitle}
          </h3>
          <p className="text-[#657080] text-[18px] mb-[32px] text-center">
            {drawerDescription}
          </p>
          {data?.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-start p-[16px] rounded-[16px] bg-[#f9fafb] my-[10px]"
              onClick={() => {
                if (onChangeValue) {
                  onChangeValue(item.title)
                  setShow(false)
                }
              }}
            >
              <div className="mx-[10px]">{item.icon}</div>
              <div>
                <p className="text-base bold">{item.title}</p>
                <p className="text-[#657080] text-[12px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Drawer>
    </>
  )
}
