cube(`PgSubscriptionRel`, {
  sql: `SELECT * FROM pg_catalog.pg_subscription_rel`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [srrelid, srsubid]
    }
  },
  
  dimensions: {
    srrelid: {
      sql: `srrelid`,
      type: `string`
    },
    
    srsubstate: {
      sql: `srsubstate`,
      type: `string`
    },
    
    srsublsn: {
      sql: `srsublsn`,
      type: `string`
    },
    
    srsubid: {
      sql: `srsubid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
