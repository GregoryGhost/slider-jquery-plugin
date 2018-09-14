interface ITestCase < T >{
    testName: string,
    testData: T
}

function testCase(testName: string,
    testData: T): ITestCase < T >
{
    return {
        testName: testName,
        testData: testData
    };
}

export {testCase, ITestCase};
