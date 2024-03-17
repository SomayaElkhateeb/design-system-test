// props src or name


const Avatar = ({ src , name}) => {
  const shortName = name ? name.slice(0, 2) : '';

  return (
    <div className='w-10 h-10 rounded-full bg-pri-light overflow-hidden flex justify-center items-center'>
      {src ?
        <img src={src} alt="Avatar" className='w-full h-full' />
        :
        <span className='text-sec-pressed font-semibold uppercase'>{shortName}</span>
      }
    </div>
  );
}

export default Avatar;




