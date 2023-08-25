exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('award_image').del();
  await knex('award_image').insert([
    {
      award_id: 'fc2f74a7-5e3b-483c-8a68-40b9f7c66a71',
      image:
        'https://images.unsplash.com/photo-1514820720301-4c4790309f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    },
    {
      award_id: '285ba44b-fd0d-44b5-80f8-197835f6b8bd',
      image:
        'https://images.unsplash.com/photo-1536000999382-52cecfca7fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: '6d46d753-27ab-4764-8774-07f0e40fbaa6',
      image:
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: 'bd91f420-40d2-4372-8251-754b375dcc7e',
      image:
        'https://images.unsplash.com/photo-1604658243847-17375af581fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: '336fe678-8159-4173-8900-ec1016064b00',
      image:
        'https://images.unsplash.com/photo-1501743411739-de52ea0ce6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: '17e97daf-a409-427c-9ae8-1e7060ed5dc1',
      image:
        'https://images.unsplash.com/photo-1613826488249-b67eba609bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2014&q=80',
    },
    {
      award_id: '858a36f9-6fc0-4f4f-b1a0-bad928898a4b',
      image:
        'https://images.unsplash.com/photo-1580674287546-e5e105fb2541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: 'c1bd3dee-db76-423b-a25e-bf7ca2fcfe49',
      image:
        'https://images.unsplash.com/photo-1560801122-b59974a71aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80',
    },
    {
      award_id: '2a5cb043-97b1-41f7-9775-a42cae0d8aa0',
      image:
        'https://images.unsplash.com/photo-1628239502981-5d935cc887d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: '247524e5-38fb-4bfc-b06c-1faddd98fb72',
      image:
        'https://images.unsplash.com/photo-1642011626342-ed8e0d31afcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: '773ed3b2-d1b3-4c39-97d7-da78f6bbce0e',
      image:
        'https://plus.unsplash.com/premium_photo-1682309674226-fa47fc54568e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1824&q=80',
    },
    {
      award_id: '7101e957-b3b2-4ea7-a08f-5cdf486466dd',
      image:
        'https://images.unsplash.com/photo-1524672875191-f3e0c7dd6dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: 'f3ddbf31-6b94-4a1f-b3f4-ef48541aa14e',
      image:
        'https://images.unsplash.com/photo-1572467551143-a57f5de1f861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80',
    },
    {
      award_id: 'bed46d33-cb18-4f29-a9d2-b3cab3696b90',
      image:
        'https://images.unsplash.com/photo-1613825787641-2dbbd4f96a1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
      award_id: '006a449f-78e5-4242-821f-bcbf4676ca38',
      image:
        'https://images.unsplash.com/photo-1560264262-fb13f1b9fe74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: 'd1a854a3-d8ce-4d44-b52f-cb144008c054',
      image:
        'https://plus.unsplash.com/premium_photo-1663127214941-ecd2fe021ab1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1808&q=80',
    },
    {
      award_id: '618dbf87-0d34-4b6d-99e8-488e5db5b27b',
      image:
        'https://images.unsplash.com/photo-1591045211820-2fe94117fe18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1796&q=80',
    },
    {
      award_id: '16751ba4-351d-49df-b6f9-27e36774e308',
      image:
        'https://images.unsplash.com/photo-1646229326730-f7084ae43469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: '18233ed4-b91f-401c-bff2-19ae39e9d7a6',
      image:
        'https://plus.unsplash.com/premium_photo-1683749809341-23a70a91b195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: '0db06547-0a79-4e7d-91ae-8f2e2f8a0511',
      image:
        'https://plus.unsplash.com/premium_photo-1661457689950-45b72ee584e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80',
    },
    {
      award_id: '625c1c9f-5d97-4038-becd-3c4f6b5a46b4',
      image:
        'https://images.unsplash.com/photo-1533854775446-95c4609da544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: 'f9102a7f-3a02-489a-93f7-3b86f26e089d',
      image:
        'https://images.unsplash.com/photo-1570891836747-cb716943ce5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: 'acee1f28-908d-41b5-a816-74fde860542d',
      image:
        'https://images.unsplash.com/photo-1468231300737-ecd13d75ce6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1822&q=80',
    },
    {
      award_id: 'a1510002-ab57-46e7-9af3-5b30cd4deeff',
      image:
        'https://images.unsplash.com/photo-1633164962363-58fd218f7882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80',
    },
    {
      award_id: 'f9ac1116-9fa1-4726-860f-9b5e870572df',
      image:
        'https://plus.unsplash.com/premium_photo-1661541200487-2fa677b698ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    },
    {
      award_id: 'a6fd9f69-c366-42e9-8f9b-db643f765f5a',
      image:
        'https://images.unsplash.com/photo-1665074240972-fb19507f6ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: '8fbd127c-a290-403a-bb75-f553b7f7160a',
      image:
        'https://images.unsplash.com/photo-1679233825144-fc2f24322c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: '10b3cc61-51eb-4afd-b630-8e0c6fca35ae',
      image:
        'https://images.unsplash.com/photo-1677530965791-05a8ed64f8d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1955&q=80',
    },
    {
      award_id: '90ca3694-5e6e-4fa3-bf69-ad6136f2a7eb',
      image:
        'https://images.unsplash.com/photo-1647279271777-959fe19eae14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80',
    },
    {
      award_id: '90d83e65-26b6-4518-9fd7-1820437d566c',
      image:
        'https://images.unsplash.com/photo-1509005338684-c2fb376b91cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: '80acd219-dc53-4281-b581-42eb1f54a7ff',
      image:
        'https://images.unsplash.com/photo-1648928744943-5991dcba29ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: '677afab7-e071-4a73-a429-3e4d4128c439',
      image:
        'https://images.unsplash.com/photo-1525994449609-94f84bec86b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: '382ac1a0-1954-40b2-82fd-21231f432d90',
      image:
        'https://images.unsplash.com/photo-1602016082375-2eec3e992d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      award_id: '5ef11ea4-1401-4583-ae60-c291d93a49ac',
      image:
        'https://images.unsplash.com/flagged/photo-1568733279036-aaa3f1e235f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    },
    {
      award_id: '3b914fce-011c-4622-bd31-1f836b16bc9a',
      image:
        'https://images.unsplash.com/photo-1610081605535-7055eb1dc8c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
      award_id: 'e3ec8c5f-6906-4b5f-a5fa-9b4d25996fde',
      image:
        'https://images.unsplash.com/photo-1544390951-7b9e6547fb28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ]);
};
