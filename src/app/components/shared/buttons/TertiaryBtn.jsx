

const TertiaryBtn = ({ text = 'Show result', IconRight, IconLeft }) => {
  return (
    <button className='text-pri-dark font-semibold flex flex-row gap-x-1 pl-2 pr-2 items-center justify-center'>
       {IconLeft && <IconLeft className="fill-pri-dark mt-1" />}
      {text}
     {IconRight && <IconRight className="fill-pri-dark mt-1" />}
      
    </button>
  );
}

export default TertiaryBtn;
