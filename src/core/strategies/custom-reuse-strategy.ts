import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

/**
 * A custom route reuse strategy to keep 'MainComponent' alive across different routes.
 * This strategy will store and retrieve the 'MainComponent' instance,
 * preventing it from being reloaded when navigating between routes
 * that point to the same component (e.g., /home, /about, /region).
 */
export class CustomReuseStrategy implements RouteReuseStrategy {
  private handlers: { [key: string]: DetachedRouteHandle } = {};

  /**
   * Determines if a route should be detached and stored for later reuse.
   * We want to detach if the current route component is 'MainComponent'.
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // Check if the component associated with the current route is 'MainComponent'
    // You might need to adjust 'MainComponent' based on its actual name or a unique identifier.
    // A more robust way might be to add a custom data property to your routes.
    const component = (route.routeConfig && route.routeConfig.component) ? route.routeConfig.component : null;
    return component ? component.name === 'MainComponent' : false;
  }

  /**
   * Stores the detached route handle (which includes the component instance).
   * We'll store it under a generic key since we want to reuse the *same* instance for any of these routes.
   */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // Store the handle under a fixed key, assuming all these routes reuse the same component instance.
    // If you had multiple components you wanted to reuse, you'd use a more specific key.
    if (handle) {
      this.handlers['mainComponent'] = handle;
    }
  }

  /**
   * Determines if a route should be reattached from a stored handle.
   * We reattach if the target route also uses 'MainComponent' and we have a stored instance.
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const component = (route.routeConfig && route.routeConfig.component) ? route.routeConfig.component : null;
    return component ? (component.name === 'MainComponent' && !!this.handlers['mainComponent']) : false;
  }

  /**
   * Retrieves the stored route handle to reattach it.
   */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!route.routeConfig) {
      return null;
    }
    const component = (route.routeConfig && route.routeConfig.component) ? route.routeConfig.component : null;
    if (component && component.name === 'MainComponent') {
      return this.handlers['mainComponent'];
    }
    return null;
  }

  /**
   * Determines if the current route should be reused when navigating to the same route.
   * For our purpose, we typically want to return false here if the component is being reused via detach/attach.
   * Angular's default shouldReuseRoute handles parameter changes etc., but when using a custom detach/attach,
   * this often needs to be `false` to ensure `shouldAttach` and `retrieve` are called correctly.
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // This method determines if a route should be reused (e.g., when only query params change).
    // For detaching/attaching strategy, it's often simpler to return false here if components
    // are being handled by shouldDetach/shouldAttach for different paths.
    // However, if you navigate from /home to /home?param=xyz, you might want to reuse.
    // In this specific scenario of different paths hitting the same component,
    // we want `shouldDetach` and `shouldAttach` to manage the reuse.
    // For explicit path changes (like /home -> /about), this should return false
    // to allow shouldDetach/store/shouldAttach/retrieve to kick in.
    return future.routeConfig === curr.routeConfig;
  }
}