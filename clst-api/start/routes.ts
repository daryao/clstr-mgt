/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

import * as cluster_data from '../cluster_data.json' assert { type: 'json' }

router.get('/api/clusters', async () => {
  return cluster_data.default.clusters
})

router.get('/api/clusters/:id', ({ params }) => {
  let cluster_uuid: string = params.id
  return cluster_data.default.clusters.find(({ uuid }: { uuid: string }) => uuid === cluster_uuid)
})

router.put('/api/clusters/:id/snapshot-policy', ({ params }) => {
  let cluster_uuid: string = params.id
  return cluster_data.default.clusters.find(({ uuid }: { uuid: string }) => uuid === cluster_uuid)
    ?.cluster_snapshot_policy
})
