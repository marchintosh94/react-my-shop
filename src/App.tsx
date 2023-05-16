import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useRoutes } from 'react-router-dom'
import { ShopPage } from './pages'
import { NavBar, PrivateRoute } from '@/shared'

const CartPage = lazy(() => import('./pages/cart/CartPage'))
const CMSOrdersPage = lazy(() => import('./pages/cms/orders/CMSOrdersPage'))
const CMSPage = lazy(() => import('./pages/cms/CMSPage'))
const CMSProductsPage = lazy(() => import('./pages/cms/products/CMSProductsPage'))
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'))
const LoginPage = lazy(() => import('./pages/login/LoginPage'))
const ThanksPage = lazy(() => import('./pages/checkout/ThanksPage'))

const Router = ({type}: {type: 'obj' | 'el'}) => {

  return type == 'obj'? 
    useRoutes([
      { path: 'shop', element: <ShopPage/> },
      { path: 'cart', element: <CartPage/> },
      { path: 'checkout', element: <CheckoutPage/> },
      { path: 'thankyou', element: <ThanksPage/> },
      { path: 'login', element: <LoginPage/> },
      { 
        path: 'cms', 
        element: (
          <PrivateRoute>
            <CMSPage/> 
          </PrivateRoute>
        ),
        children: [
          { path: "products", element: <CMSProductsPage/> },
          { path: "orders", element: <CMSOrdersPage/> },
          { index: true, element: <Navigate to={'products'}/> },
        ] 
      },
      { path: '*', element: <Navigate to={'shop'}/> }
    ]) :
    (
      <Routes>
        <Route path="shop" element={ <ShopPage/> }/>
        <Route path="cart" element={ <CartPage/> }/>
        <Route path="checkout" element={ <CheckoutPage/> }/>
        <Route path="thankyou" element={ <ThanksPage/> }/>
        <Route path="login" element={ <LoginPage/> }/>

        {/* CMS */}
        <Route path="cms" element={ 
          <PrivateRoute>
            <CMSPage/> 
          </PrivateRoute>
        }>
          <Route path="products" element={ <CMSProductsPage/> }/>
          <Route path="orders" element={ <CMSOrdersPage/> }/>
          <Route index element={ <Navigate to={'products'}/> }/>
        </Route>

        <Route path='*' element={ <Navigate to={'shop'}/>}/>
      </Routes>
    )
}

const App = () => {

  return (
    <BrowserRouter>
      <NavBar/>
      <div className='page'>
        {/*
          Suspense just in case the router is handled with routes components
        */}
        <Suspense fallback={<div>Waiting for page</div>}>
          <Router type='obj'/>
        </Suspense>
      </div> 
    </BrowserRouter>    
  )
}

export default App
