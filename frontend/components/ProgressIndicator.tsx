import Image from "next/image";

interface Props {
  iconSrc: string;
  label: string;
  currentProgress?: number;
  improvedProgress?: number;
}

const ProgressIndicator = ({
  iconSrc,
  label,
  currentProgress,
  improvedProgress,
}: Props) => {
  return (
    <div className="flex gap-3 w-full">
      <div className="inline-flex flex-shrink-0 bg-[#5773FF33] rounded-[10px] p-[6px] text-accent">
        <Image
          unoptimized
          src={iconSrc}
          alt="icon"
          width={24}
          height={24}
          className="pointer-events-none"
        />
      </div>
      <div className="grid gap-1 w-full">
        <p className="text-xs font-medium">{label}</p>
        <div className="w-full h-[6px] bg-[#E6E6E6] rounded-[72px] relative">
          <div
            className="absolute top-0 left-0 h-full bg-accent rounded-[72px]"
            style={{ width: `${currentProgress}%` }}
          />
          <div
            className="absolute top-0 left-0 h-full bg-[#5773FF33] rounded-[72px]"
            style={{ width: `${improvedProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
