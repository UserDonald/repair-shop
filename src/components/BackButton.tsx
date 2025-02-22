'use client';

import { ButtonHTMLAttributes } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

type Props = {
  title: string;
  className?: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function BackButton({ title, className, variant, ...props }: Props) {
  const router = useRouter();

  return (
    <Button
      variant={variant}
      className={className}
      onClick={() => router.back()}
      {...props}
    >
      {title}
    </Button>
  );
}
