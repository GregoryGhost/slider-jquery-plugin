import {ConstrainedValue} from '../src/ConstrainedValue.ts';

function positiveTestConstructor(min: number,
    value: number, max: number)
{
    let parameter = new ConstrainedValue(min, value, max);

    expect(parameter.min).toBe(min);
    expect(parameter.value).toBe(value);
    expect(parameter.max).toBe(max);
}

function negativeTestConstructor(min: number,
    value: number, max: number)
{
    function parameter(){
        new ConstrainedValue(min, value, max);
    };
    
    expect(parameter).toThrow(RangeError);
}

interface ITestCase{
    testName: string,
    min: number,
    value: number,
    max: number
}

function testCase(testName: string,
    min: number, value: number, max: number): ITestCase
{
    return {
        testName: testName,
        min: min,
        value: value,
        max: max
    };
}

describe('Constrained Value', () => {
    const _max = 100;
    const _min = -100;
    const _value = 0;
    
    const _cv = new ConstrainedValue(_min, _value, _max);
    
    describe('constructor', () => {
        describe('test positive', () => {
            let cases = [
                testCase('min < value < max', _min, _value, _max),
                testCase('min = value = max', _max, _max, _max)
            ];
            cases.forEach((tCase) => {
                let {testName, min, value, max} = tCase;
                it(testName, () => {
                    positiveTestConstructor(min, value, max);
                });
            });
        });

        describe('test negative', () => {
            let cases = [
                testCase('max < min', _max, _value, _min),
                testCase('value < min', _min, _min * 2, _max),
                testCase('value > max', _min, _max * 2, _max)
            ];

            cases.forEach((tCase) => {
                let {testName, min, value, max} = tCase;
                it(testName, () => {
                    negativeTestConstructor(min, value, max);
                });
            });
        });
    });
});
