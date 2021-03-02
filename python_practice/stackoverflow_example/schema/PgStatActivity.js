cube(`PgStatActivity`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_activity`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [datname, clientHostname, applicationName, backendXid, usename, usesysid, datid]
    }
  },
  
  dimensions: {
    backendXmin: {
      sql: `backend_xmin`,
      type: `string`
    },
    
    datname: {
      sql: `datname`,
      type: `string`
    },
    
    waitEvent: {
      sql: `wait_event`,
      type: `string`
    },
    
    clientHostname: {
      sql: `client_hostname`,
      type: `string`
    },
    
    applicationName: {
      sql: `application_name`,
      type: `string`
    },
    
    clientAddr: {
      sql: `client_addr`,
      type: `string`
    },
    
    backendXid: {
      sql: `backend_xid`,
      type: `string`
    },
    
    backendType: {
      sql: `backend_type`,
      type: `string`
    },
    
    usename: {
      sql: `usename`,
      type: `string`
    },
    
    query: {
      sql: `query`,
      type: `string`
    },
    
    usesysid: {
      sql: `usesysid`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    datid: {
      sql: `datid`,
      type: `string`
    },
    
    waitEventType: {
      sql: `wait_event_type`,
      type: `string`
    },
    
    backendStart: {
      sql: `backend_start`,
      type: `time`
    },
    
    xactStart: {
      sql: `xact_start`,
      type: `time`
    },
    
    queryStart: {
      sql: `query_start`,
      type: `time`
    },
    
    stateChange: {
      sql: `state_change`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
