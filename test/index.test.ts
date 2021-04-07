import {decodeByHex} from '../src/index';

test('#main function test', async () => {
    const res = decodeByHex('d4c1414243303031')
    expect(res).toBe("粤ABC001")
})
