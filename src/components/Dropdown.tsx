import { TfiReload } from "react-icons/tfi";
type Props = { items: any; handleSelect: (items: any) => any };

function DropDown({ items, handleSelect }: Props) {
  const handleSelectValue = (_item: Object) => {
    handleSelect(_item);
  };
  return (
    <div className="h-28 w-72 border p-3 absolute z-50 bg-white left-0 top-9">
      <div className="flex items-center border relative">
        <input
          type="text"
          placeholder="Search global data"
          className="h-7 p-2 outline-none text-sm"
        />
        <TfiReload className="absolute right-1 z-10 cursor-pointer" />
      </div>

      {items.map((_item: any, i: number) => (
        <div
          key={i}
          className="flex gap-5 py-1 cursor-pointer hover:bg-slate-50 text-gray-700 items-center"
          onClick={() => handleSelectValue(_item)}
        >
          <span>{_item.icon}</span>
          {_item.name}
        </div>
      ))}
    </div>
  );
}

export default DropDown;
