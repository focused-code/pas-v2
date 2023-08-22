
import { SelectContainer } from './styles';

export const CustomSelect = (props) => {

    const { value, disabled, onChange, children, bcolor, color, highlighted } = props;

    return (
        <SelectContainer {...props}>
            <label>
                <select disabled={disabled} bcolor={bcolor} color={color} value={value} onChange={(e) => onChange(e)} highlighted={highlighted}>
                    {children}
                </select>
            </label>
        </SelectContainer>
    )
}