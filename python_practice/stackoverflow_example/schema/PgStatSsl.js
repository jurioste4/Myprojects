cube(`PgStatSsl`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_ssl`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    clientDn: {
      sql: `client_dn`,
      type: `string`
    },
    
    compression: {
      sql: `compression`,
      type: `string`
    },
    
    ssl: {
      sql: `ssl`,
      type: `string`
    },
    
    cipher: {
      sql: `cipher`,
      type: `string`
    },
    
    issuerDn: {
      sql: `issuer_dn`,
      type: `string`
    },
    
    version: {
      sql: `version`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
