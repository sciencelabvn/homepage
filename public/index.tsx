import {
  ErrorBoundary,
  LocationProvider,
  Route,
  Router,
  hydrate,
  prerender as ssr,
} from "preact-iso"
import Header from "./header.tsx"
import NotFound from "./pages/_404.tsx"
import About from "./pages/about"
import Home from "./pages/home"

export function App() {
  return (
    <LocationProvider>
      <div class="app">
        <Header />
        <ErrorBoundary>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  )
}

hydrate(<App />)

export async function prerender(data) {
  return await ssr(<App {...data} />)
}
