

const SpinnerBtn = ({ background }) => {
    return (
        <>
            {background ? (
                <div className="btn-pri w-[121px] h-[35px] flex justify-center">
                    <div className="spinner-btn" />
                </div>
            ) : (
                <div className="w-[121px] h-[35px] flex justify-center">
                    <div className="spinner-btn border-primary border-t-transparent" />
                </div>
            )}
        </>
    );
}

export default SpinnerBtn;
