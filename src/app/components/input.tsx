type Props = {
    value: string;
    onChange: (s: string) => void;
    placeholder: string;
}

export function Input({value, onChange, placeholder}: Props){

    return (
        <input type="email" 
          className="h-[40px] w-[300px] text-black mb-4 bg-neutral-200 p-1 rounded-md" placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
    />
    )
}