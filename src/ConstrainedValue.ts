/**
 * Диапазон допустимых значений параметра.
 */
class ConstrainedValue
{
    constructor(
        private _min: number,
        private _value: number,
        private _max: number)
    {
    }

    get min(): number
    {
        return this._min;
    }

    set min(newMin: number)
    {
        this._min = newMin;
    }
    
    get max(): number
    {
        return this._max;
    }

    set max(newMax: number)
    {
        this._max = newMax;
    }

    get value(): number
    {
        return this._value;
    }
    
    set value(newValue: number)
    {
        this._value = newValue;
    }
}

export {ConstrainedValue};
