function Section2() {
  return (
    <div className="container px-4 m-auto">
      <div className="text-center mt-14 xl:mt-24">
        <p className="w-9/12 py-4 m-auto text-3xl font-bold text-darkGray font-bai">
          Access Clipboard Anywhere
        </p>
        <p className="max-w-md py-2 m-auto text-lg xl:max-w-lg text-grayBlue font-bai sm:max-w-md">
          Whether you&apos;re on the go, or at your computer, you can access all your Clipboard
          snippets in a few simple clicks.
        </p>
      </div>

      <article className="items-center justify-between text-center ">
        <div className="mt-10">
          <img src="/images/image-devices.png" className="m-auto" />
        </div>
        <div>
          <p className="py-4 m-auto text-3xl font-bold text-darkGray font-bai">
            Supercharge your workflow
          </p>
          <p className="max-w-xs py-2 m-auto text-lg xl:max-w-lg text-grayBlue font-bai sm:max-w-md">
            We&apos;ve got the tools to boost your productivity.
          </p>
        </div>
      </article>
      <section className="container justify-between mt-16 xl:flex xl:flex-row">
        <div>
          <img src="/icons/icon-blacklist.svg" className="m-auto w-[36px] h-[32px]" />
          <div className="min-h-full text-center">
            <p className="py-4 text-2xl font-bold text-darkGray font-bai">Create Blacklists</p>
            <p className="max-w-sm py-2 m-auto text-lg text-grayBlue font-bai ">
              Ensure sensitive information never makes its way to your clipboard by excluding
              certain sources
            </p>
          </div>
        </div>
        <div className="mt-10 xl:mt-0">
          <img src="/icons/icon-text.svg" className="m-auto" />
          <div className="min-h-full text-center">
            <p className="py-4 text-2xl font-bold text-darkGray font-bai">Create Blacklists</p>
            <p className="max-w-sm py-2 m-auto text-lg text-grayBlue font-bai ">
              Ensure sensitive information never makes its way to your clipboard by excluding
              certain sources
            </p>
          </div>
        </div>
        <div className="mt-10 xl:mt-0">
          <img src="/icons/icon-preview.svg" className="m-auto " />
          <div className="min-h-full text-center">
            <p className="py-4 text-2xl font-bold text-darkGray font-bai">Create Blacklists</p>
            <p className="max-w-sm py-2 m-auto text-lg text-grayBlue font-bai">
              Ensure sensitive information never makes its way to your clipboard by excluding
              certain sources
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;
