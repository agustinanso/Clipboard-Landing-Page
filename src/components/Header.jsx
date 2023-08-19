import Dbuttons from "./Dbuttons";

function Header() {
  return (
    <header className="container items-center justify-center m-auto">
      <div className="px-4 py-16 ">
        <img src="/logos/logo.svg" className="m-auto" />
      </div>
      <div className="px-4 ">
        <div className="w-full py-10 mx-auto text-center ">
          <p className="w-11/12 py-4 m-auto text-3xl font-bold text-darkGray font-bai xl:text-4xl">
            A history of everything you copy
          </p>
          <p className="max-w-md py-2 m-auto text-lg text-grayBlue font-bai sm:max-w-md lg:max-w-lg">
            Clipboard allows you to track and organize everything you copy, instantly access your
            clipboard on all your devices.
          </p>
        </div>
        <div>
          <Dbuttons ios="Download for iOS" mac="Download for Mac" />
        </div>
      </div>
    </header>
  );
}

export default Header;
