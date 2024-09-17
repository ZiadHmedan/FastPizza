import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

export default function UpdateItemQuantity({selectedPizzaID, currentQuantity}) {
    const dispatch =useDispatch();
    
  return (
    <div className="flex items-center gap-2 md:gap-3">
    <Button
      type="round"
      onClick={() => dispatch(decreaseItemQuantity(selectedPizzaID))}
    >
      -
    </Button>
    <span className="text-sm font-medium">{currentQuantity}</span>
    
    <Button
      type="round"
      onClick={() => dispatch(increaseItemQuantity(selectedPizzaID))}
    >
      +
    </Button>
  </div>

  )
}
