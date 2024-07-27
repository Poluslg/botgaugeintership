import { useState } from "react";
import DropDown from "./Dropdown";

type Props = {
  item: any;
};

function Opstion({ item }: Props) {
  const [itemList, setItemList] = useState(item && item.length ? item : []);
  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState({ icon: "", name: "" });
  const handleDoubleClick = (_item: any) => {
    if (_item.id == 4) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
      let _ItemList = [...itemList];
      const List = _ItemList.map((itemValue) => {
        if (itemValue.id === _item.id) {
          itemValue.isEditable = !itemValue.isEditable;
        }
        return itemValue;
      });
      setItemList(List);
    }
  };

  const handleSelectValue = (_value: any) => {
    setValue(_value);
  };
  return (
    <div className="flex gap-2 select-none">
      {itemList.map((_item: any, i: number) => (
        <div key={i}>
          {_item.text === "Text" ? (
            <span
              style={{
                color: _item.color,
              }}
            >
              <span
                onDoubleClick={() => handleDoubleClick(_item)}
                className={`outline-none select-none ${
                  _item.isEditable && "text-green-500"
                } `}
              >
                "
                <span
                  contentEditable={_item.isEditable}
                  className="outline-none select-none cursor-pointer "
                >
                  {_item.id === 4 && value ? (
                    <div className="border h-12 w-16 bg-red-300">
                      {value?.icon}
                      {value?.name}
                    </div>
                  ) : (
                    <>{_item.text}</>
                  )}
                </span>
                "
              </span>
              {showDropdown && (
                <DropDown items={_item.item} handleSelect={handleSelectValue} />
              )}
            </span>
          ) : (
            <>
              <span>{_item.text}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Opstion;
