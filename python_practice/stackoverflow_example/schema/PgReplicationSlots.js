cube(`PgReplicationSlots`, {
  sql: `SELECT * FROM pg_catalog.pg_replication_slots`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [datoid, slotName]
    }
  },
  
  dimensions: {
    xmin: {
      sql: `xmin`,
      type: `string`
    },
    
    datoid: {
      sql: `datoid`,
      type: `string`
    },
    
    confirmedFlushLsn: {
      sql: `confirmed_flush_lsn`,
      type: `string`
    },
    
    restartLsn: {
      sql: `restart_lsn`,
      type: `string`
    },
    
    slotName: {
      sql: `slot_name`,
      type: `string`
    },
    
    plugin: {
      sql: `plugin`,
      type: `string`
    },
    
    database: {
      sql: `database`,
      type: `string`
    },
    
    slotType: {
      sql: `slot_type`,
      type: `string`
    },
    
    catalogXmin: {
      sql: `catalog_xmin`,
      type: `string`
    },
    
    active: {
      sql: `active`,
      type: `string`
    },
    
    temporary: {
      sql: `temporary`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
