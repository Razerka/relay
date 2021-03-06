/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 * @emails oncall+relay
 */

'use strict';

const RelayInMemoryRecordSource = require('../RelayInMemoryRecordSource');
const RelayModernEnvironment = require('../RelayModernEnvironment');
const RelayModernStore = require('../RelayModernStore');
const RelayNetwork = require('../../network/RelayNetwork');

describe('getStore()', () => {
  it('returns the store passed to the constructor', () => {
    const source = new RelayInMemoryRecordSource();
    const store = new RelayModernStore(source);
    const environment = new RelayModernEnvironment({
      network: RelayNetwork.create(jest.fn()),
      store,
    });
    expect(environment.getStore()).toBe(store);
  });
});
