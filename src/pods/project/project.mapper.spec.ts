
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapEmployeeSummaryListFromApiToVm } from '../project/project.mapper';
import { mapProjectFromApiToVm } from '../project/project.mapper';

describe('project-mapper spec', () => {
  describe('mapper spec', () => {
    it('Should return empty array when it feeds api equal undefined',
     () => {
      // ARRANGE
      const employeeSummary: apiModel.EmployeeSummary[] = undefined;

      // ACT
      const result: viewModel.EmployeeSummary[] =
      mapEmployeeSummaryListFromApiToVm(employeeSummary);

      // ASSERT
      expect(result).toEqual([]);
    });
  });

  describe('mapper spec', () => {
    it('Should return empty array when it feeds api equal null',
     () => {
      // ARRANGE
      const employeeSummary: apiModel.EmployeeSummary[] = null;

      // ACT
      const result: viewModel.EmployeeSummary[] =
      mapEmployeeSummaryListFromApiToVm(employeeSummary);

      // ASSERT
      expect(result).toEqual([]);
    });
  });

  describe('mapper spec', () => {
    it('Should return empty array when it feeds api equal empty array',
     () => {
      // ARRANGE
      const employeeSummary: apiModel.EmployeeSummary[] = [];

      // ACT
      const result: viewModel.EmployeeSummary[] =
      mapEmployeeSummaryListFromApiToVm(employeeSummary);

      // ASSERT
      expect(result).toEqual([]);
    });
  });

  describe('project-mapper spec', () => {
    describe('project spec', () => {
      it('Should return one mapped item when it feeds project with one item', () => {
        // ARRANGE
        const employeeSummary: apiModel.EmployeeSummary[] = [
          {
            id: '1',
            isAssigned:true,
            employeeName: 'Andrés',
        },
      ];

        // ACT
        const result: viewModel.EmployeeSummary[] =
        mapEmployeeSummaryListFromApiToVm(employeeSummary);

        // ASSERT
        const expectResult: viewModel.EmployeeSummary[] = [
          {
            id: '1',
            isAssigned:true,
            employeeName: 'Andrés',
        },
      ];
        expect(result).toEqual(expectResult);
      });
    });
  });

});
