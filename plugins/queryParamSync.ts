import { Context } from '@nuxt/types'
import { RootState } from '~/store'

export default ({ app: { store, router } }: Context) => {
  if (!(router && store)) {
    return
  }

  router.afterEach((to, _from) => {
    store.commit('setFilter', to.query['filter'])
  })

  store.watch(
    (state: RootState) => state.filter,
    (filter: string) => {
      router.push({ query: { filter } })
    }
  )
}
