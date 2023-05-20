import { type ReactNode, useState } from 'react' 

type Props = {
    reactValue: (value: string) => ReactNode // Union de tipos de booleanos, numbers, strings y etc
}

export const Math = (props: Props) => {
    const { reactValue } = props
    const [value, setValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value) //Tipo de elemento

    return (
        <>
            <input
            type='text'
            value={value}
            onChange={handleChange}
            placeholder='0'
            className='rounded-lg ml-1 bg-slate-500 '
             />
             {reactValue(value)}
        </>
    )
}

export const Kelvin = ({ value = 0}) => {
    const stateValue = Number.isNaN(value) ? 0 : value
    return (
        <div className='ml-1 mt-1 text-slate-700 flex-none rounded-md py-1 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50'>
            <li>
                {stateValue + 273.15}K
            </li>
        </div>
    )
}

export const Fahrenheit = ({ value = 0 }) => {
    const stateValue = Number.isNaN(value) ? 0 : value
    return (
        <div className='ml-1 mt-1 text-slate-700 flex-none rounded-md py-1 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50'>
            <li>
                {(stateValue * 9) / 5 + 32}°F
            </li>
        </div>
    )
}