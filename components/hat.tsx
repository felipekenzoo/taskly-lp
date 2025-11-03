import * as LucideIcons from 'lucide-react';

interface HatProps {
  nomeIcone: keyof typeof LucideIcons;
  title: string;
}

export default function Hat({ nomeIcone, title }: HatProps) {
  const Icon = LucideIcons[nomeIcone] as React.ComponentType<any>;
  
  return (
    <div className='flex items-center gap-2 bg-blueviolet-50 border border-blueviolet-300 w-fit px-6 py-2 rounded-4xl'>
      <Icon size={16} className='text-blueviolet-600' />
      <h2 className='text-blueviolet-600'>{title}</h2>
    </div>
  );
}