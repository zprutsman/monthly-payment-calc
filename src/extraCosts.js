const ExtraCosts = (props) => {
  const updateExtraCosts = (e) => {
    props.setValue(e.target.value);
  };
  return (
    <div className="flex-auto p-6 border-2 border-gray-500 m-2">
      <p>{props.title}</p>
      <input
        placeholder={props.placeholder}
        className="rounded border-2 border-gray-400 text-base text-green-500"
        type="number"
        value={props.value}
        onChange={updateExtraCosts}
        min={0}
      />
    </div>
  );
};
export default ExtraCosts;
