import React, { FC } from "react";

interface ResponsiveScrollbarProps {
  percentage: number;
}

const ResponsiveScrollbar: FC<ResponsiveScrollbarProps> = ({ percentage }) => {
  const handleSize = 64;
  const handlePadding = 8;

  return (
    <div className="relative ml-4">
      {/* Vertical Scrollbar */}
      <div className="absolute right-0 w-4 h-full bg-white rounded-full hidden md:block">
        <div
          className="absolute left-0 w-[5px] bg-accent rounded-full "
          style={{
            transform: "translateX(100%)",
            height: `${handleSize}px`,
            top: `calc((100% - ${handleSize + handlePadding * 2}px) * ${
              percentage / 100
            })`,
            marginTop: `${handlePadding}px`,
            marginBottom: `${handlePadding}px`,
          }}
        />
      </div>

      {/* Horizontal Scrollbar */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-white rounded-full md:hidden">
        <div
          className="absolute top-0 left-0 h-[5px] bg-accent rounded-full"
          style={{
            transform: "translateY(100%)",
            left: `calc((100% - ${handleSize + handlePadding * 2}px) * ${
              percentage / 100
            })`,
            width: `${handleSize}px`,
            marginLeft: `${handlePadding}px`,
            marginRight: `${handlePadding}px`,
          }}
        />
      </div>
    </div>
  );
};

export default ResponsiveScrollbar;
