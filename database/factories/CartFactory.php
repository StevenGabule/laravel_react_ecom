<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Cart;
use App\Product;
use App\User;

$factory->define(Cart::class, function () {
    return [
        'user_id' => User::whereNotIn('id', [1,2,3])->pluck('id')->random(),
        'product_id' => Product::pluck('id')->random(),
        'qty' => random_int(10, 100)
    ];
});
