/*
包含n个日期时间处理的工具函数模块
*/

/*
  格式化日期
*/
export function formateDate(time) {
  if (!time) return ''
  let date = new Date(time)
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    + ' ' + date.getHours().toString().padStart(2,'0') + ':' + date.getMinutes().toString().padStart(2,'0') + ':' + date.getSeconds().toString().padStart(2,'0')
}

/* 
  padStart() 和 padEnd() 一共接受两个参数，第一是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
  如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。
  'xxx'.padStart(2,'s'); // 'xxx'
  如果省略掉第二个参数，默认使用空格补全长度
*/