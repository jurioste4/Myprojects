cube(`PgConstraint`, {
  sql: `SELECT * FROM pg_catalog.pg_constraint`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [contypid, oid, connamespace, conparentid, confrelid, conname, conrelid, convalidated, conindid]
    },
    
    coninhcount: {
      sql: `coninhcount`,
      type: `sum`
    }
  },
  
  dimensions: {
    confkey: {
      sql: `confkey`,
      type: `string`
    },
    
    conkey: {
      sql: `conkey`,
      type: `string`
    },
    
    contypid: {
      sql: `contypid`,
      type: `string`
    },
    
    conislocal: {
      sql: `conislocal`,
      type: `string`
    },
    
    contype: {
      sql: `contype`,
      type: `string`
    },
    
    confdeltype: {
      sql: `confdeltype`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    connamespace: {
      sql: `connamespace`,
      type: `string`
    },
    
    conppeqop: {
      sql: `conppeqop`,
      type: `string`
    },
    
    conparentid: {
      sql: `conparentid`,
      type: `string`
    },
    
    connoinherit: {
      sql: `connoinherit`,
      type: `string`
    },
    
    confrelid: {
      sql: `confrelid`,
      type: `string`
    },
    
    conname: {
      sql: `conname`,
      type: `string`
    },
    
    confupdtype: {
      sql: `confupdtype`,
      type: `string`
    },
    
    condeferrable: {
      sql: `condeferrable`,
      type: `string`
    },
    
    condeferred: {
      sql: `condeferred`,
      type: `string`
    },
    
    conrelid: {
      sql: `conrelid`,
      type: `string`
    },
    
    convalidated: {
      sql: `convalidated`,
      type: `string`
    },
    
    conffeqop: {
      sql: `conffeqop`,
      type: `string`
    },
    
    conindid: {
      sql: `conindid`,
      type: `string`
    },
    
    conbin: {
      sql: `conbin`,
      type: `string`
    },
    
    conexclop: {
      sql: `conexclop`,
      type: `string`
    },
    
    confmatchtype: {
      sql: `confmatchtype`,
      type: `string`
    },
    
    conpfeqop: {
      sql: `conpfeqop`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
