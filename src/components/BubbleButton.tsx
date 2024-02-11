import { ComponentProps, ReactNode } from 'react' 

export interface BubbleButtonProps extends ComponentProps<'button'>{
  children: ReactNode
}

export function BubbleButton(props: BubbleButtonProps) {
  return (
    <button className='p-2 h-full text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-neutral-700 data-[active=true]:text-violet-400'
      {...props}
    />
  )
}
