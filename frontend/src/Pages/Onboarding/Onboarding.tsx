import OnboardingStep1 from './OnboardingStep1'
import { useState } from 'react'

const Onboarding = () => {
  const [next, setNext] = useState(false)
  return (
    <div className="absolute h-full w-full" onClick={() => setNext(true)}>
      {next ? <OnboardingStep1 /> : null}
    </div>
  )
}

export default Onboarding
