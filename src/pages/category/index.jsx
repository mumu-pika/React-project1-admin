/* 
  商品分类的路由
*/

import Card from 'antd/lib/card/Card'
import React from 'react'

export default function Category() {
  // 标题 （Card左侧）
  const title = '一级分类列表'

  // (Card右侧）
  const extra = ''

  return (
    <Card title='标题' extra='更多'>
      <p>Card Content</p>
      <p>Card Content</p>
      <p>Card Content</p>
    </Card>
  )
}
