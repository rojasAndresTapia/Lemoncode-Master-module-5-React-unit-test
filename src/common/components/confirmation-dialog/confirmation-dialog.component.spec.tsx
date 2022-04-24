import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

describe('confirmation dialog component specs', () => {
  //Arrange
  const props = {
    isOpen: true,
    labels: {
      closeButton: 'cancel',
      acceptButton: 'accept',
    },
    title: 'Eliminar Proyecto',
    onClose: jest.fn(),
    onAccept: jest.fn()
  };

  it('Should be rendered', () => {
    //Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogTitle = screen.getByText('Eliminar Proyecto');

    //Assert
    expect(dialogTitle).toBeInTheDocument();
  });

  it('Should call a function when cancel button is clicked', () => {
    //Act
    render(<ConfirmationDialogComponent {...props} />);

    const cancelButton = screen.getByText('cancel');
    fireEvent.click(cancelButton);

    //Assert
    expect(props.onClose).toHaveBeenCalled();
  });

  it('Should call a function when accept button is clicked', () => {
    //Act
    render(<ConfirmationDialogComponent {...props} />);

    const confirmButton = screen.getByText('accept');
    fireEvent.click(confirmButton);

    //Assert
    expect(props.onAccept).toHaveBeenCalled();
  });
});
