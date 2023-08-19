export default function Logos({ imgName }) {
  return (
    <div className="flex flex-col items-center justify-center mt-16 xl:mt-0 xl:flex-row">
      <img src={imgName} className="m-auto" />
    </div>
  );
}
