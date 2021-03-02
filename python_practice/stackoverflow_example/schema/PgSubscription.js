cube(`PgSubscription`, {
  sql: `SELECT * FROM pg_catalog.pg_subscription`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [subslotname, subdbid, oid, subname]
    }
  },
  
  dimensions: {
    subsynccommit: {
      sql: `subsynccommit`,
      type: `string`
    },
    
    subconninfo: {
      sql: `subconninfo`,
      type: `string`
    },
    
    subslotname: {
      sql: `subslotname`,
      type: `string`
    },
    
    subdbid: {
      sql: `subdbid`,
      type: `string`
    },
    
    subenabled: {
      sql: `subenabled`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    subowner: {
      sql: `subowner`,
      type: `string`
    },
    
    subpublications: {
      sql: `subpublications`,
      type: `string`
    },
    
    subname: {
      sql: `subname`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
