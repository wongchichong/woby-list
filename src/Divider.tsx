import { ObservableMaybe, $$, type JSX } from 'woby'

export const Divider = ({ vertical, className, ...props }: JSX.HrHTMLAttributes<HTMLHRElement> & { vertical?: ObservableMaybe<boolean> }) => {
    const cls = props.class
    delete props.class
    // tw('hr')`shrink-0 my-2 m-0 border-[0px_0px_thin] border-solid`

    //<hr class="shrink-0 h-auto self-stretch mx-1 m-0 border-[0px_thin_0px_0px] border-solid border-[rgba(0,0,0,0.12)]" >

    return <hr class={[() => $$(vertical) ? 'bg-[rgb(223,221,221)] inline-block h-4 w-0.5 mt-[0em] -mb-1 mx-[1em]' : 'shrink-0 my-2 m-0 [border-width:0px_0px_thin] border-solid', cls ?? className]} />
}

