/**
 * Диапазон допустимых значений параметра.
 */
class ConstrainedValue
{
    /**
     * Создает экземпляр ConstrainedValue.
     *
     * @constructor
     * @this {ConstrainedValue}
     * @param min - Минимальное значение.
     * @param value - Текущее значение.
     * @param max - Максимальное значение.
     */
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

    /**
     * Минимальное значение диапазона.
     */
    get min(): number
    {
        return this._min;
    }

    /**
     * Минимальное значение диапазона.
     */
    set min(newMin: number)
    {
        this._min = newMin;
    }

    /**
     * Максимальное значение диапазона.
     */
    get max(): number
    {
        return this._max;
    }

    /**
     * Максимальное значение диапазона.
     */
    set max(newMax: number)
    {
        this._max = newMax;
    }

    /**
     * Значение, входящее в диапазон.
     */
    get value(): number
    {
        return this._value;
    }

    /**
     * Значение, входящее в диапазон.
     * @throws {RangeError} Если устанавливаемое значение
     *      выходит за рамки диапазона.
     */
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
