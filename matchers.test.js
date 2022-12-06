describe('Matchers', ()=>{
    test('there is a pool in Liverpool', ()=>{
        expect('Liverpool').toMatch(/pool/);
    })

    test('there is no cool in Liverpool', ()=>{
        expect('Liverpool').not.toMatch(/cool/);
    })

    test('null', ()=>{
        const dumb=null;
        expect(dumb).toBe(null);
        expect(dumb).toBeDefined();
        expect(dumb).not.toBeUndefined();
        expect(dumb).not.toBeTruthy();
        expect(dumb).toBeFalsy();
        
        
    })

    test('array', ()=>{
        const cars = ['Ferrari', 'BMW', 'Mercedes'];
        expect(cars).not.toContain('numenor');
        expect(cars).toContain('BMW');
        
        
    })


    
});