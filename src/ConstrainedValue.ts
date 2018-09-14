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
        if (_min > _max)
        {
            throw new RangeError(`Min value = ${_min} \
                above than max value ${_max}`);
        }
        this.value = _value;
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
        if (newValue > this.max) {
            throw new RangeError(`Setting value=${newValue} \
                above than max value=${this.max}`);
        }
        if (newValue < this.min) {
            throw new RangeError(`Setting value=${newValue} \
                below than min value=${this.min}`);
        }
        this._value = newValue;
    }
}

export {ConstrainedValue};
