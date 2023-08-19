import Logos from "./Logos";
import Dbuttons from "./Dbuttons";

function Sectionlogos() {
  return (
    <div className="container px-4 m-auto">
      <section className="flex flex-col justify-between pt-20 xl:flex-row xl:py-32">
        <Logos imgName="/logos/logo-google.png" />
        <Logos imgName="/logos/logo-ibm.png" />
        <Logos imgName="/logos/logo-microsoft.png" />
        <Logos imgName="/logos/logo-hp.png" />
        <Logos imgName="/logos/logo-vector-graphics.png" />
      </section>

      <div className="px-4 py-20 m-auto text-center">
        <p className="w-9/12 py-4 m-auto text-3xl font-bold text-darkGray font-bai">
          Clipboard for iOS and Mac OS
        </p>
        <p className="max-w-md py-2 m-auto text-lg xl:max-w-lg text-grayBlue font-bai sm:max-w-md">
          Avaliable for free on the App Store. Download for Mac or iOS, sync whit iCloud and
          you&apos;re ready to start adding to your clipboard.
        </p>
        <div className="py-10">
          <Dbuttons ios="Download for iOS" mac="Download for Mac" />
        </div>
      </div>
    </div>
  );
}

export default Sectionlogos;
