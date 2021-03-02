cube(`PgCast`, {
  sql: `SELECT * FROM pg_catalog.pg_cast`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid]
    }
  },
  
  dimensions: {
    castmethod: {
      sql: `castmethod`,
      type: `string`
    },
    
    casttarget: {
      sql: `casttarget`,
      type: `string`
    },
    
    castfunc: {
      sql: `castfunc`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    castsource: {
      sql: `castsource`,
      type: `string`
    },
    
    castcontext: {
      sql: `castcontext`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
