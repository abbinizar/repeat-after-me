interface IText {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
}
const Text = (props: IText) => {
  return (
    <div className="dark:text-white text-dark-100 text-sm">
      <p>{props.line1}</p>
      <p>{props.line2}</p>
      <p>{props.line3}</p>
      <p className="font-bold font-bold underline decoration-pink-500 decoration-2">
        {props.line4}
      </p>
    </div>
  );
};

export default Text;
