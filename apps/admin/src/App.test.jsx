describe('app container',()=>{
    it('should test app',()=>{
        const {container} = render(<App/>)
        expect(container).toMatchSnapshot();
    })
})