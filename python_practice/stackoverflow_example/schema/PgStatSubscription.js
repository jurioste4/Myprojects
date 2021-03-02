cube(`PgStatSubscription`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_subscription`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [subname, subid, relid]
    }
  },
  
  dimensions: {
    receivedLsn: {
      sql: `received_lsn`,
      type: `string`
    },
    
    subname: {
      sql: `subname`,
      type: `string`
    },
    
    subid: {
      sql: `subid`,
      type: `string`
    },
    
    relid: {
      sql: `relid`,
      type: `string`
    },
    
    latestEndLsn: {
      sql: `latest_end_lsn`,
      type: `string`
    },
    
    latestEndTime: {
      sql: `latest_end_time`,
      type: `time`
    },
    
    lastMsgReceiptTime: {
      sql: `last_msg_receipt_time`,
      type: `time`
    },
    
    lastMsgSendTime: {
      sql: `last_msg_send_time`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
