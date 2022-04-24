import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { createEmptyLookup, Lookup } from '../../../common/models';
import { useConfirmationDialog } from '../confirmation-dialog/confirmation-dialog.hook';
import { Employee } from 'pods/employee/employee.vm';
import { getEmployeeById } from 'pods/employee/api/employee.api';

describe('confirmation dialog spec', () => {
  it(' should return empty item to delete when render component', () => {
    //Arrange

    //Act
    const { result } = renderHook(() => useConfirmationDialog());

    //Assert
    const defaultItemToDelete: Lookup = { id: '', name: '' };
    expect(result.current.itemToDelete).toEqual(defaultItemToDelete);
  });

  it(' should return false on boolean state for confirmation dialog', () => {
    //Arrange

    //Act
    const { result } = renderHook(() => useConfirmationDialog());

    //Assert

    expect(result.current.isOpen).toEqual(false);
  });

  // it('should call a function when button is clicked', () => {
  //   //Arrange
  //   const employee: Employee = {
  //     id: '1',
  //     name: 'Carlos',
  //     email: '',
  //     isActive: true,
  //     projects: [],
  //   };
  //   //Stub
  //   const stub = jest
  //     .spyOn(window, 'getEmployeeById')
  //     .mockResolvedValue(employee);

  //   //Act
  //   const { result } = renderHook(() => useConfirmationDialog(spy));

  //   //Assert

  //   expect(result.current.isOpen).toEqual(false);
  // });
});
