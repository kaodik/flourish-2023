export default function PrimaryButton(props) {
  return (
    <button
      className="rounded-[40px] bg-primary-light text-white font-bold hover:bg-primary-dark py-2 px-6 w-fit shadow-md shadow-[#888888aa]"
      style={{ maxHeight: "75px" }}
    >
      <h3>{props.innerText}</h3>
    </button>
  );
}
