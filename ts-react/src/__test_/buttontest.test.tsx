import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonTest from '../Components/ButtonTest';

test('increment counter', () => {
   
   //render the component
   render(<ButtonTest/>)

   //select the elements 
    const counter =  screen.getByTestId('counter')
    const incrementBtn = screen.getByTestId('increment')

   //interact with those element
   fireEvent.click(incrementBtn)

  //assert he expected result
   
   expect(counter).toHaveTextContent("1")
});
