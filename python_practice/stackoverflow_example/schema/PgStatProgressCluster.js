cube(`PgStatProgressCluster`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_progress_cluster`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [datid, clusterIndexRelid, datname, relid]
    },
    
    indexRebuildCount: {
      sql: `index_rebuild_count`,
      type: `sum`
    },
    
    heapBlksTotal: {
      sql: `heap_blks_total`,
      type: `sum`
    }
  },
  
  dimensions: {
    datid: {
      sql: `datid`,
      type: `string`
    },
    
    clusterIndexRelid: {
      sql: `cluster_index_relid`,
      type: `string`
    },
    
    phase: {
      sql: `phase`,
      type: `string`
    },
    
    command: {
      sql: `command`,
      type: `string`
    },
    
    datname: {
      sql: `datname`,
      type: `string`
    },
    
    relid: {
      sql: `relid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
