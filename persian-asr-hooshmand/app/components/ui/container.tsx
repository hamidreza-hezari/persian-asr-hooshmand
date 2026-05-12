type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`max-w-width mx-auto w-full px-6 ${className} `}>
      {children}
    </div>
  );
}
