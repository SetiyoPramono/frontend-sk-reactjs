import React from 'react'
import Sidebar from '../components/Sidebar'
import KontenAdmin from '../components/Dashboard'
import Layout from '../components/Layout'


export default function Dashboard() {
  return (
    <div>
        <Layout>
        <KontenAdmin />
        </Layout>
    </div>
  )
}
