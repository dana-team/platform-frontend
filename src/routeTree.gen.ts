/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'
import { Route as AuthenticatedProjectsImport } from './routes/_authenticated/projects'
import { Route as AuthenticatedProjectsIndexImport } from './routes/_authenticated/projects/index'
import { Route as AuthenticatedProjectsProjectNameImport } from './routes/_authenticated/projects/$projectName'
import { Route as AuthenticatedProjectsProjectNameIndexImport } from './routes/_authenticated/projects/$projectName/index'
import { Route as AuthenticatedProjectsProjectNameSettingsImport } from './routes/_authenticated/projects/$projectName/settings'
import { Route as AuthenticatedProjectsProjectNameSecretsImport } from './routes/_authenticated/projects/$projectName/secrets'
import { Route as AuthenticatedProjectsProjectNameMembersImport } from './routes/_authenticated/projects/$projectName/members'
import { Route as AuthenticatedProjectsProjectNameCreateApplicationImport } from './routes/_authenticated/projects/$projectName/create-application'
import { Route as AuthenticatedProjectsProjectNameApplicationsIndexImport } from './routes/_authenticated/projects/$projectName/applications/index'
import { Route as AuthenticatedProjectsProjectNameApplicationsApplicationNameImport } from './routes/_authenticated/projects/$projectName/applications/$applicationName'
import { Route as AuthenticatedProjectsProjectNameApplicationsApplicationNameIndexImport } from './routes/_authenticated/projects/$projectName/applications/$applicationName/index'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedProjectsRoute = AuthenticatedProjectsImport.update({
  path: '/projects',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedProjectsIndexRoute = AuthenticatedProjectsIndexImport.update(
  {
    path: '/',
    getParentRoute: () => AuthenticatedProjectsRoute,
  } as any,
)

const AuthenticatedProjectsProjectNameRoute =
  AuthenticatedProjectsProjectNameImport.update({
    path: '/$projectName',
    getParentRoute: () => AuthenticatedProjectsRoute,
  } as any)

const AuthenticatedProjectsProjectNameIndexRoute =
  AuthenticatedProjectsProjectNameIndexImport.update({
    path: '/',
    getParentRoute: () => AuthenticatedProjectsProjectNameRoute,
  } as any)

const AuthenticatedProjectsProjectNameSettingsRoute =
  AuthenticatedProjectsProjectNameSettingsImport.update({
    path: '/settings',
    getParentRoute: () => AuthenticatedProjectsProjectNameRoute,
  } as any)

const AuthenticatedProjectsProjectNameSecretsRoute =
  AuthenticatedProjectsProjectNameSecretsImport.update({
    path: '/secrets',
    getParentRoute: () => AuthenticatedProjectsProjectNameRoute,
  } as any)

const AuthenticatedProjectsProjectNameMembersRoute =
  AuthenticatedProjectsProjectNameMembersImport.update({
    path: '/members',
    getParentRoute: () => AuthenticatedProjectsProjectNameRoute,
  } as any)

const AuthenticatedProjectsProjectNameCreateApplicationRoute =
  AuthenticatedProjectsProjectNameCreateApplicationImport.update({
    path: '/create-application',
    getParentRoute: () => AuthenticatedProjectsProjectNameRoute,
  } as any)

const AuthenticatedProjectsProjectNameApplicationsIndexRoute =
  AuthenticatedProjectsProjectNameApplicationsIndexImport.update({
    path: '/applications/',
    getParentRoute: () => AuthenticatedProjectsProjectNameRoute,
  } as any)

const AuthenticatedProjectsProjectNameApplicationsApplicationNameRoute =
  AuthenticatedProjectsProjectNameApplicationsApplicationNameImport.update({
    path: '/applications/$applicationName',
    getParentRoute: () => AuthenticatedProjectsProjectNameRoute,
  } as any)

const AuthenticatedProjectsProjectNameApplicationsApplicationNameIndexRoute =
  AuthenticatedProjectsProjectNameApplicationsApplicationNameIndexImport.update(
    {
      path: '/',
      getParentRoute: () =>
        AuthenticatedProjectsProjectNameApplicationsApplicationNameRoute,
    } as any,
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/projects': {
      id: '/_authenticated/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof AuthenticatedProjectsImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/projects/$projectName': {
      id: '/_authenticated/projects/$projectName'
      path: '/$projectName'
      fullPath: '/projects/$projectName'
      preLoaderRoute: typeof AuthenticatedProjectsProjectNameImport
      parentRoute: typeof AuthenticatedProjectsImport
    }
    '/_authenticated/projects/': {
      id: '/_authenticated/projects/'
      path: '/'
      fullPath: '/projects/'
      preLoaderRoute: typeof AuthenticatedProjectsIndexImport
      parentRoute: typeof AuthenticatedProjectsImport
    }
    '/_authenticated/projects/$projectName/create-application': {
      id: '/_authenticated/projects/$projectName/create-application'
      path: '/create-application'
      fullPath: '/projects/$projectName/create-application'
      preLoaderRoute: typeof AuthenticatedProjectsProjectNameCreateApplicationImport
      parentRoute: typeof AuthenticatedProjectsProjectNameImport
    }
    '/_authenticated/projects/$projectName/members': {
      id: '/_authenticated/projects/$projectName/members'
      path: '/members'
      fullPath: '/projects/$projectName/members'
      preLoaderRoute: typeof AuthenticatedProjectsProjectNameMembersImport
      parentRoute: typeof AuthenticatedProjectsProjectNameImport
    }
    '/_authenticated/projects/$projectName/secrets': {
      id: '/_authenticated/projects/$projectName/secrets'
      path: '/secrets'
      fullPath: '/projects/$projectName/secrets'
      preLoaderRoute: typeof AuthenticatedProjectsProjectNameSecretsImport
      parentRoute: typeof AuthenticatedProjectsProjectNameImport
    }
    '/_authenticated/projects/$projectName/settings': {
      id: '/_authenticated/projects/$projectName/settings'
      path: '/settings'
      fullPath: '/projects/$projectName/settings'
      preLoaderRoute: typeof AuthenticatedProjectsProjectNameSettingsImport
      parentRoute: typeof AuthenticatedProjectsProjectNameImport
    }
    '/_authenticated/projects/$projectName/': {
      id: '/_authenticated/projects/$projectName/'
      path: '/'
      fullPath: '/projects/$projectName/'
      preLoaderRoute: typeof AuthenticatedProjectsProjectNameIndexImport
      parentRoute: typeof AuthenticatedProjectsProjectNameImport
    }
    '/_authenticated/projects/$projectName/applications/$applicationName': {
      id: '/_authenticated/projects/$projectName/applications/$applicationName'
      path: '/applications/$applicationName'
      fullPath: '/projects/$projectName/applications/$applicationName'
      preLoaderRoute: typeof AuthenticatedProjectsProjectNameApplicationsApplicationNameImport
      parentRoute: typeof AuthenticatedProjectsProjectNameImport
    }
    '/_authenticated/projects/$projectName/applications/': {
      id: '/_authenticated/projects/$projectName/applications/'
      path: '/applications'
      fullPath: '/projects/$projectName/applications'
      preLoaderRoute: typeof AuthenticatedProjectsProjectNameApplicationsIndexImport
      parentRoute: typeof AuthenticatedProjectsProjectNameImport
    }
    '/_authenticated/projects/$projectName/applications/$applicationName/': {
      id: '/_authenticated/projects/$projectName/applications/$applicationName/'
      path: '/'
      fullPath: '/projects/$projectName/applications/$applicationName/'
      preLoaderRoute: typeof AuthenticatedProjectsProjectNameApplicationsApplicationNameIndexImport
      parentRoute: typeof AuthenticatedProjectsProjectNameApplicationsApplicationNameImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthenticatedRoute: AuthenticatedRoute.addChildren({
    AuthenticatedProjectsRoute: AuthenticatedProjectsRoute.addChildren({
      AuthenticatedProjectsProjectNameRoute:
        AuthenticatedProjectsProjectNameRoute.addChildren({
          AuthenticatedProjectsProjectNameCreateApplicationRoute,
          AuthenticatedProjectsProjectNameMembersRoute,
          AuthenticatedProjectsProjectNameSecretsRoute,
          AuthenticatedProjectsProjectNameSettingsRoute,
          AuthenticatedProjectsProjectNameIndexRoute,
          AuthenticatedProjectsProjectNameApplicationsApplicationNameRoute:
            AuthenticatedProjectsProjectNameApplicationsApplicationNameRoute.addChildren(
              {
                AuthenticatedProjectsProjectNameApplicationsApplicationNameIndexRoute,
              },
            ),
          AuthenticatedProjectsProjectNameApplicationsIndexRoute,
        }),
      AuthenticatedProjectsIndexRoute,
    }),
  }),
  LoginRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/projects"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/_authenticated/projects": {
      "filePath": "_authenticated/projects.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/projects/$projectName",
        "/_authenticated/projects/"
      ]
    },
    "/_authenticated/projects/$projectName": {
      "filePath": "_authenticated/projects/$projectName.tsx",
      "parent": "/_authenticated/projects",
      "children": [
        "/_authenticated/projects/$projectName/create-application",
        "/_authenticated/projects/$projectName/members",
        "/_authenticated/projects/$projectName/secrets",
        "/_authenticated/projects/$projectName/settings",
        "/_authenticated/projects/$projectName/",
        "/_authenticated/projects/$projectName/applications/$applicationName",
        "/_authenticated/projects/$projectName/applications/"
      ]
    },
    "/_authenticated/projects/": {
      "filePath": "_authenticated/projects/index.tsx",
      "parent": "/_authenticated/projects"
    },
    "/_authenticated/projects/$projectName/create-application": {
      "filePath": "_authenticated/projects/$projectName/create-application.tsx",
      "parent": "/_authenticated/projects/$projectName"
    },
    "/_authenticated/projects/$projectName/members": {
      "filePath": "_authenticated/projects/$projectName/members.tsx",
      "parent": "/_authenticated/projects/$projectName"
    },
    "/_authenticated/projects/$projectName/secrets": {
      "filePath": "_authenticated/projects/$projectName/secrets.tsx",
      "parent": "/_authenticated/projects/$projectName"
    },
    "/_authenticated/projects/$projectName/settings": {
      "filePath": "_authenticated/projects/$projectName/settings.tsx",
      "parent": "/_authenticated/projects/$projectName"
    },
    "/_authenticated/projects/$projectName/": {
      "filePath": "_authenticated/projects/$projectName/index.tsx",
      "parent": "/_authenticated/projects/$projectName"
    },
    "/_authenticated/projects/$projectName/applications/$applicationName": {
      "filePath": "_authenticated/projects/$projectName/applications/$applicationName.tsx",
      "parent": "/_authenticated/projects/$projectName",
      "children": [
        "/_authenticated/projects/$projectName/applications/$applicationName/"
      ]
    },
    "/_authenticated/projects/$projectName/applications/": {
      "filePath": "_authenticated/projects/$projectName/applications/index.tsx",
      "parent": "/_authenticated/projects/$projectName"
    },
    "/_authenticated/projects/$projectName/applications/$applicationName/": {
      "filePath": "_authenticated/projects/$projectName/applications/$applicationName/index.tsx",
      "parent": "/_authenticated/projects/$projectName/applications/$applicationName"
    }
  }
}
ROUTE_MANIFEST_END */
