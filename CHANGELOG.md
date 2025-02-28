# Changelog

## 4.1.6

### Patch Changes

- Updated dependencies [[`934d5c06c26f5b822a72be983c219c9f65fabcf2`](https://github.com/Shopify/extensibility/commit/934d5c06c26f5b822a72be983c219c9f65fabcf2)]:
  - @shopify/app-bridge-types@0.0.16

## 4.1.5

### Patch Changes

- [#34](https://github.com/Shopify/extensibility/pull/34) [`617f7c7412bed204f9a757ad11cad8635820e4dc`](https://github.com/Shopify/extensibility/commit/617f7c7412bed204f9a757ad11cad8635820e4dc) Thanks [@charlesdobson](https://github.com/charlesdobson)! - fix build output due to misconfigured build script

- Updated dependencies [[`617f7c7412bed204f9a757ad11cad8635820e4dc`](https://github.com/Shopify/extensibility/commit/617f7c7412bed204f9a757ad11cad8635820e4dc)]:
  - @shopify/app-bridge-types@0.0.15

## 4.1.4

### Patch Changes

- Updated dependencies [[`a79a42172c1af3412ed40213f89e694ac8ada6dd`](https://github.com/Shopify/extensibility/commit/a79a42172c1af3412ed40213f89e694ac8ada6dd)]:
  - @shopify/app-bridge-types@0.0.14

## 4.1.3

### Patch Changes

- [#76](https://github.com/Shopify/extensibility-client/pull/76) [`bb530e3`](https://github.com/Shopify/extensibility-client/commit/bb530e3b1f3f1dabbed5b36b21b2e8c871331122) Thanks [@henrytao-me](https://github.com/henrytao-me)! - Fix leave confirmation for saveBar

## 4.1.2

### Patch Changes

- [#69](https://github.com/Shopify/extensibility-client/pull/69) [`153c3dd`](https://github.com/Shopify/extensibility-client/commit/153c3dd5419db7d518bb5587fa72a606815c44c7) Thanks [@henrytao-me](https://github.com/henrytao-me)! - Bump app-brige-types

## 4.1.1

### Patch Changes

- [#66](https://github.com/Shopify/extensibility-client/pull/66) [`1678fe8`](https://github.com/Shopify/extensibility-client/commit/1678fe89ca019d81a4600feee7fff1116c2bcef2) Thanks [@charlesdobson](https://github.com/charlesdobson)! - expose CHANGELOG.md

## 4.1.0

### Minor Changes

- [#62](https://github.com/Shopify/extensibility-client/pull/62) [`8541115`](https://github.com/Shopify/extensibility-client/commit/8541115f0348e697b5d69f5a535c9c448b9972da) Thanks [@henrytao-me](https://github.com/henrytao-me)! - add src prop to Modal component to support iframe modals

- [#64](https://github.com/Shopify/extensibility-client/pull/64) [`b1fbf2b`](https://github.com/Shopify/extensibility-client/commit/b1fbf2bc44c65ae14b6ad80a9004120ff00f34be) Thanks [@henrytao-me](https://github.com/henrytao-me)! - add SaveBar component to declaratively control the contextual save bar

## 4.0.0

See the [migration guide](https://shopify.dev/docs/api/app-bridge/migration-guide) for more details on how to migrate your app.

### Major Changes

- Added requirement to add the `app-bridge.js` script tag in your app
- Added requirement to use `react` and `react-dom` 18 or higher
- Refactored `Modal` component to accept custom DOM content instead of `src` and `message` props
- Refactored `NavigationMenu` component (renamed `NavMenu`) to accept `<a>` elements as children instead of `navigationLinks` and `matcher` props
- Refactored `TitleBar` component to accept `<a>`, `<button>`, and `<section>` elements as children instead of primaryAction, secondaryActions, actionGroups, and breadcrumbs props
- Removed `ContextualSaveBar` component in favour of it being [automatically configured through `form` elements](https://shopify.dev/docs/api/app-bridge-library/apis/contextual-save-bar)
- Removed `Loading` component in favour of the [`shopify.loading` API](https://shopify.dev/docs/api/app-bridge-library/apis/loading)
- Removed `ResourcePicker` component in favour of the [`shopify.resourcePicker` API](https://shopify.dev/docs/api/app-bridge-library/apis/resource-picker)
- Removed `Toast` component in favour of the [`shopify.toast` API](https://shopify.dev/docs/api/app-bridge-library/apis/toast)
- Refactored `useAppBridge` hook to access the `shopify` global variable instead of the `app` instance
- Removed `useAppBridgeState` hook in favour of the [`shopify.user` API](https://shopify.dev/docs/api/app-bridge-library/apis/user) and others
- Removed `useAuthenticatedFetch` hook as the `app-bridge.js` script injects automatic authorization into the global `fetch` function
- Removed `useContextualSaveBar` hook in favour of it being [automatically configured through `form` elements](https://shopify.dev/docs/api/app-bridge-library/apis/contextual-save-bar)
- Removed `useNavigate` hook in favour of the [browser Navigation API](https://shopify.dev/docs/api/app-bridge-library/apis/navigation)
- Removed `useNavigationHistory` hook in favour of the [browser History API](https://shopify.dev/docs/api/app-bridge-library/apis/navigation)
- Removed `useToast` hook in favour of the [`shopify.toast` API](https://shopify.dev/docs/api/app-bridge-library/apis/toast)
