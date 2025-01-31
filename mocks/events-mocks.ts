import { numberToU8a } from '@polkadot/util'

export const mockEvents = [
  {
    id: '34709348-7d86-5bb3-81ce-4320b3fd1f4e',
    transactionHash: '0x993010df0772d4fc25cad8fd07de5696d46d28858c00aec3457a8041be81bcf1',
    index: '0x0703',
    section: 'contracts',
    method: 'ContractEmitted',
    topics:
      '[0x0045726332303a3a5472616e7366657200000000000000000000000000000000, 0x33766995fd9b44bd45f351b3abd7e5041960638db0075c84ab7af1a734e20d1b, 0x5445726332303a3a5472616e736665723a3a66726f6d00000000000000000000]',
    data: [
      '5C9QorN8S8X2Cwpa98cRevWR7YHmKqDGUPMDM3rZnLzWnRj9',
      '0x000001d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0000c52ebca2b1000000000000000000',
    ],
    createdDate: '2022-08-31 20:03:28.568881',
    contractAddress: '5C9QorN8S8X2Cwpa98cRevWR7YHmKqDGUPMDM3rZnLzWnRj9',
  },
  {
    id: '9a634dc2-bc75-5dfd-a804-18afcf91b065',
    transactionHash: '0x5d314cf3827604c4d07e7ebaa9372df2d8ede68a53acbf853535e249fbb1ea0a',
    index: '0x0703',
    section: 'contracts',
    method: 'ContractEmitted',
    topics:
      '[0x0045726332303a3a5472616e7366657200000000000000000000000000000000, 0x63c87cd1c4007df77d6b16ae28c5393bee3a62fb8577e38243a6f6f5a82c457f, 0xda2d695d3b5a304e0039e7fc4419c34fa0c1f239189c99bb72a6484f1634782b]',
    data: [
      '5C9QorN8S8X2Cwpa98cRevWR7YHmKqDGUPMDM3rZnLzWnRj9',
      '0x0001d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d01fe65717dad0447d715f660a0a58411de509b42e6efb8375f562f58a554d5860e0040e59c301200000000000000000000',
    ],
    createdDate: '2022-08-31 20:03:38.814484',
    contractAddress: '5C9QorN8S8X2Cwpa98cRevWR7YHmKqDGUPMDM3rZnLzWnRj9',
  },
]

export const mockEventHashes = [
  numberToU8a(
    '0x0001d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0190b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe2200203d88792d00000000000000000000' as any,
  ),
  numberToU8a(
    '0x0001d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d01be5ddb1579b72e84524fc29e78609e3caf42e85aa118ebfe0b0ad404b5bdd25f00602f46021400000000000000000000' as any,
  ),
]

export const mockRecords = [
  {
    phase: {
      index: 1,
      isApplyExtrinsic: true,
      asApplyExtrinsic: {
        eq: (index: unknown) => true,
      },
    },

    event: {
      method: 'ContractEmitted',
      data: `[
        "5C9QorN8S8X2Cwpa98cRevWR7YHmKqDGUPMDM3rZnLzWnRj9",
        "0x000001d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0000c52ebca2b1000000000000000000"
      ]`,
      section: '1',
      index: {
        toHex: () => '0x703',
      },
    },
    topics:
      '[0x0045726332303a3a5472616e7366657200000000000000000000000000000000, 0x33766995fd9b44bd45f351b3abd7e5041960638db0075c84ab7af1a734e20d1b, 0x5445726332303a3a5472616e736665723a3a66726f6d00000000000000000000]',
  },
  {
    phase: {
      index: 2,
      isApplyExtrinsic: true,
      asApplyExtrinsic: {
        eq: (index: unknown) => true,
      },
    },

    event: {
      method: 'ContractEmitted',
      data: `[
        "5C9QorN8S8X2Cwpa98cRevWR7YHmKqDGUPMDM3rZnLzWnRj9",
        "0x0001d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d01fe65717dad0447d715f660a0a58411de509b42e6efb8375f562f58a554d5860e0040e59c301200000000000000000000"
      ]`,
      section: '1',
      index: {
        toHex: () => '0x703',
      },
    },
    topics:
      '[0x0045726332303a3a5472616e7366657200000000000000000000000000000000, 0x63c87cd1c4007df77d6b16ae28c5393bee3a62fb8577e38243a6f6f5a82c457f, 0xda2d695d3b5a304e0039e7fc4419c34fa0c1f239189c99bb72a6484f1634782b]',
  },
]

export const mockDecodedEvent = {
  args: [
    {
      toString: () => '',
    },
    {
      toString: () => '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
    },
    {
      toString: () => '30000000',
    },
  ],
  event: {
    args: [
      {
        name: 'from',
        type: {
          info: 9,
          lookupIndex: 11,
          lookupName: undefined,
          type: 'Option<AccountId>',
          docs: [],
          namespace: 'Option',
        },
        toString: () => '',
      },
      {
        name: 'to',
        type: {
          info: 9,
          lookupIndex: 11,
          lookupName: undefined,
          type: 'Option<AccountId>',
          docs: [],
          namespace: 'Option',
        },
        toString: () => '',
      },
      {
        name: 'value',
        type: {
          info: 10,
          type: 'Balance',
        },
        toString: () => '',
      },
    ],
  },
}
