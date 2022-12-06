const multiply = require('./multiply');

describe('Multiplication scenarios', ()=>{
    test('6*7 should be 42', ()=>{
        expect(multiply(6,7)).toBe(42);
    })

    test('toEqual', ()=>{
        const data = {first : 1};
        data['second']=2;
        expect(data).toEqual({first:1,second:2});
    })

    test('toBe', ()=>{
        const data = {first : 1};
        data['second']=2;
        expect(data).toBe({first:1,second:2});
    })

    test('not toBe', ()=>{
        const data = {first : 1};
        data['second']=2;
        expect(data).not.toBe({first:1,second:2});
    })

    
    test('not toBe 42', ()=>{
        expect(multiply(6,7)).not.toBe(42);
    })

    test('not toBeGreaterThan 42.01', ()=>{
        expect(multiply(6,7)).not.toBeGreaterThan(42.01);
    })

    test('not toBeLessThan 41.99', ()=>{
        expect(multiply(6,7)).not.toBeLessThan(41.99);
    })

    test('toBeGreaterThan 41.99', ()=>{
        expect(multiply(6,7)).toBeGreaterThan(41.99);
    })

    test('toBeLessThan 42.01', ()=>{
        expect(multiply(6,7)).toBeLessThan(42.01);
    })

    
});