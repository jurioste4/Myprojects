cube(`PgProc`, {
  sql: `SELECT * FROM pg_catalog.pg_proc`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid, pronamespace, proname, proargnames]
    }
  },
  
  dimensions: {
    prolang: {
      sql: `prolang`,
      type: `string`
    },
    
    proisstrict: {
      sql: `proisstrict`,
      type: `string`
    },
    
    proowner: {
      sql: `proowner`,
      type: `string`
    },
    
    proparallel: {
      sql: `proparallel`,
      type: `string`
    },
    
    prosupport: {
      sql: `prosupport`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    proretset: {
      sql: `proretset`,
      type: `string`
    },
    
    proargmodes: {
      sql: `proargmodes`,
      type: `string`
    },
    
    pronamespace: {
      sql: `pronamespace`,
      type: `string`
    },
    
    probin: {
      sql: `probin`,
      type: `string`
    },
    
    proargtypes: {
      sql: `proargtypes`,
      type: `string`
    },
    
    proname: {
      sql: `proname`,
      type: `string`
    },
    
    proleakproof: {
      sql: `proleakproof`,
      type: `string`
    },
    
    prosecdef: {
      sql: `prosecdef`,
      type: `string`
    },
    
    prorettype: {
      sql: `prorettype`,
      type: `string`
    },
    
    proconfig: {
      sql: `proconfig`,
      type: `string`
    },
    
    provariadic: {
      sql: `provariadic`,
      type: `string`
    },
    
    procost: {
      sql: `procost`,
      type: `string`
    },
    
    proacl: {
      sql: `proacl`,
      type: `string`
    },
    
    proargnames: {
      sql: `proargnames`,
      type: `string`
    },
    
    prorows: {
      sql: `prorows`,
      type: `string`
    },
    
    protrftypes: {
      sql: `protrftypes`,
      type: `string`
    },
    
    prosrc: {
      sql: `prosrc`,
      type: `string`
    },
    
    prokind: {
      sql: `prokind`,
      type: `string`
    },
    
    proallargtypes: {
      sql: `proallargtypes`,
      type: `string`
    },
    
    provolatile: {
      sql: `provolatile`,
      type: `string`
    },
    
    proargdefaults: {
      sql: `proargdefaults`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
