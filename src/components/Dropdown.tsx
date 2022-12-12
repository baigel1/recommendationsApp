interface DropdownProps {
  items: string[];
  setId: Function;
}

const Dropdown = ({ items, setId }: DropdownProps) => {
  return (
    <>
      <div className="bg-slate-500 mt-4 mx-4 w-3/6">
        {items.map((item) => (
          <div key={item} onClick={() => setId(item)}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Dropdown;
