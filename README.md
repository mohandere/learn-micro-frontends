# MFEs Serving/Integration Patterns

We can categorize MFE patterns based on how those can be integrated/served in host/container app.

You can read more about MFEs [here](https://mohandere-dev.vercel.app/blog/micro-frontends)

## Build time

- Micro Frontends as NPM packages

## Run time

- Integration via JavaScript: lazy loading the micro frontends bundled using JavaScript
- Federated modules/Dynamic components loading
- Via Web Components
- Via iFrames
- Server Side Includes(SSI)/Server-side template composition
- Dynamic layout building with SSR and Hydration


# MFE Loading patterns
- Per page/route/screen. When each page is a different micro frontend.
- By functionality/feature ⁠
- By sections: Multiple micro frontends in a single screen: More than 1 MFEs on single page
