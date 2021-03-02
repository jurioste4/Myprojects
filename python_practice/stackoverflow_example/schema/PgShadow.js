cube(`PgShadow`, {
  sql: `SELECT * FROM pg_catalog.pg_shadow`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [usesysid, usename, usecreatedb]
    }
  },
  
  dimensions: {
    usesysid: {
      sql: `usesysid`,
      type: `string`
    },
    
    userepl: {
      sql: `userepl`,
      type: `string`
    },
    
    usename: {
      sql: `usename`,
      type: `string`
    },
    
    usesuper: {
      sql: `usesuper`,
      type: `string`
    },
    
    useconfig: {
      sql: `useconfig`,
      type: `string`
    },
    
    usecreatedb: {
      sql: `usecreatedb`,
      type: `string`
    },
    
    usebypassrls: {
      sql: `usebypassrls`,
      type: `string`
    },
    
    passwd: {
      sql: `passwd`,
      type: `string`
    },
    
    valuntil: {
      sql: `valuntil`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
