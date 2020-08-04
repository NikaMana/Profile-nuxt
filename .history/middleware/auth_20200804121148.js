export default function({store, redirect}) {
  if (!store.getters['auth/isAuthenticated']) {
    redirect('/')
  }
  /*if (!store.getters.hasToken) {
    redirect('/login?message=login')
  }*/
}
