// props src or name
{/* <Avatar name="somaya" src={img} /> */}

const AvatarSm = ({ src , name}) => {
   
  const shortName = name ? name.slice(0, 2) : '';

  return (
    <div className='w-8 h-8  rounded-full bg-pri-light overflow-hidden flex justify-center items-center'>
      {src ?
        <img src={src} alt="Avatar" className='w-full h-full' />
        :
        <span className='text-sec-pressed font-semibold uppercase text-sm'>{shortName}</span>
      }
    </div>
  );

}

export default AvatarSm;

