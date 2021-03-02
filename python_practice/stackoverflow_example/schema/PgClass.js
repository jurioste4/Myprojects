cube(`PgClass`, {
  sql: `SELECT * FROM pg_catalog.pg_class`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [relname, oid, relnamespace, reltoastrelid, relminmxid, relfrozenxid, relreplident]
    }
  },
  
  dimensions: {
    relname: {
      sql: `relname`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    relhassubclass: {
      sql: `relhassubclass`,
      type: `string`
    },
    
    relnamespace: {
      sql: `relnamespace`,
      type: `string`
    },
    
    reltype: {
      sql: `reltype`,
      type: `string`
    },
    
    relhasindex: {
      sql: `relhasindex`,
      type: `string`
    },
    
    relpersistence: {
      sql: `relpersistence`,
      type: `string`
    },
    
    reltablespace: {
      sql: `reltablespace`,
      type: `string`
    },
    
    reltoastrelid: {
      sql: `reltoastrelid`,
      type: `string`
    },
    
    reloftype: {
      sql: `reloftype`,
      type: `string`
    },
    
    relhasrules: {
      sql: `relhasrules`,
      type: `string`
    },
    
    relispartition: {
      sql: `relispartition`,
      type: `string`
    },
    
    reltuples: {
      sql: `reltuples`,
      type: `string`
    },
    
    relacl: {
      sql: `relacl`,
      type: `string`
    },
    
    relrowsecurity: {
      sql: `relrowsecurity`,
      type: `string`
    },
    
    relam: {
      sql: `relam`,
      type: `string`
    },
    
    relfilenode: {
      sql: `relfilenode`,
      type: `string`
    },
    
    relminmxid: {
      sql: `relminmxid`,
      type: `string`
    },
    
    relrewrite: {
      sql: `relrewrite`,
      type: `string`
    },
    
    relfrozenxid: {
      sql: `relfrozenxid`,
      type: `string`
    },
    
    relowner: {
      sql: `relowner`,
      type: `string`
    },
    
    relisshared: {
      sql: `relisshared`,
      type: `string`
    },
    
    relhastriggers: {
      sql: `relhastriggers`,
      type: `string`
    },
    
    reloptions: {
      sql: `reloptions`,
      type: `string`
    },
    
    relforcerowsecurity: {
      sql: `relforcerowsecurity`,
      type: `string`
    },
    
    relreplident: {
      sql: `relreplident`,
      type: `string`
    },
    
    relispopulated: {
      sql: `relispopulated`,
      type: `string`
    },
    
    relpartbound: {
      sql: `relpartbound`,
      type: `string`
    },
    
    relkind: {
      sql: `relkind`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
