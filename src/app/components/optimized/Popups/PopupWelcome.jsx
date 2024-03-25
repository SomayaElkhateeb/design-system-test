import image from 'src/app/assets/brand/cloud.svg';

const PopupWelcome = () => {
  return (
    <div className="grid grid-row-3 border border-constrained rounded-md w-[420px] h-[247px] p-5 bg-white">
      <div className='rounded w-full mb-5 flex justify-center items-center' >
        <img className='w-[95.04px] h-[65.54px]' src={image} alt="" />
      </div>
      <div className='mb-2 text-center'>
        <h3 className="font-semibold text-title">Welcome to Dookan</h3>
        <p className="mt-2 text-[13px] text-pri-dark">Hey, this is Bot, I'm here to be your <br /> assistant, Let's take a quick tour</p>
      </div>
      <div className="flex justify-end items-end gap-4">
        <button className='btn-ter'>No Thanks</button>
        <button className='btn-pri'>Ok</button>
      </div>
    </div>
  )
}

export default PopupWelcome;
