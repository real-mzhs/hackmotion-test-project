import { cn } from "../lib/utils";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: Props) => {
  return (
    <section
      className={cn(
        "w-full p-4 pt-8 md:mx-auto md:max-w-[1250px] md:py-16",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
