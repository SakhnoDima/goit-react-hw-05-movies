import React from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

import { Button, ButtonSection } from './Button.styles';

const Buttons = ({ page, total, onClick }) => {
  return (
    <ButtonSection>
      <Button disabled={page === 1} name="dec" onClick={onClick}>
        <AiOutlineCaretLeft />
        Prev Page
      </Button>
      <Button
        disabled={Math.ceil(total / (page * 20)) < 1}
        name="inc"
        onClick={onClick}
      >
        Next Page <AiOutlineCaretRight />
      </Button>
    </ButtonSection>
  );
};

export default Buttons;
