import IconsFooter from "./IconsFooter";

function Footer() {
  return (
    <div className="py-20 m-auto bg-grayBlue/50">
      <footer className="container flex flex-col justify-between gap-10 m-auto 2xl:gap-36 2xl:flex-row">
        <div className="flex flex-col gap-5 2xl:flex-row 2xl:gap-32">
          <img src="/logos/logo.svg" className="w-16 m-auto" />
          <div className="flex flex-col gap-5 text-center 2xl:gap-36 2xl:flex-row 2xl:text-left font-bai [ &>p]:hover:text-strongCyan">
            <div className="flex flex-col gap-5">
              <p className="cursor-pointer hover:text-strongCyan">FAQs</p>
              <p className="cursor-pointer hover:text-strongCyan">Contact Us</p>
            </div>
            <div className="flex flex-col gap-5 ">
              <p className="cursor-pointer hover:text-strongCyan">Privacy Policy</p>
              <p className="cursor-pointer hover:text-strongCyan">Press Kit</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="cursor-pointer hover:text-strongCyan">Install Guide</p>
            </div>
          </div>
        </div>

        <div className="m-auto 2xl:m-0">
          <IconsFooter />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
