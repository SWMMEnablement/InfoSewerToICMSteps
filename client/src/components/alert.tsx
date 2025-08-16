import React from "react";
import { cn } from "@/lib/utils";

interface AlertProps {
  type: 'success' | 'warning' | 'info' | 'danger';
  children: React.ReactNode;
  className?: string;
}

const alertIcons = {
  success: 'fas fa-check-circle',
  warning: 'fas fa-exclamation-triangle', 
  info: 'fas fa-info-circle',
  danger: 'fas fa-exclamation-circle'
};

export default function Alert({ type, children, className }: AlertProps) {
  return (
    <div className={cn(`alert alert-${type} p-6`, className)}>
      <div className="flex items-start space-x-3">
        <i className={`${alertIcons[type]} text-xl mt-1`}></i>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
