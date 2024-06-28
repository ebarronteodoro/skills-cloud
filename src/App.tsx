import SkillsCloud from './components/SkillsCloud'

function App () {
  return (
    <>
      <div className='w-full h-dvh absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-slate-900 to-slate-700' />
      <SkillsCloud className='flex w-full h-dvh justify-center items-center relative z-20 flex-col animate-fade-up animate-delay-1000' />
    </>
  )
}

export default App
