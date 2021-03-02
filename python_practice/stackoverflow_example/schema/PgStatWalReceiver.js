cube(`PgStatWalReceiver`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_wal_receiver`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [slotName]
    }
  },
  
  dimensions: {
    receiveStartLsn: {
      sql: `receive_start_lsn`,
      type: `string`
    },
    
    slotName: {
      sql: `slot_name`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    receivedLsn: {
      sql: `received_lsn`,
      type: `string`
    },
    
    senderHost: {
      sql: `sender_host`,
      type: `string`
    },
    
    conninfo: {
      sql: `conninfo`,
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
