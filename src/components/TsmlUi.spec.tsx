import { act, render } from '@testing-library/react';
import TsmlUI from './TsmlUI';

describe('<TsmlUI />', () => {
  it('renders', () => {
    act(() => {
      const { container } = render(
        <TsmlUI
          json="https://sheets.code4recovery.org/storage/12Ga8uwMG4WJ8pZ_SEU7vNETp_aQZ-2yNVsYDFqIwHyE.json"
          mapbox="abc.123"
          timezone="America/New_York"
        />
      );
      expect(container).toBeTruthy();
    });
  });
});
