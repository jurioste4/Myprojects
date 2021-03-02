cube(`PgInitPrivs`, {
  sql: `SELECT * FROM pg_catalog.pg_init_privs`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [objoid, classoid]
    }
  },
  
  dimensions: {
    privtype: {
      sql: `privtype`,
      type: `string`
    },
    
    objoid: {
      sql: `objoid`,
      type: `string`
    },
    
    classoid: {
      sql: `classoid`,
      type: `string`
    },
    
    initprivs: {
      sql: `initprivs`,
      type: `string`
    }
  },
  
  dataSource: `default`
});