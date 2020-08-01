<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link rel="stylesheet" href="{{ asset('css/app.css')  }}" type="text/css">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
        <div id="app">
        </div>
    </body>
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</html>
