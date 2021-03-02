cube(`PgSettings`, {
  sql: `SELECT * FROM pg_catalog.pg_settings`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name]
    }
  },
  
  dimensions: {
    setting: {
      sql: `setting`,
      type: `string`
    },
    
    enumvals: {
      sql: `enumvals`,
      type: `string`
    },
    
    source: {
      sql: `source`,
      type: `string`
    },
    
    category: {
      sql: `category`,
      type: `string`
    },
    
    unit: {
      sql: `unit`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    resetVal: {
      sql: `reset_val`,
      type: `string`
    },
    
    maxVal: {
      sql: `max_val`,
      type: `string`
    },
    
    shortDesc: {
      sql: `short_desc`,
      type: `string`
    },
    
    bootVal: {
      sql: `boot_val`,
      type: `string`
    },
    
    extraDesc: {
      sql: `extra_desc`,
      type: `string`
    },
    
    vartype: {
      sql: `vartype`,
      type: `string`
    },
    
    context: {
      sql: `context`,
      type: `string`
    },
    
    pendingRestart: {
      sql: `pending_restart`,
      type: `string`
    },
    
    minVal: {
      sql: `min_val`,
      type: `string`
    },
    
    sourcefile: {
      sql: `sourcefile`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
