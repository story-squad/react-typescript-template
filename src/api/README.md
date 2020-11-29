# API

This folder is intended to contain stand-alone API modules for different groups of queries.

## File Structure

All API calls should be stored in their own module in this folder for use across the app. Split up separate functionality into separate files within the module and export them all together in the module index like in [the Auth module](./Auth).

Example:

```ts
/**
 * Auth module file with login method/interface
 * /api/Auth/login.ts
 */
export const login = () => {...};
export interface LoginBody {...};

/**
 * Auth module index
 * /api/Auth/index.ts
 */
export * from './login';

/**
 * api/ module index
 * /api/index.ts
 */
export * as Auth from './Auth';
```

The export in the main `api/index.ts` is what should bundle all module data together under a name, whereas the module index should simply export all of its members.

## axiosWithConfig.tsx

This file contains two methods which are configured to connect to the Node API (these should only be used by files in this API folder):

- `axiosWithAuth()`: this method reads in the auth token from localStorage and passes it in the Authorization header of your request.
- `axiosWithoutAuth()`: this method sends a standard request with no authorization to the backend. This is only useful for unprotected requests (login, signup, vote w/o account).

> If you want to connect to the deployed API, you must set `NODE_API_URL` in your `.ENV` . If the proper variable isn't set, axios will use `http://localhost:5000` as the `baseUrl` for config.
