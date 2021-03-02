cube(`PgRewrite`, {
  sql: `SELECT * FROM pg_catalog.pg_rewrite`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid, rulename]
    }
  },
  
  dimensions: {
    evAction: {
      sql: `ev_action`,
      type: `string`
    },
    
    isInstead: {
      sql: `is_instead`,
      type: `string`
    },
    
    evQual: {
      sql: `ev_qual`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    evType: {
      sql: `ev_type`,
      type: `string`
    },
    
    evClass: {
      sql: `ev_class`,
      type: `string`
    },
    
    rulename: {
      sql: `rulename`,
      type: `string`
    },
    
    evEnabled: {
      sql: `ev_enabled`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
