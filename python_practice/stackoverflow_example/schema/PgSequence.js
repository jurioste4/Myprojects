cube(`PgSequence`, {
  sql: `SELECT * FROM pg_catalog.pg_sequence`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [seqrelid, seqtypid]
    }
  },
  
  dimensions: {
    seqcycle: {
      sql: `seqcycle`,
      type: `string`
    },
    
    seqrelid: {
      sql: `seqrelid`,
      type: `string`
    },
    
    seqtypid: {
      sql: `seqtypid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
