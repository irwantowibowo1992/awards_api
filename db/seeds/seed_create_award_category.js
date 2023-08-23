exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('award_category').del();
  await knex('award_category').insert([
    {
      id: '7ac1f335-3c85-42a5-988c-92a040f8063a',
      name: 'Voucher',
    },
    {
      id: 'faff1cf9-f73c-4856-88a5-b11f313d237c',
      name: 'Product',
    },
    {
      id: '524b5c20-2b93-436a-91ee-e0d2e58dca2c',
      name: 'Other',
    },
  ]);
};
