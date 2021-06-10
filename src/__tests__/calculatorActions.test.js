import { addInputs , subtractInputs, fetchRandomNumber } from '../actions/calculatorActions'


describe('ACTIONS - Test calculatorActions',()=>{

    it('actionCreator addInputs', () => {
        const add = addInputs(50);
        //Créer le expect
        // console.log(add);
        expect(add.output).toEqual(50)
        expect(add.type).toEqual("ADD_INPUTS")

    });


    it('actionCreator subtractInputs', () => {
        const subtract = subtractInputs(-50);
        //Créer le expect
        expect(subtract.output).toEqual(-50)
        expect(subtract.type).toEqual("SUBTRACT_INPUTS")
    });

});

