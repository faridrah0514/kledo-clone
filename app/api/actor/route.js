import React from 'react'

import { openDB } from '@/helper/db';

const conn = await openDB()

const actor_column = ['actor_id', 'first_name', 'last_name', 'last_update']

export async function GET() {
  const result = await conn.all("select * from actor");
  return Response.json({
    column: actor_column,
    data: result
  })
}

