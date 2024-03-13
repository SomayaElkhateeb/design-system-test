import image from 'src/assets/brand/cloud.svg';

const PopupWelcome = () => {
  return (
    <div className="grid grid-row-3 border border-constrained rounded-md w-72 lg:w-[420px]  p-5">
    <div className='rounded w-full mb-5' >
        <img className='mx-auto max-w-24' src={image} alt="" />
    </div>
    <div className='mb-5 text-center'>
        <h3 className="font-semibold text-title">Welcome to Dookan</h3>
        <p className="mt-2 text-sm text-title">Hey, this is Bot, I'm here to be your <br /> assistant, Let's take a quick tour</p>
    </div>
    <div className="flex justify-end items-end gap-4">
        <button className='btn-ter'>No Thanks</button>
        <button className='btn-pri'>Ok</button>
    </div>
</div>
  )
}

export default PopupWelcome;
