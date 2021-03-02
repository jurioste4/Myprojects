cube(`PgTrigger`, {
  sql: `SELECT * FROM pg_catalog.pg_trigger`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [tgconstrrelid, tgrelid, tgconstrindid, tgname, oid, tgfoid]
    }
  },
  
  dimensions: {
    tgnewtable: {
      sql: `tgnewtable`,
      type: `string`
    },
    
    tgoldtable: {
      sql: `tgoldtable`,
      type: `string`
    },
    
    tgisinternal: {
      sql: `tgisinternal`,
      type: `string`
    },
    
    tgenabled: {
      sql: `tgenabled`,
      type: `string`
    },
    
    tgconstraint: {
      sql: `tgconstraint`,
      type: `string`
    },
    
    tgconstrrelid: {
      sql: `tgconstrrelid`,
      type: `string`
    },
    
    tgargs: {
      sql: `tgargs`,
      type: `string`
    },
    
    tginitdeferred: {
      sql: `tginitdeferred`,
      type: `string`
    },
    
    tgrelid: {
      sql: `tgrelid`,
      type: `string`
    },
    
    tgdeferrable: {
      sql: `tgdeferrable`,
      type: `string`
    },
    
    tgconstrindid: {
      sql: `tgconstrindid`,
      type: `string`
    },
    
    tgname: {
      sql: `tgname`,
      type: `string`
    },
    
    tgattr: {
      sql: `tgattr`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    tgqual: {
      sql: `tgqual`,
      type: `string`
    },
    
    tgfoid: {
      sql: `tgfoid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
