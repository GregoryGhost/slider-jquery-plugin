import {ConstrainedValue} from '../src/ConstrainedValue.ts';
import {testCase, ITestCase} from './helpers/TestCases.ts';
import {setData, ITestCaseCV} from './helpers/ConstrainedValue.helpers.ts';

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

describe('Constrained Value', () => {
    const _max = 100;
    const _min = -100;
    const _value = 0;
    
    const _cv = new ConstrainedValue(_min, _value, _max);
    
    describe('constructor', () => {
        describe('test positive', () => {
            let cases = [
                testCase('min < value < max',
                    setData(_min, _value, _max)),
                testCase('min = value = max',
                    setData(_max, _max, _max))
            ];
            cases.forEach((tCase) => {
                let {testName, testData} = tCase;
                let {min, value, max} = testData;
                it(testName, () => {
                    positiveTestConstructor(min, value, max);
                });
            });
        });

        describe('test negative', () => {
            let cases = [
                testCase('max < min',
                    setData(_max, _value, _min)),
                testCase('value < min',
                    setData(_min, _min * 2, _max)),
                testCase('value > max',
                    setData(_min, _max * 2, _max))
            ];

            cases.forEach((tCase) => {
                let {testName, testData} = tCase;
                let {min, value, max} = testData;
                it(testName, () => {
                    negativeTestConstructor(min, value, max);
                });
            });
        });
    });
});
