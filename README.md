## Experiment to write jest tests for solid-app-router

The tests in `mytest.test.tsx` work, but the test in `router.test.tsx` fail due
to Syntax Error: the `import` statement in `solid-app-router/dist/index.js` is
not recognized.

As far as I can understand, that _should_ be fixed as `babel-jest` should be
applied to `solid-app-router` as I excluded it from the ignore patterns using
`transforMIgnorePatterns` in `jest.config.js`. But it doesn't seem to have any
effect. In fact, if I disable `transformIgnorePatterns` so everything is
ignored in `/node_modules`, everything still works. The default `solid-jest`
preset includes for transform everything under `solid-js`, but it seems to have
no effect in making things work. I suspect it still works because
`solid-js/web` uses `.cjs`

To ensure maximum control I've deconstructed the presets `babel-preset-solid`
as well as `solid-jest` into this package.
