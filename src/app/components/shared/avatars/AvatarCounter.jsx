

const AvatarCounter = ({count}) => {
  return (
    <div className='w-10 h-10 rounded-full bg-light-2 overflow-hidden flex justify-center items-center'>
      <span className='text-title text-[13px]'>+{count}</span>
  </div>
  )
}

export default AvatarCounter;