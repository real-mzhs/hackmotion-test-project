interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className="w-fit rounded-[72px] bg-accent text-white text-xs md:text-sm py-[10px] px-4 md:py-4 md:px-6 flex gap-2 flex-nowrap">
      {children}
    </button>
  );
};

export default Button;
