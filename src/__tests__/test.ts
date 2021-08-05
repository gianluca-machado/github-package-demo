import { PlaformCustomerConnectorConfiguration } from '../index';

test('confguration', () => {
  expect(PlaformCustomerConnectorConfiguration()).toBe(process.env.NODE_ENV);
});
