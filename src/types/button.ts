export interface ButtonProps {
  type?: string;
  handler: () => void;
  isActive?: boolean;
  children: React.ReactNode;
  icon?: string;
}
