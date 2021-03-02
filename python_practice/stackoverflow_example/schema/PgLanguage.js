cube(`PgLanguage`, {
  sql: `SELECT * FROM pg_catalog.pg_language`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [lanname, oid, lanvalidator, lanplcallfoid]
    }
  },
  
  dimensions: {
    lanpltrusted: {
      sql: `lanpltrusted`,
      type: `string`
    },
    
    lanname: {
      sql: `lanname`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    lanispl: {
      sql: `lanispl`,
      type: `string`
    },
    
    lanacl: {
      sql: `lanacl`,
      type: `string`
    },
    
    lanowner: {
      sql: `lanowner`,
      type: `string`
    },
    
    laninline: {
      sql: `laninline`,
      type: `string`
    },
    
    lanvalidator: {
      sql: `lanvalidator`,
      type: `string`
    },
    
    lanplcallfoid: {
      sql: `lanplcallfoid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
