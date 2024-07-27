import { useEffect, useState } from "react";
import { TbArrowBarToLeft } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";
import { List } from "./components/OpstionsList";
import Opstion from "./components/Opstion";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(Object);
  const list = List.slice();

  useEffect(() => {
    setSelectValue("");
  }, []);

  const toggleDropdown = () => {
    setIsOpen(true);
  };

  const CloseDropDown = () => {
    setIsOpen(false);
  };

  const handleArrowClick = () => {
    setIsOpen(false);
  };

  const handleItemClick = (_list: any, i: number) => {
    console.log(i);
    setSelectValue(_list);
    setIsOpen(false);
  };
  const handleIoMdCloseCircle = () => {
    setSelectValue("");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[30rem] border shadow-md rounded-sm">
        <form className="w-full flex flex-col items-end gap-5 py-5 px-5 relative">
          {!selectValue ? (
            <input
              className="w-full h-10 border border-gray-200 rounded-md px-2"
              placeholder="Step"
              onFocus={toggleDropdown}
            />
          ) : (
            <div className="relative w-full ">
              <div className="w-full h-10 border border-gray-200 rounded-md px-2 flex items-center text-lg font-medium">
                <span className="text-black">
                  {selectValue.key && <Opstion item={selectValue.content} />}
                </span>
              </div>
              <IoMdCloseCircle
                size={24}
                color="#ffb8b8"
                className="absolute right-1 top-2 cursor-pointer"
                onClick={handleIoMdCloseCircle}
              />
            </div>
          )}

          {isOpen && (
            <div className="w-4/5 border border-gray-200 rounded-md absolute z-40 left-0 bg-gray-100">
              <ul>
                <li
                  className="hover:bg-gray-200 cursor-pointer"
                  onClick={handleArrowClick}
                >
                  <TbArrowBarToLeft className="h-10 w-10 pl-2" stroke="gray" />
                </li>
                {list && list.length ? (
                  <>
                    {list.map((_list, i) => (
                      <li
                        key={i}
                        className="pl-7 p-2 h-12 hover:bg-gray-200 cursor-pointer space-x-2 flex  py-3 font-semibold"
                        onClick={() => handleItemClick(_list, i)}
                      >
                        <span>{_list.logo}</span>
                        {_list.content.map((list) => (
                          <span
                            key={list.id}
                            style={{
                              color: list.color,
                            }}
                          >
                            {list.text}
                          </span>
                        ))}
                      </li>
                    ))}
                  </>
                ) : (
                  <>
                    <li className="pl-7 p-2 hover:bg-gray-200 cursor-pointer space-x-2">
                      Something Went Wrong
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}

          <div>
            <button
              type="reset"
              className="h-8 w-20 text-lg text-red-600 font-semibold"
              onClick={CloseDropDown}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-8 w-20 bg-blue-500/60 hover:bg-blue-900 text-white rounded-md transition-colors"
            >
              Ok
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
