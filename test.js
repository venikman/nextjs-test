import test from 'ava';
import nextjsTest from '.';

test('nextjsTest()', (t) => {
    t.notThrows(nextjsTest, 'Fix all module errors.');
});
