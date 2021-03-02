cube(`PgCursors`, {
  sql: `SELECT * FROM pg_catalog.pg_cursors`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name]
    }
  },
  
  dimensions: {
    isScrollable: {
      sql: `is_scrollable`,
      type: `string`
    },
    
    statement: {
      sql: `statement`,
      type: `string`
    },
    
    isHoldable: {
      sql: `is_holdable`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    isBinary: {
      sql: `is_binary`,
      type: `string`
    },
    
    creationTime: {
      sql: `creation_time`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
