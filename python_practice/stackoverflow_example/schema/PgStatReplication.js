cube(`PgStatReplication`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_replication`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [applicationName, usename, usesysid, clientHostname]
    }
  },
  
  dimensions: {
    writeLsn: {
      sql: `write_lsn`,
      type: `string`
    },
    
    clientAddr: {
      sql: `client_addr`,
      type: `string`
    },
    
    backendXmin: {
      sql: `backend_xmin`,
      type: `string`
    },
    
    applicationName: {
      sql: `application_name`,
      type: `string`
    },
    
    replayLsn: {
      sql: `replay_lsn`,
      type: `string`
    },
    
    usename: {
      sql: `usename`,
      type: `string`
    },
    
    syncState: {
      sql: `sync_state`,
      type: `string`
    },
    
    flushLsn: {
      sql: `flush_lsn`,
      type: `string`
    },
    
    sentLsn: {
      sql: `sent_lsn`,
      type: `string`
    },
    
    usesysid: {
      sql: `usesysid`,
      type: `string`
    },
    
    clientHostname: {
      sql: `client_hostname`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    replyTime: {
      sql: `reply_time`,
      type: `time`
    },
    
    backendStart: {
      sql: `backend_start`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
