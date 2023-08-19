function Section1() {
  return (
    <div className="container px-4 m-auto xl:mt-24">
      <div className="mt-10 text-center">
        <p className="w-9/12 py-4 m-auto text-3xl font-bold text-darkGray font-bai">
          Keep track of your snippets
        </p>
        <p className="max-w-md py-2 m-auto text-lg xl:max-w-lg text-grayBlue font-bai sm:max-w-md">
          Clipboard instantly stores any item you copy in the cloud, meaning you can access your
          snippets immediately on all your devices. Our Mac and iOS apps will help you organize
          everything.
        </p>
      </div>
      <article className="flex flex-col items-center justify-between gap-16 mt-16 xl:flex-row">
        <div>
          <img src="/images/image-computer.png" />
        </div>
        <div className="justify-center w-full max-w-xl px-4 text-center xl:text-left ">
          <div className="flex flex-col gap-4 m-auto mt-10 md:mt-0">
            <p className="text-2xl font-bold text-darkGray font-bai">Quick Search</p>
            <p className="text-lg text-grayBlue font-bai xl:max-w-[400px]">
              Easily search your snippets by content, category, web address, application, and more.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-10 lg:mt-10">
            <p className="text-2xl font-bold text-darkGray font-bai">iCloud Sync</p>
            <p className="text-lg xl:max-w-[400px] text-grayBlue font-bai">
              instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-10 lg:mt-10">
            <p className="text-2xl font-bold text-darkGray font-bai">Complete History</p>
            <p className="text-lg text-grayBlue font-bai xl:max-w-[400px]">
              Retrieve any snippets from the first moment you started using the app.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Section1;
