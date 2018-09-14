interface ITestCaseCV{
    min: number,
    value: number,
    max: number
};

function setData(min: number, value: number,
    max: number): ITestCaseCV
{
    return {
        min: min,
        value: value,
        max: max
    }
}

export {ITestCaseCV, setData};
