import CustomIcon from "./CustomIcon";

export const GobalDataMap = [
  {
    id: 1,
    name: "test",
    icon: <CustomIcon Alphabet="G" color={"#9b59b6"} />,
  },
  {
    id: 2,
    name: "test67",
    icon: <CustomIcon Alphabet="G" color={"#9b59b6"}  />,
  },
];

export const Dropdown1 = [
  {
    id: 1,
    text: "Click on",
  },
  {
    id: 2,
    text: "Text",
    color: "#ebc000",
    isEditable: false,
    item: GobalDataMap,
  },
];
export const Dropdown2 = [
  {
    id: 1,
    text: "Click on",
  },
  {
    id: 2,
    text: "Text",
    color: "#ebc000",
    isEditable: false,
    item: GobalDataMap,
  },
  {
    id: 3,
    text: "after",
  },
  {
    id: 4,
    text: "Text",
    color: "#ebc000",
    isEditable: false,
    item: GobalDataMap,
  },
];
export const Dropdown3 = [
  {
    id: 1,
    text: "Click on",
  },
  {
    id: 2,
    text: "Text",
    color: "#ebc000",
    isEditable: false,
    item: GobalDataMap,
  },
  {
    id: 3,
    text: "for",
  },
  {
    id: 4,
    text: "Text",
    color: "#ebc000",
    isEditable: false,
    item: GobalDataMap,
  },
];

export const List = [
  {
    id: 1,
    logo: <CustomIcon Alphabet={"@"} color={"#88D66C"} />,
    key: "Text",
    text: "Click on Text",
    content: Dropdown1,
  },
  {
    id: 2,
    logo: <CustomIcon Alphabet={"@"} color={"#88D66C"} />,
    key: "Text",
    text: "Click on Text after Text",
    content: Dropdown2,
  },
  {
    id: 3,
    logo: <CustomIcon Alphabet={"@"} color={"#88D66C"} />,
    key: "Text",
    text: "Click on Text for Text",
    content: Dropdown3,
  },
];
