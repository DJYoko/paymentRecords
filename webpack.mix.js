const mix = require('laravel-mix')

mix.js('src/js/index.js', 'docs/js').react()
mix.disableNotifications()
