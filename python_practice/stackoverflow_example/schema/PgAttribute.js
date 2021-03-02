cube(`PgAttribute`, {
  sql: `SELECT * FROM pg_catalog.pg_attribute`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [attidentity, attrelid, atttypid, attname]
    },
    
    attinhcount: {
      sql: `attinhcount`,
      type: `sum`
    }
  },
  
  dimensions: {
    attalign: {
      sql: `attalign`,
      type: `string`
    },
    
    attisdropped: {
      sql: `attisdropped`,
      type: `string`
    },
    
    attidentity: {
      sql: `attidentity`,
      type: `string`
    },
    
    atthasdef: {
      sql: `atthasdef`,
      type: `string`
    },
    
    attrelid: {
      sql: `attrelid`,
      type: `string`
    },
    
    atttypid: {
      sql: `atttypid`,
      type: `string`
    },
    
    attacl: {
      sql: `attacl`,
      type: `string`
    },
    
    attislocal: {
      sql: `attislocal`,
      type: `string`
    },
    
    attnotnull: {
      sql: `attnotnull`,
      type: `string`
    },
    
    attstorage: {
      sql: `attstorage`,
      type: `string`
    },
    
    attname: {
      sql: `attname`,
      type: `string`
    },
    
    attoptions: {
      sql: `attoptions`,
      type: `string`
    },
    
    attfdwoptions: {
      sql: `attfdwoptions`,
      type: `string`
    },
    
    atthasmissing: {
      sql: `atthasmissing`,
      type: `string`
    },
    
    attcollation: {
      sql: `attcollation`,
      type: `string`
    },
    
    attgenerated: {
      sql: `attgenerated`,
      type: `string`
    },
    
    attbyval: {
      sql: `attbyval`,
      type: `string`
    },
    
    attmissingval: {
      sql: `attmissingval`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
