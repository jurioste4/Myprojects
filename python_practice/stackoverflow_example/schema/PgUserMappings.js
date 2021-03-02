cube(`PgUserMappings`, {
  sql: `SELECT * FROM pg_catalog.pg_user_mappings`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [srvname, umid, usename, srvid]
    }
  },
  
  dimensions: {
    umoptions: {
      sql: `umoptions`,
      type: `string`
    },
    
    srvname: {
      sql: `srvname`,
      type: `string`
    },
    
    umid: {
      sql: `umid`,
      type: `string`
    },
    
    umuser: {
      sql: `umuser`,
      type: `string`
    },
    
    usename: {
      sql: `usename`,
      type: `string`
    },
    
    srvid: {
      sql: `srvid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
