cube(`PgRules`, {
  sql: `SELECT * FROM pg_catalog.pg_rules`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [tablename, rulename, schemaname]
    }
  },
  
  dimensions: {
    tablename: {
      sql: `tablename`,
      type: `string`
    },
    
    rulename: {
      sql: `rulename`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    definition: {
      sql: `definition`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
