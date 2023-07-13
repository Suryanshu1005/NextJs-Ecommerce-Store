import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface PreviewIconProps{
    icon: React.ReactElement;
    className? : string,
    onClick? : MouseEventHandler<HTMLButtonElement> | undefined,
}

const PreviewIcon: React.FC<PreviewIconProps> = ({
    icon,
    className,
    onClick,
}) => {
    return (
            <button onClick={onClick} className={cn('rounded-full items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition', className)}>
                {icon}
            </button>
     );
}
 
export default PreviewIcon;