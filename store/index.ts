export interface RootState {
  filter: string
}

export const state: () => RootState = () => ({
  filter: ''
})

export const mutations = {
  setFilter(state: RootState, value: string) {
    state.filter = value || ''
  }
}
