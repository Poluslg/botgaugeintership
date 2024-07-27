type Props = {
  Alphabet: String;
  color?: String;
};

function CustomIcon({ Alphabet, color }: Props) {
  return (
    <div
      className="h-6 w-9 text-sm font-semibold text-white rounded-md flex items-center justify-center"
      style={{
        background: color,
      }}
    >
      {Alphabet}
    </div>
  );
}

export default CustomIcon;
