cube(`PgCollation`, {
  sql: `SELECT * FROM pg_catalog.pg_collation`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [collname, collprovider, collnamespace, oid]
    }
  },
  
  dimensions: {
    collname: {
      sql: `collname`,
      type: `string`
    },
    
    collprovider: {
      sql: `collprovider`,
      type: `string`
    },
    
    collctype: {
      sql: `collctype`,
      type: `string`
    },
    
    collnamespace: {
      sql: `collnamespace`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    collowner: {
      sql: `collowner`,
      type: `string`
    },
    
    collversion: {
      sql: `collversion`,
      type: `string`
    },
    
    collisdeterministic: {
      sql: `collisdeterministic`,
      type: `string`
    },
    
    collcollate: {
      sql: `collcollate`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
