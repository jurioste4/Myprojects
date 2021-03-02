cube(`PgHbaFileRules`, {
  sql: `SELECT * FROM pg_catalog.pg_hba_file_rules`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [userName]
    },
    
    lineNumber: {
      sql: `line_number`,
      type: `sum`
    }
  },
  
  dimensions: {
    authMethod: {
      sql: `auth_method`,
      type: `string`
    },
    
    netmask: {
      sql: `netmask`,
      type: `string`
    },
    
    options: {
      sql: `options`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    error: {
      sql: `error`,
      type: `string`
    },
    
    database: {
      sql: `database`,
      type: `string`
    },
    
    userName: {
      sql: `user_name`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
