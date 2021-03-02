cube(`PgDefaultAcl`, {
  sql: `SELECT * FROM pg_catalog.pg_default_acl`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid, defaclnamespace]
    }
  },
  
  dimensions: {
    defaclacl: {
      sql: `defaclacl`,
      type: `string`
    },
    
    defaclrole: {
      sql: `defaclrole`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    defaclobjtype: {
      sql: `defaclobjtype`,
      type: `string`
    },
    
    defaclnamespace: {
      sql: `defaclnamespace`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
