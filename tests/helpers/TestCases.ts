interface ITestCase < T >{
    testName: string,
    testData: T
}

/**
 * Задает тестовый случай.
 * @param testName - Название тестового случая.
 * @param testData - Тестовые данные к тестовому случаю.
 * @returns Возвращает тестовый случай.
 */
function testCase(testName: string,
    testData: T): ITestCase < T >
{
    return {
        testName: testName,
        testData: testData
    };
}

export {testCase, ITestCase};
