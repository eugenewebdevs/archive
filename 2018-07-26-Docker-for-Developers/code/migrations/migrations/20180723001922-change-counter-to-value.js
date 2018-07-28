'use strict';

exports.up = function(db) {
  return db.dropTable('counter').then(() => {
    return db.createTable("counter", {
      host: {
        type: 'string',
        notNull: true,
        primaryKey: true
      },
      value: {
        type: 'int',
        notNull: true,
        defaultValue: 0
      } 
    });
  });
};

exports.down = function(db) {
  return db.dropTable('counter').then(() => {
    return db.createTable("counter", {
      host: {
        type: 'string',
        notNull: true,
        primaryKey: true
      },
      counter: {
        type: 'int',
        notNull: true,
        defaultValue: 0
      } 
    });
  })
};
