import {ConstrainedValue} from '../src/ConstrainedValue.ts';

function positiveTestConstructor(min: number,
    value: number, max: number)
{
    let parameter = new ConstrainedValue(min, value, max);

    expect(parameter.min).toBe(min);
    expect(parameter.value).toBe(value);
    expect(parameter.max).toBe(max);
}

interface ITestCase{
    testName: string,
    testData: number[]
}

function testCase(testName: string,
    testData: number[]): ITestCase
{
    return {
        testName: testName,
        testData: testData
    };
}

describe('Constrained Value', () => {
    const _max = 100;
    const _min = 1;
    const _value = 0;
    
    const _cv = new ConstrainedValue(_min, _value, _max);
    
    describe('constructor', () => {
        describe('test positive', () => {
            let cases = [
                testCase('min < value < max', [_min, _value, _max]),
                testCase('min = value = max', [_max, _max, _max])
            ];
            cases.forEach((tCase) => {
                let {testName, min, value, max} = tCase;
                it(testName, () => {
                    positiveTestConstructor(min, value, max);
                });
            });
        });
    });
});
