import { stringToHex } from '@polkadot/util'
import { Transaction } from 'src/transactions/entity/transaction.entity'

export const mockTransaction = {
  hash: '0x055878018de242a21b7bd4b9512f4c24217da75ab2b9bf4eb93e95247b1a8f43',
  blockHash: '0x5721a1e39a8097a6aa312be44baa46d869075d1bd94cf45410d99b113cc68af5',
  method: 'call',
  section: 'contracts',
  signature:
    '0xdcd2f242d04cf19bf4695606a4244da9c7ab1d7a71153bcc3010909294dcb633e14841e833f35de113f8400b9687f10b93a27d3940926ba434318a7fc639f986',
  signer: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
  nonce: 37,
  tip: 0,
  createdDate: '2022-08-25 23:42:49.006343',
}

export const mockTransactions = [
  {
    hash: '0x0b359cb94c8a6a686a05e0368b4335a0c89fffb171c01eb7bc1c8bd72a530081',
    blockHash: '0x7e56e25320500d773f8c2a04f4376551c1bb978b21789a02fdb1f038f9a360b8',
    method: 'call',
    section: 'contracts',
    signature:
      '0xdcd2f242d04cf19bf4695606a4244da9c7ab1d7a71153bcc3010909294dcb633e14841e833f35de113f8400b9687f10b93a27d3940926ba434318a7fc639f986',
    signer: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
    nonce: 33,
    tip: 0,
    createdDate: '2022-08-25 22:49:21.987641',
  },
  {
    hash: '0x0baa3c53a333f8ec374b228ced770a9fff8de8ed007bc3d678717e04daed3d5b',
    blockHash: '0x0ed44ce6539552a4171dea020a79cdc6aebd58e93cd5e283c234f6357cee70c6',
    method: 'call',
    section: 'contracts',
    signature:
      '0x4eb9be0d2604225259ca3a0f183d424122f0fc6e2694e5d2f161f1c82b14fd5079ca525f9d89b1dbbfce666cbcf4ee843787f07c15993a26cb87ca24573bc087',
    signer: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
    nonce: 32,
    tip: 0,
    createdDate: '2022-08-25 22:49:21.96569',
  },
]

export const mockExtrinsics = [
  {
    hash: stringToHex('0x01c780fccc47dc4e9652180876a8267dc9f9dd501ed249f077e32c1653a89f2a'),
    nonce: {
      toNumber: () => 0,
    },
    signature: stringToHex(
      '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    ),
    signer: '5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM',
    tip: {
      toNumber: () => 0,
    },
    method: {
      method: 'set',
      section: 'timestamp',
    },
  },
  {
    hash: stringToHex('0x3aa34206050aa5eca76715ba2a4d05ef5bbe91e173b202b2c7b657cb885b9d06'),
    nonce: {
      toNumber: () => 4,
    },
    signature: stringToHex(
      '0x984c98e3d74fcc35ddc5397282d282dcfda496ae95cb98f4e7d6d22125ec1e7cf03dc3f6fab3add1763bec4b8ee01346b198804b4faaaa1b88d37c5dbc9ca98b',
    ),
    signer: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
    tip: {
      toNumber: () => 0,
    },
    method: {
      method: 'call',
      section: 'timestamp',
    },
  },
]

const mockTransaction1 = new Transaction()
mockTransaction1.hash = '0x01c780fccc47dc4e9652180876a8267dc9f9dd501ed249f077e32c1653a89f2a'
mockTransaction1.blockHash = '0xffcfae3ecc9ab7b79fc0cd451dad35477a32219b219b29584b968826ac04c1a1'
mockTransaction1.nonce = 0
mockTransaction1.signature =
  '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
mockTransaction1.signer = '5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM'
mockTransaction1.tip = 0
mockTransaction1.method = 'set'
mockTransaction1.section = 'timestamp'

const mockTransaction2 = new Transaction()
mockTransaction2.hash = '0x3aa34206050aa5eca76715ba2a4d05ef5bbe91e173b202b2c7b657cb885b9d06'
mockTransaction2.blockHash = '0xffcfae3ecc9ab7b79fc0cd451dad35477a32219b219b29584b968826ac04c1a1'
mockTransaction2.nonce = 4
mockTransaction2.signature =
  '0x984c98e3d74fcc35ddc5397282d282dcfda496ae95cb98f4e7d6d22125ec1e7cf03dc3f6fab3add1763bec4b8ee01346b198804b4faaaa1b88d37c5dbc9ca98b'
mockTransaction2.signer = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'
mockTransaction2.tip = 0
mockTransaction2.method = 'call'
mockTransaction2.section = 'timestamp'

export const mockSavedTransactions = [mockTransaction1, mockTransaction2]
