import type { ComponentType, ReactNode } from "react";
import { IconProps } from "@/assets/icons/icon.types";

type CardRootProps = {
  children: ReactNode;
  className?: string;
};

function CardRoot({ children, className = "" }: CardRootProps) {
  return <article className={`feature-card ${className}`}>{children}</article>;
}

type CardIconProps = {
  icon: ComponentType<IconProps>;
  className?: string;
};

function CardIcon({ icon: IconComponent, className = "" }: CardIconProps) {
  return (
    <div className="flex items-center justify-center">
      <IconComponent
        className={`size-14 shrink-0 ${className}`}
        aria-hidden="true"
      />
    </div>
  );
}

type CardTitleProps = {
  children: ReactNode;
  className?: string;
};

function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h4
      className={`text-text-primary text-center text-lg font-semibold tracking-tight ${className}`}
    >
      {children}
    </h4>
  );
}

type CardDescriptionProps = {
  children: ReactNode;
  className?: string;
};

function CardDescription({ children, className = "" }: CardDescriptionProps) {
  return (
    <p
      className={`text-text-primary max-w-prose flex-1 text-center text-sm leading-6 ${className}`}
    >
      {children}
    </p>
  );
}

export const Card = {
  Root: CardRoot,
  Icon: CardIcon,
  Title: CardTitle,
  Description: CardDescription,
};
