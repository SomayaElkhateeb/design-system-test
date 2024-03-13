import image from 'src/assets/brand/cloud.svg';

const PopupDiscover = () => {
    return (
        <div className="grid grid-row-3 border border-constrained  w-72 lg:w-[420px]  p-5">
            <div className='bg-sec-light rounded-md h-32 w-full mb-5' >
                <img className='h-8 m-11 mx-auto' src={image} alt="brand" />
            </div>
            <div className='mb-5'>
                <h3 className="font-semibold text-title">Discover our learnning hub</h3>
                <p className="mt-2 text-sm text-title">Learn about how to use dookan and a lot more!</p>
            </div>
            <div className="flex justify-end items-end gap-4">
                <button className='btn-sec'>Help center</button>
                <button className='btn-pri'>Discover Now</button>
            </div>
        </div>
    )
}

export default PopupDiscover;