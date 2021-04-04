const Airtable = require("airtable");

const base = new Airtable({ apiKey: "keyloGFGjDynz8Y9k" }).base(
  "appnqDEaiNjZDwbku"
);

export const table1 = base("Table 1");
export const tableHome = base("Game Zoom Home");
export const tableShop = base("Game Zoom Shop");
export const tableDetail = base("Game Zoom Detail");

// 获取第一页的所有记录 select
export const getFirstPageRecords = async (table) => {
  const records = await table.select().firstPage();
  // console.log(records);
  return records;
};

// 获取第一个的 max 条记录
export const getRecords = async (table, max) => {
  const records = await table
    .select({
      maxRecords: max,
      view: "Grid view",
    })
    .firstPage();
  // console.log(records);
  return records;
};

// 查找对应 id 的记录 find
export const getRecordsById = async (table, id) => {
  const record = await table.find(id);
  console.log(minifyRecord(record));
};

// 创建记录 create
export const createRecord = async (table, fields) => {
  const createdRecord = await table.create(fields);
  console.log(minifyRecord(createdRecord));
};

// 更新记录 update
export const updateRecord = async (table, id, fields) => {
  const updateRecord = await table.update(id, fields);
  console.log(minifyRecord(updateRecord));
};

// 删除记录 destroy
export const deleteRecord = async (table, id) => {
  try {
    const deleteRecord = await table.destroy(id);
    console.log(minifyRecord(deleteRecord));
  } catch (err) {
    console.error(err);
  }
};

// 整理返回的记录,让它最小化
const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};
