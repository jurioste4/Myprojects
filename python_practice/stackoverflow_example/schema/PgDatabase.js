cube(`PgDatabase`, {
  sql: `SELECT * FROM pg_catalog.pg_database`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [datname, datfrozenxid, datminmxid, oid, datlastsysoid]
    }
  },
  
  dimensions: {
    datdba: {
      sql: `datdba`,
      type: `string`
    },
    
    datname: {
      sql: `datname`,
      type: `string`
    },
    
    datfrozenxid: {
      sql: `datfrozenxid`,
      type: `string`
    },
    
    datcollate: {
      sql: `datcollate`,
      type: `string`
    },
    
    dattablespace: {
      sql: `dattablespace`,
      type: `string`
    },
    
    datminmxid: {
      sql: `datminmxid`,
      type: `string`
    },
    
    datacl: {
      sql: `datacl`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    datlastsysoid: {
      sql: `datlastsysoid`,
      type: `string`
    },
    
    datctype: {
      sql: `datctype`,
      type: `string`
    },
    
    datallowconn: {
      sql: `datallowconn`,
      type: `string`
    },
    
    datistemplate: {
      sql: `datistemplate`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
