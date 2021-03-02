cube(`PgPartitionedTable`, {
  sql: `SELECT * FROM pg_catalog.pg_partitioned_table`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [partdefid, partrelid]
    }
  },
  
  dimensions: {
    partcollation: {
      sql: `partcollation`,
      type: `string`
    },
    
    partexprs: {
      sql: `partexprs`,
      type: `string`
    },
    
    partclass: {
      sql: `partclass`,
      type: `string`
    },
    
    partattrs: {
      sql: `partattrs`,
      type: `string`
    },
    
    partstrat: {
      sql: `partstrat`,
      type: `string`
    },
    
    partdefid: {
      sql: `partdefid`,
      type: `string`
    },
    
    partrelid: {
      sql: `partrelid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
