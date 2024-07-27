type Props = {
  Alphabet: String;
  color?: String;
};

function CustomIcon({ Alphabet, color }: Props) {
  return (
    <div
      className={`h-6 w-9 text-sm font-semibold text-white text-center rounded-md`}
      style={{
        background: color,
      }}
    >
      {Alphabet}
    </div>
  );
}

export default CustomIcon;
