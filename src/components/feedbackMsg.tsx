const FeedbackMsg = (props: any) => {
  return (
    <>
      <div className="flex flex-row h-screen w-full items-center justify-center	 bg-cyan-500">
        <h2 className="text-5xl text-gray-100">{props.msg}</h2>
      </div>
    </>
  );
}

export default FeedbackMsg;
