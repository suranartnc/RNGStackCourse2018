export default store => next => action => {
  const { api, ...rest } = action
  if (!api) {
    return next(action)
  }

  next({ type: `${action.type}_PENDING` })

  return fetch(api)
    .then(res => res.json())
    .then(data => {
      return store.dispatch({
        ...rest,
        type: `${action.type}_FULFILLED`,
        data
      })
    })
    .catch(error => {
      return store.dispatch({
        ...rest,
        type: `${action.type}_REJECTED`,
        error
      })
    })
}
