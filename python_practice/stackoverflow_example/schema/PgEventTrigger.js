cube(`PgEventTrigger`, {
  sql: `SELECT * FROM pg_catalog.pg_event_trigger`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid, evtname, evtfoid]
    }
  },
  
  dimensions: {
    evtowner: {
      sql: `evtowner`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    evtevent: {
      sql: `evtevent`,
      type: `string`
    },
    
    evtname: {
      sql: `evtname`,
      type: `string`
    },
    
    evtfoid: {
      sql: `evtfoid`,
      type: `string`
    },
    
    evtenabled: {
      sql: `evtenabled`,
      type: `string`
    },
    
    evttags: {
      sql: `evttags`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
