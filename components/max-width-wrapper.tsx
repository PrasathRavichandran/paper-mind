import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div className={cn("mx-auto px-2.5 md:px-20 max-w-screen", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
