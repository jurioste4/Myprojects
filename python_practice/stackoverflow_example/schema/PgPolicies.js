cube(`PgPolicies`, {
  sql: `SELECT * FROM pg_catalog.pg_policies`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [tablename, schemaname, policyname]
    }
  },
  
  dimensions: {
    roles: {
      sql: `roles`,
      type: `string`
    },
    
    tablename: {
      sql: `tablename`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    permissive: {
      sql: `permissive`,
      type: `string`
    },
    
    policyname: {
      sql: `policyname`,
      type: `string`
    },
    
    qual: {
      sql: `qual`,
      type: `string`
    },
    
    withCheck: {
      sql: `with_check`,
      type: `string`
    },
    
    cmd: {
      sql: `cmd`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
